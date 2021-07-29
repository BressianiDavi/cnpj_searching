<template>
    <div>
        <div v-if="isLoading"><Loader /></div>
        <div v-else-if="hasError">
            <v-card class="mx-auto vcard" width="40rem" style="margin-top: 3rem;">
                Falha ao as buscar informações no servidor, tente novamente em alguns minutos.</v-card
            >
        </div>
        <div v-else>
            <ListResults :cnpjData="cnpjResults" />
        </div>
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
            hasError: false,
        };
    },

    created() {
        this.isLoading = true;
        jsonp("https://www.receitaws.com.br/v1/cnpj/" + this.$route.query.cnpj, { timeout: 5000 }, (error, data) => {
            if (error) {
                console.error("error on created results page", error);
                this.cnpjResults = [];
            } else {
                this.cnpjResults = data;
            }
            this.isLoading = false;
            this.hasError = error;
        });
    },
};
</script>

<style></style>
