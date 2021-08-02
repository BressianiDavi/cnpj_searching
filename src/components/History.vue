<template>
    <div>
        <div v-if="history.length > 0">
            <div v-for="item of history" :key="item.date">
                <Card
                    ><a @click="cnpjSearch(item.cnpj)">
                        <div style="font-size: 1.5rem">{{ formatCnpj(item.cnpj) }}</div>
                        <div class="grey--text mb-2">Pesquisa feita em: {{ item.date | date }}</div>
                    </a></Card
                >
            </div>
        </div>

        <div v-else>
            <Card style="padding: 1rem"> Faça sua primeira pesquisa na barra acima</Card>
        </div>
    </div>
</template>

<script>
import Card from "./shared/Card";

export default {
    name: "History",

    components: {
        Card,
    },

    data() {
        return {
            history: [],
        };
    },

    methods: {
        formatCnpj(cnpj) {
            const firstTwoDigits = cnpj[0] + cnpj[1];
            const threeToFiveDigits = cnpj[2] + cnpj[3] + cnpj[4];
            const sixToEightDigits = cnpj[5] + cnpj[6] + cnpj[7];
            const nineToTwelveDigits = cnpj[8] + cnpj[9] + cnpj[10] + cnpj[11];
            const lastTwoDigits = cnpj[12] + cnpj[13];

            return (
                firstTwoDigits +
                "." +
                threeToFiveDigits +
                "." +
                sixToEightDigits +
                "/" +
                nineToTwelveDigits +
                "-" +
                lastTwoDigits
            );
        },

        cnpjSearch(cnpjHistory) {
            this.$router.push({
                path: "/results",
                query: {
                    cnpj: cnpjHistory,
                },
            });
        },
    },
    created() {
        this.history = JSON.parse(localStorage.getItem("history"))?.reverse() || [];
    },
};
</script>

<style></style>
