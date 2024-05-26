import { defu } from 'defu'
import type { ErrorOptions } from '~/types'

export enum ErrorKind {
  Application = 'app',
  Fetch = 'fetch',
  Network = 'network'
}

export const useErrorExtended = (error: any, options: ErrorOptions) => {
  options = defu({ kind: ErrorKind.Fetch }, options)

  if (error || options.force) {
    switch (options.kind) {
      case 'fetch':
        return {
          ...error,
          statusMessage: `Page not found: ${options.routePath}`,
          url: options.routePath
        }
        break

      default:
        return { ...useDefault('error'), url: options.routePath }
        break
    }
  }
  return null
}
