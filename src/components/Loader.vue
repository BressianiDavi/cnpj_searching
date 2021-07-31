<template>
    <div>
        <Card>
            <v-skeleton-loader
                v-bind="attrs"
                type="list-item-three-line,list-item-three-line,list-item-three-line,list-item-three-line,list-item-three-line,list-item-three-line"
            ></v-skeleton-loader
        ></Card>
    </div>
</template>

<script>
import Card from "./shared/Card";

export default {
    name: "Loader",

    components: {
        Card,
    },

    data: () => ({
        attrs: {
            class: "mb-6",
            boilerplate: true,
            elevation: 2,
        },
    }),
};
</script>

<style scoped></style>
