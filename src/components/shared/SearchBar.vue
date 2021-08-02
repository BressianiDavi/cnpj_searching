<template>
    <Card style="margin-top: -2.5rem">
        <v-toolbar flat>
            <form style="width: 100%;" @submit="cnpjSearch($event)">
                <v-text-field
                    label="CNPJ"
                    style="margin-top: 5vh;"
                    v-model="cnpj"
                    v-mask="'##.###.###/####-##'"
                    regular
                ></v-text-field>
            </form>

            <v-btn @click="cnpjSearch()" icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-toolbar>
    </Card>
</template>

<script>
import Card from "./Card";

export default {
    name: "SearchBar",

    components: {
        Card,
    },

    data() {
        return {
            cnpj: "",
        };
    },

    methods: {
        cnpjSearch(event) {
            if (event) {
                event.preventDefault();
            }

            if (!this.validateCnpj(this.cnpj)) {
                window.alert("cnpj inválido");

                return;
            }

            this.$router.push({
                path: "/results",
                query: {
                    cnpj: this.cnpj.replace(/\D/g, ""),
                },
            });
        },

        validateCnpj(cnpj) {
            //Função copiada de: https://www.geradorcnpj.com/javascript-validar-cnpj.htm

            cnpj = cnpj.replace(/[^\d]+/g, "");

            if (cnpj == "") return false;

            if (cnpj.length != 14) return false;

            // Elimina CNPJs invalidos conhecidos
            if (
                cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999"
            )
                return false;

            // Valida DVs
            let tamanho = cnpj.length - 2;
            let numeros = cnpj.substring(0, tamanho);
            let digitos = cnpj.substring(tamanho);
            let soma = 0;
            let pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) pos = 9;
            }
            let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(0)) return false;

            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
            if (resultado != digitos.charAt(1)) return false;

            return true;
        },
    },
};
</script>

<style scoped></style>
