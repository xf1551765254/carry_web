const db = {
  save(key, value) {
    let projectName = process.env.VUE_APP_PROJECT_NAME
    localStorage.setItem(projectName + "_" + key, JSON.stringify(value))
  },
  get(key, defaultValue = {}) {
    let projectName = process.env.VUE_APP_PROJECT_NAME
    const isExist = JSON.parse(localStorage.getItem(projectName + "_" + key))
    try {
      let localVal;
      if (isExist == null) {
        localVal = defaultValue
      } else {
        localVal = JSON.parse(localStorage.getItem(projectName + "_" + key))
      }
      return localVal

    } catch (err) {
      return defaultValue
    }
  },
  remove(key) {
    let projectName = process.env.VUE_APP_PROJECT_NAME
    localStorage.removeItem(projectName + "_" + key)
  },
  clear() {
    // localStorage.clear()

    let projectName = process.env.VUE_APP_PROJECT_NAME
    for (const key in localStorage) {
      if (key.indexOf(projectName) !== -1) {
        console.log(key)
        localStorage.removeItem(key)
      }
    }
  }
}

export default db
