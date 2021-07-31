<template>
    <div>
        <div v-if="isLoading"><Loader /></div>
        <div v-else-if="hasError">
            <Card> Falha ao as buscar informações no servidor, tente novamente em alguns minutos.</Card>
        </div>
        <div v-else>
            <div><ListResults :cnpjData="cnpjResults" /></div>
        </div>
    </div>
</template>

<script>
import ListResults from "../components/ListResults";
import jsonp from "jsonp";
import Loader from "../components/Loader";
import Card from "../components/shared/Card";

const CACHE_KEY = "CACHE_KEY";

export default {
    name: "ResultsPage",

    components: {
        ListResults,
        Loader,
        Card,
    },

    data() {
        return {
            cnpjResults: [],
            isLoading: false,
            hasError: false,
        };
    },

    //life cicle hook : Executado sempre que o component é criado

    created() {
        const cache = JSON.parse(sessionStorage.getItem(CACHE_KEY)) || {};
        const history = JSON.parse(localStorage.getItem("history")) || [];

        const cnpj = this.$route.query.cnpj;

        localStorage.setItem("history", JSON.stringify([...history, { cnpj, date: new Date().getTime() }]));

        if (cache[cnpj]) {
            this.cnpjResults = cache[cnpj];

            return;
        }

        this.isLoading = true;

        jsonp("https://www.receitaws.com.br/v1/cnpj/" + cnpj, { timeout: 5000 }, (error, data) => {
            if (error) {
                console.error("error on created results page", error);
                this.cnpjResults = [];
            } else {
                this.cnpjResults = data;
                cache[cnpj] = data;

                sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
            }
            this.isLoading = false;
            this.hasError = error;
        });
    },
};
</script>

<style></style>
