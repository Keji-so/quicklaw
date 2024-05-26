export const useRecord = <T>(obj: T) => {
  const get = <T>(path: string, functions: (Function | [Function, ...any[]])[] | null = null): T => {
    let pathResult = lodashGet(obj, path)

    if (functions) {
      for (const func of functions) {
        if (typeof func === 'function') {
          pathResult = func(pathResult)
        }
        else if (Array.isArray(func)) {
          const [funcRef, ...params] = func
          pathResult = funcRef(pathResult, ...params)
        }
      }
    }

    return pathResult
  }

  return reactive({
    obj,
    get
  })
}

export const useRecords = <T>(arr: T[]) => arr.map(obj => useRecord(obj))

// Still in beta but works
