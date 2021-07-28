<template>
    <v-app>
        <Header />
        <SearchBar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import Header from "./components/shared/Header";
import SearchBar from "./components/shared/SearchBar";

export default {
    name: "App",
    components: {
        Header,
        SearchBar,
    },
};
</script>

<style>
body {
    font-family: "Roboto", sans-serif;
}
</style>
