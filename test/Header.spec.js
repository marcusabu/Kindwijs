import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Header from '@/components/Header.vue'

Vue.use(BootstrapVue)

describe('Header', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
})
