<template>
    <v-card flat>
        <v-toolbar color="primary" dark extended flat>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-toolbar>
        <SearchBar />
    </v-card>
</template>

<script>
import SearchBar from "../SearchBar.vue";

export default {
    name: "Header",

    components: {
        SearchBar,
    },

    props: {
        cnpj: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
