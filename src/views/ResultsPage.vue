<template>
    <div><ListResults :cnpjData="cnpjResults" /></div>
</template>

<script>
import ListResults from "../components/ListResults.vue";
import jsonp from "jsonp";

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
        jsonp("https://www.receitaws.com.br/v1/cnpj/04890965000158", null, (error, data) => {
            if (error) {
                console.error("error on created results page", error);
                this.cnpjResults = [];
            } else {
                this.cnpjResults = data;
            }
        });
    },
};
</script>

<style></style>
