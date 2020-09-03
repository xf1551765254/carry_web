import Cookies from 'js-cookie' // 登录功能

const userToken = 'shopping-ui'
export function getToken() {
  return Cookies.get(userToken)
}

export function setToken(token) {
  return Cookies.set(userToken, token)
}

export function removeToken() {
  return Cookies.remove(userToken)
}
