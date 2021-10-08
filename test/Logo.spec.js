import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(Logo)
    expect(wrapper).toMatchSnapshot()
  })
})
