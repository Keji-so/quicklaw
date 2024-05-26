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
    title: 'Nuxt3:SSR:Boilerplate',
    ogTitle: 'Nuxt3:SSR:Boilerplate',
    description: 'This is my Nuxt3:SSR:Boilerplate, let me tell you all about it.',
    ogDescription: 'This is my Nuxt3:SSR:Boilerplate, let me tell you all about it.',
    ogImage: 'https://nuxt.com/social.jpg',
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
