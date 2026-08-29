export type TokenType =
  | 'choice'
  | 'comment'
  | 'divert'
  | 'keyword'
  | 'knot'
  | 'number'
  | 'plain'
  | 'string'
  | 'tag'
  | 'type'

export type Lang = 'ink' | 'ts'

export interface Token {
  text: string
  type: TokenType
}

const TS_RULES: [RegExp, TokenType][] = [
  [/^\/\/.*/, 'comment'],
  [/^'(?:[^'\\]|\\.)*'/, 'string'],
  [
    /^(?:import|from|await|if|throw|export|class|extends|override|private|const|return|new|for|of|this|null|void)\b/,
    'keyword'
  ],
  [/^(?:URL|Error|DurableObject|Response|WebSocket|WebSocketPair|Object|JSON)\b/, 'type'],
  [/^\d+\b/, 'number']
]

function pushToken(tokens: Token[], type: TokenType, text: string) {
  const last = tokens.at(-1)

  if (last && last.type === type) {
    last.text += text
  } else {
    tokens.push({ text, type })
  }
}

function tokenizeTs(line: string): Token[] {
  const tokens: Token[] = []
  let rest = line

  while (rest.length > 0) {
    const rule = TS_RULES.find(([pattern]) => pattern.test(rest))

    if (rule) {
      const match = rest.match(rule[0])![0]
      pushToken(tokens, rule[1], match)
      rest = rest.slice(match.length)
    } else {
      const word = rest.match(/^[A-Za-z_$][\w$]*|^\s+|^./)![0]
      pushToken(tokens, 'plain', word)
      rest = rest.slice(word.length)
    }
  }

  return tokens
}

function tokenizeInk(line: string): Token[] {
  if (line.startsWith('===')) {
    return [{ text: line, type: 'knot' }]
  }

  const tag = line.match(/^(#\s*\w+:?)(.*)$/)

  if (tag) {
    return [
      { text: tag[1], type: 'tag' },
      { text: tag[2], type: 'plain' }
    ]
  }

  const tokens: Token[] = []
  let rest = line

  if (rest.startsWith('*')) {
    tokens.push({ text: '*', type: 'choice' })
    rest = rest.slice(1)
  }

  const divert = rest.indexOf('->')

  if (divert >= 0) {
    pushToken(tokens, 'plain', rest.slice(0, divert))
    pushToken(tokens, 'divert', rest.slice(divert))
  } else {
    pushToken(tokens, 'plain', rest)
  }

  return tokens
}

export function highlight(lang: Lang, source: string): Token[][] {
  const tokenize = lang === 'ink' ? tokenizeInk : tokenizeTs
  return source.split('\n').map((line) => (line.length > 0 ? tokenize(line) : []))
}
