<template>
    <v-card class="mx-auto vcard" width="30rem" style="margin-top: -3vh;">
        <v-toolbar flat>
            <v-text-field
                label="CNPJ"
                max-width="25rem"
                style="margin-top: 5vh;"
                v-model="texto"
                v-mask="'##.###.###/####-##'"
                regular
            ></v-text-field>

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
            cnpjResults: [],
            texto: "",
        };
    },

    created() {
        fetch("https://www.receitaws.com.br/v1/cnpj${}")
            .then((response) => response.json())
            .then((json) => {
                this.cnpjResults = json;
            });
    },
};
</script>

<style scoped></style>
