<template>
  <div class="root">
    <Carousel />
    <UserFilter />
    <Category />
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category'
import Carousel from "@/components/Carousel";
import UserFilter from '@/components/UIfilter';

export default {
  name: 'Root',
  components: {
    Category,
    Carousel,
    UserFilter,
  }
}
</script>
