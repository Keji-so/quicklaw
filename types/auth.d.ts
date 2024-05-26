export interface Auth {
  isLoggedIn: boolean
  accessToken: string | null
  user: Record<string, any>
}

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  age: number
}

export interface AuthOption {
  preferCookie: boolean
}
