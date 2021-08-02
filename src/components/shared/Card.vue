<template>
    <v-card class="mx-auto vcard" width="40rem" style="margin-top: 3rem;"> <slot /></v-card>
</template>

<script>
export default {
    name: "Card",
};
</script>

<style scoped>
.vcard {
    padding: 0.5rem;
}
</style>
