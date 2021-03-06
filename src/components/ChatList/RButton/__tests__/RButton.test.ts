import { mount } from '@vue/test-utils'
import RButton from '../RButton.vue'

describe('RButton', () => {
  it('When props is passed check if props exist in component', () => {
    const wrapper = mount(RButton, {
      propsData: {
        color: '#ffffff',
        fontSize: 2,
        fontWeight: 'normal',
        text: 'archived',
        emit: 'archived'
      }
    } as any)

    expect(wrapper.vm.$props.color).toBe('#ffffff')
    expect(wrapper.vm.$props.fontSize).toBe(2)
    expect(wrapper.vm.$props.fontWeight).toBe('normal')
    expect(wrapper.vm.$props.text).toBe('archived')
    expect(wrapper.vm.$props.emit).toBe('archived')
  })

  it('When clicked should emit', () => {
    const wrapper = mount(RButton)
    wrapper.trigger('click')

    expect(wrapper.emitted('archived')).toBeTruthy()
  })
})
