import Vue from 'vue'
import { mount } from 'vue-test-utils'

import VueGlobalReactive from '@/plugins/global'
Vue.use(VueGlobalReactive, { name: '$globalStore' })

describe('testing reactive proxy', () => {
  it('test creating of reactive vars', () => {
    let inst = new Vue({})
    expect(inst.$globalStore).to.not.be.undefined
    expect(inst.$global).to.be.undefined
  })
  it('test setting of vars', () => {
    let inst = mount({
      template: `<div>{{$globalStore.value1}}</div>`
    })
    Vue.$globalStore.value1 = 'test'
    inst.setData({})
    expect(inst.html()).to.equal('<div>test</div>')
  })
})
