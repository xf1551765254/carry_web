const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')).mystore : {
  user: {
    phone: ""
  },
  shopId: ""
}
export default {
  namespaced: true,
  state
}
