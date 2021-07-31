<template>
    <v-card flat>
        <v-toolbar color="primary" dark extended flat>
            <h1 style="font-size: 2rem">
                Consulta de CNPJ
            </h1>
            <div class="icons">
                <router-link to="/">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link to="/history">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-history</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>History</v-list-item-title>
                    </v-list-item>
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
h1 {
    font-size: 2rem;
}

.icons {
    display: flex;
    width: 80%;
    justify-content: flex-end;
}
</style>
