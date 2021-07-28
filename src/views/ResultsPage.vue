<template>
    <div>
        <div v-if="isLoading"><Loader /></div>
        <div v-else><ListResults :cnpjData="cnpjResults" /></div>
    </div>
</template>

<script>
import ListResults from "../components/ListResults";
import jsonp from "jsonp";
import Loader from "../components/Loader";

export default {
    name: "ResultsPage",

    components: {
        ListResults,
        Loader,
    },

    data() {
        return {
            cnpjResults: [],
            isLoading: false,
        };
    },

    created() {
        this.isLoading = true;
        jsonp("https://www.receitaws.com.br/v1/cnpj/" + this.$route.query.cnpj, null, (error, data) => {
            if (error) {
                console.error("error on created results page", error);
                this.cnpjResults = [];
            } else {
                this.cnpjResults = data;
            }
            this.isLoading = false;
        });
    },
};
</script>

<style></style>
