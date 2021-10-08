import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

describe('Header', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
})
