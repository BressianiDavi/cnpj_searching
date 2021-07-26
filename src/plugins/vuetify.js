import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import VMask from "v-mask";

Vue.use(VMask);

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
});
