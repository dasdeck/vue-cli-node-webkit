export default {
  install (Vue) {
    window.Vue = Vue
    let data = {}
    function ensureField (key) {
      if (!Object.getOwnPropertyDescriptor(data, key)) {
        Vue.util.defineReactive(data, key)
      }
    }
    Vue.prototype.$global = new Proxy(data, {
      set (data, key, val, self) {
        ensureField(key)
        data[key] = val
        return true
      },
      get (data, key, self) {
        ensureField(key)
        return data[key]
      },
      deleteProperty (data, key) {
        data[key] = undefined
      }
    })
  }
}
