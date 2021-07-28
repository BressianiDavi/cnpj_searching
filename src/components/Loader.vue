<template>
    <div>
        <v-card class="mx-auto vcard" width="40rem" style="margin-top: 3rem;">
            <v-skeleton-loader
                v-bind="attrs"
                type="list-item-three-line,list-item-three-line,list-item-three-line,list-item-three-line,list-item-three-line,list-item-three-line"
            ></v-skeleton-loader
        ></v-card>
    </div>
</template>

<script>
export default {
    name: "Loader",

    data: () => ({
        attrs: {
            class: "mb-6",
            boilerplate: true,
            elevation: 2,
        },
    }),
};
</script>

<style></style>
