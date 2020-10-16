<template>
  <div class="root">
    <Carousel />
    <UserFilter />
    <Resturant />
  </div>
</template>

<script>
// @ is an alias to /src
import Resturant from '@/components/Resturant';
import Carousel from "@/components/Carousel";
import UserFilter from '@/components/UserFilter';

export default {
  name: 'Root',
  components: {
    Resturant,
    Carousel,
    UserFilter,
  }
}
</script>
