import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper).toMatchSnapshot()
  })
})
