import type { User } from './authThunk'

const AUTH_USER_KEY = 'auth_user'

export const authStorage = {
  save(user: User) {
    sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))
  },
  read(): User | null {
    try {
      const raw = sessionStorage.getItem(AUTH_USER_KEY)
      if (!raw) return null
      return JSON.parse(raw) as User
    } catch {
      return null
    }
  },
  clear() {
    sessionStorage.removeItem(AUTH_USER_KEY)
  },
}
