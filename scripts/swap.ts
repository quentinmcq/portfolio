export function swapper(origin: string) {
  return function swap(source: string, search: string, replacement: string): string {
    if (!source.includes(search)) {
      throw new Error(`${origin}: "${search.slice(0, 48)}" not found`)
    }

    return source.replaceAll(search, replacement)
  }
}
