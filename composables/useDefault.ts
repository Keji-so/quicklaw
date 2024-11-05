import type { ToastProps } from './useToast'
import type { Auth, AuthOption } from '~/types/auth'
import type { Pagination } from '~/types'

const defaults = {
  empty: {},

  auth: {
    user: {},
    accessToken: null,
    isLoggedIn: false
  } as Auth,

  authOption: {
    preferCookie: false
  } as AuthOption,

  meta: {
    title: 'Quicklaw',
    ogTitle: 'Quicklaw',
    description: 'Quicklaw is dedicated to providing easy access to legal services, helping users attain all their legal needs through cheap and easily accessible legal services through a niche of qualified and experienced legal professionals.',
    ogDescription: 'Quicklaw is dedicated to providing easy access to legal services, helping users attain all their legal needs through cheap and easily accessible legal services through a niche of qualified and experienced legal professionals.',
    ogImage: '',
    twitterCard: 'summary_large_image'
  } as Parameters<typeof useSeoMeta>[0],

  error: {
    statusCode: 418,
    statusMessage: 'Something went wrong',
    message: 'It\'s not you, it\'s us 😌',
    description: 'I\'m a teapot. Sorry, I can\'t make coffee. Have some tea instead! or Maybe be go home'
  } as Exclude<ReturnType<typeof useError>['value'], null | Error | undefined>,

  pagination: {
    current_page: 0,
    first_page_url: '',
    from: 0,
    last_page: 0,
    last_page_url: '',
    path: '',
    per_page: 0,
    to: 0,
    total: 0,
    cursor: () => 0
  } as Pagination,

  toastError: {
    bodyClass: 'bg-red-500',
    textClass: 'text-white',
    iconClass: 'text-white',
    progressClass: 'bg-white'
  } as ToastProps
}

type DefaultKeys = keyof typeof defaults

type DefaultValues = typeof defaults

export const useDefault = <K extends DefaultKeys>(defaultName: K): DefaultValues[K] => defaults[defaultName]
