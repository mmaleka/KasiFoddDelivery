<template>
    <div>
        <li v-for="prod in all_products" :key="prod.id">
            {{ prod.description }}
        </li>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ProductList',
    methods: {
      ...mapActions(['fetchProductList']),
    },
    computed: mapGetters(['all_products']),
    created() {
      this.fetchProductList();
    },
}
</script>

<style>

</style>