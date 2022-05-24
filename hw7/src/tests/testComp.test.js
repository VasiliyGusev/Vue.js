
/** Steps
 * Смонтировать компонент [done]
 * Передать пропс [done]
 * Проверить наличие выведенного пропса  [done]
 */
import {mount} from '@vue/test-utils'
import TestCompVue from '../components/TestComp.vue'

// eslint-disable-next-line no-undef
describe('Test Component',()=>{
    // eslint-disable-next-line no-undef
    test('Test Content with text',()=>{
        const wrapper = mount(TestCompVue, {
            propsData: {
                message: "Hello from test"
            }
        })
        // eslint-disable-next-line no-undef
        expect(wrapper.text()).toEqual('The message is: Hello from test')
    })

    // eslint-disable-next-line no-undef
    test('Test Content with html',()=>{
        const wrapper = mount(TestCompVue, {
            propsData: {
                message: "Hello from test"
            }
        })
        // eslint-disable-next-line no-undef
        expect(wrapper.html()).toEqual('<div>\n' +
            '  The message is: Hello from test\n' +
            '</div>')
    })
})