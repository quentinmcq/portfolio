export type TokenType = 'comment' | 'keyword' | 'number' | 'plain' | 'string' | 'type'

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

export function highlight(source: string): Token[][] {
  return source.split('\n').map((line) => (line.length > 0 ? tokenizeTs(line) : []))
}
