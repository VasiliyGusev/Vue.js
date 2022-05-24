
import {mount} from "@vue/test-utils";
import CalcuLator from "../components/CalcuLator";
import { expect } from "@jest/globals";

// eslint-disable-next-line no-undef
describe('Test Calculator', ()=>{

    // Тесты полей
    // eslint-disable-next-line no-undef
    it('test operand1', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        expect(wrapper.vm.operands1).toBe(1)
    });
    // eslint-disable-next-line no-undef
    it('test operand2', () => {
        const wrapper = mount(CalcuLator)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        expect(wrapper.vm.operands2).toBe(1)
    });

    // Тесты кнопок калькуляции
    // eslint-disable-next-line no-undef
    it ('test sum', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name="operand1"]')
        const operand2 = wrapper.find('input[name="operand2"]')
        operand1.setValue('1')
        operand2.setValue('2')
        const btn = wrapper.find('button[name="+"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    });

    // eslint-disable-next-line no-undef
    it ('test minus', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name="operand1"]')
        const operand2 = wrapper.find('input[name="operand2"]')
        operand1.setValue('4')
        operand2.setValue('1')
        const btn = wrapper.find('button[name="-"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    });

    // eslint-disable-next-line no-undef
    it ('test mult', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name="operand1"]')
        const operand2 = wrapper.find('input[name="operand2"]')
        operand1.setValue('2')
        operand2.setValue('3')
        const btn = wrapper.find('button[name="*"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(6)
    });

    // eslint-disable-next-line no-undef
    it ('test sub', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name="operand1"]')
        const operand2 = wrapper.find('input[name="operand2"]')
        operand1.setValue('8')
        operand2.setValue('2')
        const btn = wrapper.find('button[name="/"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    });

    // eslint-disable-next-line no-undef
    it ('test step', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name="operand1"]')
        const operand2 = wrapper.find('input[name="operand2"]')
        operand1.setValue('3')
        operand2.setValue('2')
        const btn = wrapper.find('button[name="**"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(9)
    });

    // eslint-disable-next-line no-undef
    it ('test opr', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name="operand1"]')
        const operand2 = wrapper.find('input[name="operand2"]')
        operand1.setValue('22')
        operand2.setValue('7')
        const btn = wrapper.find('button[name="//"]')
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(3)
    });

    // Тест клавиатуры
    // eslint-disable-next-line no-undef
    it ('test num1', async () => {
        const wrapper = mount(CalcuLator)
        const shower = wrapper.find('input[name="showOf"]')
        await shower.trigger('click')
        const operand = wrapper.find('button[name="1"]')
        operand.trigger('click')
        const operand2 = wrapper.find('input[name=operand1]')
        operand2.trigger('input')

        expect(wrapper.vm.operands1).toBe('1')
    });

    // eslint-disable-next-line no-undef
    it ('test num2', async () => {
        const wrapper = mount(CalcuLator)
        const shower = wrapper.find('input[name="showOf"]')
        await shower.trigger('click')
        const operand = wrapper.find('button[name="2"]')
        operand.trigger('click')
        const operand2 = wrapper.find('input[name=operand1]')
        operand2.trigger('input')

        expect(wrapper.vm.operands1).toBe('2')
    });

    // Тестирование кнопки backspace
    // eslint-disable-next-line no-undef
    it ('test backspace', async () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('123')
        const operand2 = wrapper.find('button[name="backspace"]')
        await operand2.trigger('click')

        expect(wrapper.vm.operands1).toBe('12')
    });

    // Тестирование кнопки Clear
    // eslint-disable-next-line no-undef
    it ('test backspace', () => {
        const wrapper = mount(CalcuLator)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('444')
        const operand2 = wrapper.find('button[name="Clear"]')
        operand2.trigger('click')

        expect(wrapper.vm.operands1).toBe('')
    });
})
