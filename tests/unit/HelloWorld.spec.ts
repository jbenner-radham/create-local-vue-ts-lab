import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import EventBus from '@/plugins/EventBus';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const localVue = createLocalVue();

        localVue.use(EventBus);

        const msg = 'new message';
        const wrapper = shallowMount(HelloWorld, {
            localVue,
            propsData: { msg }
        });

        expect(wrapper.text()).to.include(msg);
    });
});
