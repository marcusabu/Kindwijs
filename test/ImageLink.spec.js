import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import ImageLink from '@/components/ImageLink.vue'

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
