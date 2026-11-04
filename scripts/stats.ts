import { execFileSync } from 'node:child_process'
import { parseArgs } from 'node:util'

const HOST = 'quentin-macq.dev'
const API = 'https://api.cloudflare.com/client/v4'
const BROWSERS_SHOWN = 6

const { values: options } = parseArgs({ options: { days: { type: 'string', default: '7' } } })
const days = Number(options.days)
if (!Number.isInteger(days) || days < 1 || days > 30)
  throw new Error('Usage : bun run stats [--days 7] (30 au plus)')

interface StatusCount {
  edgeResponseStatus: number
  requests: number
}

interface ZoneDay {
  dimensions: { date: string }
  sum: {
    requests: number
    pageViews: number
    responseStatusMap: StatusCount[]
    browserMap: { uaBrowserFamily: string; pageViews: number }[]
  }
  uniq: { uniques: number }
}

interface PageloadDay {
  count: number
  sum: { visits: number }
  dimensions: { date: string }
}

const { token } = JSON.parse(
  execFileSync('bunx', ['wrangler', 'auth', 'token', '--json'], { encoding: 'utf8' })
) as {
  token: string
}

async function cloudflare<Result>(path: string, init?: RequestInit): Promise<Result> {
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  })
  const body = (await response.json()) as { errors?: { message: string }[] | null } & Result
  if (!response.ok || body.errors?.length)
    throw new Error(body.errors?.map((error) => error.message).join('\n'))
  return body
}

const { result: zones } = await cloudflare<{ result: { id: string; account: { id: string } }[] }>(
  `/zones?name=${HOST}`
)
const zone = zones[0]
if (!zone) throw new Error(`Zone ${HOST} introuvable pour ce compte Wrangler`)

const shownDays = Array.from({ length: days }, (_, index) => {
  const date = new Date()
  date.setUTCDate(date.getUTCDate() - (days - 1 - index))
  return date.toISOString().slice(0, 10)
})

const { data } = await cloudflare<{
  data: { viewer: { zones: { days: ZoneDay[] }[]; accounts: { pageloads: PageloadDay[] }[] } }
}>('/graphql', {
  method: 'POST',
  body: JSON.stringify({
    query: `query ($zone: string!, $account: string!, $host: string!, $since: Date!) {
      viewer {
        zones(filter: { zoneTag: $zone }) {
          days: httpRequests1dGroups(limit: 100, filter: { date_geq: $since }) {
            dimensions { date }
            sum {
              requests
              pageViews
              responseStatusMap { edgeResponseStatus requests }
              browserMap { uaBrowserFamily pageViews }
            }
            uniq { uniques }
          }
        }
        accounts(filter: { accountTag: $account }) {
          pageloads: rumPageloadEventsAdaptiveGroups(limit: 100, filter: { requestHost: $host, date_geq: $since }) {
            count
            sum { visits }
            dimensions { date }
          }
        }
      }
    }`,
    variables: { zone: zone.id, account: zone.account.id, host: HOST, since: shownDays[0] }
  })
})

const zoneDays = data.viewer.zones[0]?.days ?? []
const pageloads = data.viewer.accounts[0]?.pageloads ?? []
const zoneDay = (day: string) => zoneDays.find((row) => row.dimensions.date === day)
const pageloadDay = (day: string) => pageloads.find((row) => row.dimensions.date === day)
const status = (day: string, codes: number[]) =>
  (zoneDay(day)?.sum.responseStatusMap ?? [])
    .filter((row) => codes.includes(row.edgeResponseStatus))
    .reduce((total, row) => total + row.requests, 0)

const ROWS: [string, (day: string) => number][] = [
  ['Compteur live ouvert', (day) => status(day, [101])],
  ['Visites (Web Analytics)', (day) => pageloadDay(day)?.sum.visits ?? 0],
  ['Pages vues (Web Analytics)', (day) => pageloadDay(day)?.count ?? 0],
  ['Pages vues (bots compris)', (day) => zoneDay(day)?.sum.pageViews ?? 0],
  ['Visiteurs uniques (bots compris)', (day) => zoneDay(day)?.uniq.uniques ?? 0],
  ['Requêtes', (day) => zoneDay(day)?.sum.requests ?? 0],
  ['  refusées ou introuvables', (day) => status(day, [403, 404])]
]

const labelWidth = Math.max(...ROWS.map(([label]) => label.length)) + 2
const cell = (value: string | number) => String(value).padStart(7)

console.info(`\n${HOST}, ${days} derniers jours (UTC)\n`)
console.info(
  `${''.padEnd(labelWidth)}${shownDays.map((day) => cell(day.slice(5))).join('')}${cell('total')}`
)
for (const [label, valueOf] of ROWS) {
  const values = shownDays.map(valueOf)
  console.info(
    `${label.padEnd(labelWidth)}${values.map(cell).join('')}${cell(values.reduce((a, b) => a + b, 0))}`
  )
}

const browsers = new Map<string, number>()
for (const { sum } of zoneDays)
  for (const { uaBrowserFamily, pageViews } of sum.browserMap)
    browsers.set(uaBrowserFamily, (browsers.get(uaBrowserFamily) ?? 0) + pageViews)

console.info('\nPages vues par navigateur (bots compris)')
for (const [browser, pageViews] of [...browsers]
  .sort((a, b) => b[1] - a[1])
  .slice(0, BROWSERS_SHOWN))
  console.info(`${String(pageViews).padStart(6)}  ${browser}`)

console.info(
  '\nLe compteur live s’ouvre dans chaque navigateur qui exécute la page : c’est la mesure la plus proche des visiteurs réels.\n'
)
