import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import Container from '@/components/Container.vue'

Vue.use(BootstrapVue)

describe('Container', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(Container, {
      stubs: {
        Logo: true,
        NavBar: true,
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
