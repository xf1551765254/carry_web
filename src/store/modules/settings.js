import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
import db from '@/utils/localstorage'

const {
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo
} = defaultSettings

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: db.get('TAGS_VIEW', tagsView),
  fixedHeader: db.get('FIX_HEADER', fixedHeader),
  sidebarLogo: db.get('SIDEBAR_LOGO', sidebarLogo),
  settingBar: {
    opened: false
  },
}

const mutations = {
  CHANGE_SETTING: (state, {
    key,
    key_db,
    value
  }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
      db.save(key_db, value)
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
