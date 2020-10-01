<template>
  <div class="home">
    <Carousel />
    <Category />
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category'
import Carousel from "@/components/Carousel";

export default {
  name: 'Home',
  components: {
    Category,
    Carousel,
  }
}
</script>
