export default {
  install (Vue, options = {}) {
    window.Vue = Vue
    const name = options.name || '$global'
    let data = {}

    function ensureField (key, initValue) {
      if (!Object.getOwnPropertyDescriptor(data, key)) {
        Vue.util.defineReactive(data, key, initValue)
      }
    }

    if (typeof Proxy === 'undefined') {
      if (!options.data) {
        console.log('you need to define some data in order for the fallback mode to work')
      }
    } else {
      Vue[name] = Vue.prototype[name] = new Proxy(data, {
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
    // set init data values
    if (options.data) {
      Object.keys(options.data).forEach(key => ensureField(key, options.data[key]))
    }
  }
}
