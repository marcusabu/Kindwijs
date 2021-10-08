import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

const $route = {
  name: 'index',
}

describe('NavBar', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(NavBar, {
      mocks: {
        $route,
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
