import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const {
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo
} = defaultSettings

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  settingBar: {
    opened: false
  },
}

const mutations = {
  CHANGE_SETTING: (state, {
    key,
    value
  }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  openSettingBar(state, val) {
    state.settingBar.opened = val
  },
}

const actions = {
  changeSetting({
    commit
  }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}