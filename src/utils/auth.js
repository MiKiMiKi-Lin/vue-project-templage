const TOKEN_KEY = 'REP_SESSION_TOKEN'

export function getToken() {
  return window.localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  return window.localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  return window.localStorage.removeItem(TOKEN_KEY)
}
