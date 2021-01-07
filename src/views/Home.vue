<template>
  <div class="root">
    <Carousel />
    <Userfilter />
    <Category />
  </div>
</template>

<script>
// @ is an alias to /src
import Userfilter from '@/components/UIfilter';
import Resturant from '@/components/Resturant';
import Category from '@/components/Category';
import Carousel from "@/components/Carousel";


export default {
  name: 'Root',
  components: {
    Resturant,
    Category,
    Carousel,
    Userfilter,
  }
}
</script>
