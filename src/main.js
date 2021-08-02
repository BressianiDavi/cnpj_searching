import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { createDateFilter } from "vue-date-fns";
import { pt } from "date-fns/locale";

Vue.config.productionTip = false;
Vue.filter("date", createDateFilter("dd 'de' MMMM 'de' yyyy 'as' HH:mm:ss", { locale: pt }));

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount("#app");
