<template>
    <v-card class="mx-auto vcard" width="40rem" style="margin-top: -2rem;">
        <v-toolbar flat>
            <form style="width: 100%;" action="" @submit="cnpjSearch($event)">
                <v-text-field
                    label="CNPJ"
                    style="margin-top: 5vh;"
                    v-model="cnpj"
                    v-mask="'##.###.###/####-##'"
                    regular
                ></v-text-field>
            </form>

            <v-btn @click="cnpjSearch()" icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    name: "SearchBar",

    data() {
        return {
            cnpj: "",
        };
    },

    methods: {
        cnpjSearch(event) {
            if (event) {
                event.preventDefault();
            }

            this.$router.push({
                path: "/results",
                query: {
                    cnpj: this.cnpj.replace(/\D/g, ""),
                },
            });
        },
    },
};
</script>

<style scoped></style>
