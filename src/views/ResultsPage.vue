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
        const API_TOKEN = "d2d52cd33eedaf3c62539e03a9b7ee599c94cce42fb2282a68f92908ea2a63e6";

        fetch("https://www.receitaws.com.br/v1/cnpj/04890965000158/days/10", {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
        })
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
