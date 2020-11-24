<template>
  <v-carousel
    cycle
    height=auto
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in items"
      :key="i"
      :src="slide.src"
    >
    <!-- <div class="display-3">
        {{ slide.text }} Slide
    </div> -->
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
    name: 'Carousel',
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'this is a first slide',
          'this is the second slide',
          'this ia a third slide',
        ],
        items: [
            {
                src: 'https://storestuff-assets.s3.amazonaws.com/media/user_media/2020/05/Free_to_use_1_luvM66w.png',
                text: 'this is a first slide',
            },
            {
                src: 'https://storestuff-assets.s3.amazonaws.com/media/user_media/2020/05/Free_to_use_2_49Z5kkX.png',
                text: 'this is the second slide',
            },
            {
                src: 'https://storestuff-assets.s3.amazonaws.com/media/user_media/2020/05/Free_to_use_1_luvM66w.png',
                text: 'this ia a third slide',
            },
        ]
      }
    },
}
</script>

<style>

</style>