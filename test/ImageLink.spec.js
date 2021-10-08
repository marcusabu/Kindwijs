import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import ImageLink from '@/components/ImageLink.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

describe('ImageLink', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(ImageLink, {
      propsData: {
        text: 'test-text',
        to: '/test-to',
        image: 'test-image',
        color: 'test-color',
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
