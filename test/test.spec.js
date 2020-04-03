import { mount, shallowMount } from '@vue/test-utils'
import workBench from '../src/components/workBench.vue'
import editModule from '../src/components/editModule.vue'
import Vue from 'vue'


const wrapper = mount(workBench, {
    propsData: {
        config: [
            {
                name: "第一块",
                nickName: "第一块111",
                order: 1, // 排序
                width: "1/3",
                height: 160,
                moduleId: "1"
            },
            {
                name: "第二块",
                nickName: "第二块",
                order: 2,
                rowsShow: 5,
                width: "1/3",
                height: 160,
                moduleId: "2"
            },
            {
                name: "第三块",
                nickName: "第三块",
                order: 3,
                rowsShow: 5,
                width: "1/3",
                height: 160,
                moduleId: "3"
            },
        ],
        color: '#dfd'
    }
})
const moduleWrapper = shallowMount(editModule);

describe('workBench.vue', () => {
    const vm = wrapper.vm

    it('renders the correct markup', () => {
        expect(wrapper.find('.blk-title').html()).to.contain('第一块111')

        expect(wrapper.find('.wb-module').html()).to.contain('height: 160px; order: 1;')

        expect(wrapper.find('.blk-header').html()).to.contain('style="background-color: rgb(221, 255, 221);"')

        expect(wrapper.findAll('.wb-module').length).to.be(3)
    })

    it('click edit button', () => {

        expect(wrapper.vm.showEditModule).to.be(false)
        const button = wrapper.find('.blk-edit-btn')
        button.trigger('click');

        expect(wrapper.vm.showEditModule).to.be(true)

        return Vue.nextTick().then(function () {
            expect(wrapper.contains(editModule)).to.be(true)
        })
    })

    it('change module order', () => {
        const button = wrapper.find('.blk-edit-btn')
        button.trigger('click');

        return Vue.nextTick().then(function () {
            const editWrapper = wrapper.find('.em-wrap');
            expect(editWrapper.is(editModule)).to.be(true)

            expect(editWrapper.vm.order).to.be(1)
            editWrapper.setData({ 'order': 2 })

            expect(editWrapper.vm.order).to.be(2)
            const editButton = editWrapper.find('.confirm-btn')
            editButton.trigger('click');

            return Vue.nextTick().then(function () {
                expect(wrapper.vm.config[0].order).to.be(2)

                expect(wrapper.vm.config[1].order).to.be(1)
            })

        })
    })

})