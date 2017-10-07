import { mount } from 'vue-test-utils'
import TestComp from '@/components/TestComp'
import Vue from 'vue'
import VueGlobal from '@/plugins/global'

Vue.use(VueGlobal)

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const instA = mount(TestComp)
    const instB = mount(TestComp)
    expect(instA.vm.$global).to.be.an('object')
    expect(instB.vm.$global).to.be.an('object')
  })
})
