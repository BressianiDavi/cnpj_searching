<template>
    <div>
        <div v-if="isLoading"><Loader /></div>
        <div v-else-if="hasError">
            <v-card class="mx-auto vcard" width="40rem" style="margin-top: 3rem;">
                Falha ao as buscar informações no servidor, tente novamente em alguns minutos.</v-card
            >
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

const CACHE_KEY = "CACHE_KEY";

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

    //life cicle hook : Executado sempre que o component é criado

    created() {
        const cache = JSON.parse(sessionStorage.getItem(CACHE_KEY)) || {};
        const cnpjStorage = JSON.parse(localStorage.getItem("cnpjStorage")) || {};

        const cnpj = this.$route.query.cnpj;

        if (cnpjStorage[cnpj]) {
            this.cnpjResults = cnpjStorage[cnpj];

            return;
        }

        if (cache[cnpj]) {
            this.cnpjResults = cache[cnpj];

            return;
        }

        // TODO:localStorage

        this.isLoading = true;
        jsonp("https://www.receitaws.com.br/v1/cnpj/" + cnpj, { timeout: 5000 }, (error, data) => {
            if (error) {
                console.error("error on created results page", error);
                this.cnpjResults = [];
            } else {
                this.cnpjResults = data;
                cache[cnpj] = data;
                cnpjStorage[cnpj] = data;

                localStorage.setItem("cnpjStorage", JSON.stringify(cnpjStorage));

                sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
            }
            this.isLoading = false;
            this.hasError = error;
        });
    },
};
</script>

<style></style>
