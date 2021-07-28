<template>
    <v-card class="mx-auto vcard" width="40rem" style="margin-top: -2rem;">
        <v-toolbar flat>
            <form action="" @submit="cnpjSearch($event)">
                <v-text-field
                    label="CNPJ"
                    max-width="25rem"
                    style="margin-top: 5vh;"
                    v-model="cnpj"
                    v-mask="'##.###.###/####-##'"
                    regular
                ></v-text-field>
            </form>

            <v-btn icon>
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
        cnpjSearch(e) {
            e.preventDefault();

            const cnpj = this.cnpj;

            console.log("enviado", cnpj);
        },
    },
};
</script>

<style scoped></style>
