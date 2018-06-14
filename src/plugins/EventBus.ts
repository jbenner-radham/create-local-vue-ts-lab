import Vue, { VueConstructor } from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $eventBus: Vue;
    }
}

export default {
    install(_Vue: VueConstructor<Vue>): void {
        _Vue.prototype.$eventBus = new Vue();
    }
};
