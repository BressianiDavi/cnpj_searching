<template>
    <Card style="width: 50rem">
        <v-card-text>
            <div class="my-4 text-subtitle-1 ">
                <p v-if="cnpjData.nome">Nome da Empresa: {{ cnpjData.nome }}</p>
                <p v-else>Nome da Empresa: --</p>

                <div class="date-type-social">
                    <div v-if="cnpjData.situacao">Situação: {{ cnpjData.situacao }}</div>
                    <div v-else>Situação: --</div>

                    <div v-if="cnpjData.abertura">Desde: {{ cnpjData.abertura }}</div>
                    <div v-else>Desde: --</div>

                    <div v-if="cnpjData.tipo">Tipo: {{ cnpjData.tipo }}</div>
                    <div v-else>Tipo: --</div>

                    <div v-if="cnpjData.capital_social">Capital Social: {{ cnpjData.capital_social }}</div>
                    <div v-else>Capital Social: Não informado</div>
                </div>

                <div style="margin-bottom: 1rem">
                    <div v-if="cnpjData.atividade_principal">
                        <div v-for="(atividade, index) of cnpjData.atividade_principal" :key="atividade.text">
                            Atividade Principal {{ index + 1 }}: {{ atividade.text }} (código: {{ atividade.code }})
                        </div>
                    </div>
                    <div v-else>
                        Atividade Principal: --
                    </div>

                    <div v-if="cnpjData.atividades_secundarias">
                        <div v-for="(atividade, index) of cnpjData.atividades_secundarias" :key="atividade.text">
                            Atividades Secundárias {{ index + 1 }}: {{ atividade.text }} (código: {{ atividade.code }})
                        </div>
                    </div>
                    <div v-else>
                        Atividades Secundárias: --
                    </div>
                </div>

                <div style="margin-bottom: 1rem">
                    <div v-for="(socio, index) of cnpjData.qsa" :key="socio.nome">
                        Sócio {{ index + 1 }} : {{ socio.nome }} ({{ socio.qual }})
                    </div>
                </div>

                <div v-if="cnpjData.logradouro && cnpjData.numero && cnpjData.bairro">
                    Endereço: {{ cnpjData.logradouro }}, {{ cnpjData.numero }} - {{ cnpjData.bairro }}
                </div>
                <div v-else>
                    Endereço: Não informado
                </div>

                <div v-if="cnpjData.municipio && cnpjData.uf">{{ cnpjData.municipio }} - {{ cnpjData.uf }}</div>
                <div v-else>
                    Cidade - UF: Não informado
                </div>

                <div v-if="cnpjData.cep">CEP: {{ cnpjData.cep }}</div>
                <div v-else>CEP: --</div>
            </div>
        </v-card-text>
    </Card>
</template>

<script>
import Card from "./shared/Card";

export default {
    name: "ListResults",

    components: {
        Card,
    },

    props: {
        cnpjData: {
            required: true,
        },
    },
    data() {
        return {
            text: "",
        };
    },
};
</script>

<style scoped>
.date-type-social {
    display: flex;
    justify-content: space-evenly;

    margin-bottom: 1rem;
}
</style>
