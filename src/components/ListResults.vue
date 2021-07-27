<template>
    <v-card class="mx-auto vcard" width="40rem" style="margin-top: -3rem;">
        <v-toolbar flat>
            <v-text-field
                label="CNPJ"
                max-width="25rem"
                style="margin-top: 5vh;"
                v-model="texto"
                v-mask="'##.###.###/####-##'"
                regular
            ></v-text-field>

            <v-btn @click="cnpjSearch" icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-toolbar>
        <v-divider></v-divider>

        <v-card-text>
            <div class="my-4 text-subtitle-1 ">Nome da Empresa: {{ cnpj.nome }}</div>
            <div class="my-4 text-subtitle-1 ">Atividade Principal: {{ cnpj.nome }}</div>
            <div class="my-4 text-subtitle-1 ">Desde: {{ cnpj.abertura }}</div>
            <div class="my-4 text-subtitle-1 ">Tipo: {{ cnpj.tipo }}</div>
            <div class="my-4 text-subtitle-1 ">Atividades Secundárias: {{ cnpj.nome }}</div>
            <div class="my-4 text-subtitle-1 ">Responsável legal: {{ cnpj.nome }}</div>
            <div class="my-4 text-subtitle-1 ">Sócios: {{ cnpj.nome }}</div>
            <div class="my-4 text-subtitle-1 ">Situação: {{ cnpj.situacao }}</div>
            <div class="my-4 text-subtitle-1 ">Endereço:</div>
            <div class="my-4 text-subtitle-1 ">{{ cnpj.municipio }} - {{ cnpj.uf }}</div>
            <div class="my-4 text-subtitle-1 ">{{ cnpj.logradouro }} - {{ cnpj.numero }}</div>
            <div class="my-4 text-subtitle-1 ">CEP: {{ cnpj.cep }}</div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "ListResults",
    texto: "",
    methods: {},

    props: {
        cnpj: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
