<template>
    <v-app>
        <Header :cnpj="cnpjResults" />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import Header from "./components/shared/Header";

export default {
    name: "App",
    components: {
        Header,
    },

    data() {
        return {
            cnpjResults: [],
        };
    },

    created() {
        fetch("https://www.receitaws.com.br/v1/cnpj/09221413000170")
            .then((response) => response.json())
            .then((json) => {
                this.cnpjResults = json;
            });
    },
};
</script>

<style scoped></style>
