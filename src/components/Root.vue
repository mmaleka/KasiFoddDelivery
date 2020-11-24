<template>
  <div class="root">
    <Carousel />
    <Filter />
    <Resturant />
  </div>
</template>

<script>
// @ is an alias to /src
import Filter from '@/components/Filter';
import Resturant from '@/components/Resturant';
import Category from '@/components/Category';
import Carousel from "@/components/Carousel";


export default {
  name: 'Root',
  components: {
    Resturant,
    Category,
    Carousel,
    Filter,
  }
}
</script>
