export const useWatch = <T extends object>(sources: T, callback: (newValue: T, oldValue: T) => void) => watch(sources, callback, {
  deep: typeof sources !== 'function'
})
