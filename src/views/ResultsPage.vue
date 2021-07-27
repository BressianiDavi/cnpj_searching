<template>
    <div><ListResults :cnpj="cnpjResults" /></div>
</template>

<script>
import ListResults from "../components/ListResults.vue";

export default {
    name: "ResultsPage",

    components: {
        ListResults,
    },

    data() {
        return {
            cnpjResults: [],
        };
    },

    created() {
        fetch("https://www.receitaws.com.br/v1/cnpj/04890965000158")
            .then((response) => response.json())
            .then((json) => {
                this.cnpjResults = json;
                console.log("results", this.cnpjResults);
            })
            .catch((error) => {
                console.error("error on created obter results page", error);
                this.cnpjResults = [];
            });
    },
};
</script>

<style></style>
