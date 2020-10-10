/*
 * storage封装
 */
const STORAGE_KEY = 'mall'

export default {
  // 设置模块对应的值
  setItem (key, value, module) {
    if (module) {
      const val = this.getItem(module) || {}
      val[key] = value
      this.setItem(module, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取Storage所有值
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 获取key对应的值
  getItem (key, module) {
    if (module) {
      const val = this.getItem(module)
      if (val) {
        return val[key]
      }
    } else {
      return this.getStorage()[key]
    }
  },
  // 删除key对应的值
  clear (key, module) {
    const val = this.getStorage()
    if (module) {
      delete val[module][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
