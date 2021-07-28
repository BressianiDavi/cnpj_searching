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
        console.log("created", this.$route.query);
        jsonp("https://www.receitaws.com.br/v1/cnpj/" + this.$route.query.cnpj, null, (error, data) => {
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
