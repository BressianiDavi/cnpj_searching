<template>
    <v-card class="mx-auto vcard" width="40rem" style="margin-top: 3rem;">
        <v-card-text>
            <div v-if="cnpjData.message">
                {{ cnpjData.message }}
            </div>
            <div v-else>
                <div class="my-4 text-subtitle-1 " v-if="cnpjData.nome">Nome da Empresa: {{ cnpjData.nome }}</div>
                <div class="my-4 text-subtitle-1 " v-else>Nome da Empresa: --</div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.atividade_principal">
                    <p v-for="(atividade, index) of cnpjData.atividade_principal" :key="atividade.text">
                        Atividade Principal {{ index + 1 }}: {{ atividade.text }} (código: {{ atividade.code }})
                    </p>
                </div>
                <div class="my-4 text-subtitle-1 " v-else>
                    Atividade Principal: --
                </div>
                <div class="my-4 text-subtitle-1 " v-if="cnpjData.abertura">Desde: {{ cnpjData.abertura }}</div>
                <div class="my-4 text-subtitle-1 " v-else>Desde: --</div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.tipo">Tipo: {{ cnpjData.tipo }}</div>
                <div class="my-4 text-subtitle-1 " v-else>Tipo: --</div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.capital_social">
                    Capital Social: {{ cnpjData.capital_social }}
                </div>
                <div class="my-4 text-subtitle-1 " v-else>Capital Social: Não informado</div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.atividades_secundarias">
                    <p v-for="(atividade, index) of cnpjData.atividades_secundarias" :key="atividade.text">
                        Atividades Secundárias {{ index + 1 }}: {{ atividade.text }} (código: {{ atividade.code }})
                    </p>
                </div>
                <div class="my-4 text-subtitle-1 " v-else>
                    Atividades Secundárias: --
                </div>

                <div class="my-4 text-subtitle-1 " v-for="(socio, index) of cnpjData.qsa" :key="socio.nome">
                    Sócio {{ index + 1 }} : {{ socio.nome }} ({{ socio.qual }})
                </div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.situacao">Situação: {{ cnpjData.situacao }}</div>
                <div class="my-4 text-subtitle-1 " v-else>Situação: --</div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.logradouro && cnpjData.numero && cnpjData.bairro">
                    Endereço: {{ cnpjData.logradouro }}, {{ cnpjData.numero }} - {{ cnpjData.bairro }}
                </div>
                <div class="my-4 text-subtitle-1 " v-else>
                    Endereço: Não informado
                </div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.municipio && cnpjData.uf">
                    {{ cnpjData.municipio }} - {{ cnpjData.uf }}
                </div>
                <div class="my-4 text-subtitle-1 " v-else>
                    Cidade - UF: Não informado
                </div>

                <div class="my-4 text-subtitle-1 " v-if="cnpjData.cep">CEP: {{ cnpjData.cep }}</div>
                <div class="my-4 text-subtitle-1 " v-else>CEP: --</div>
            </div>  
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "ListResults",

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

<style scoped></style>
