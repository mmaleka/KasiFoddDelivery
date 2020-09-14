<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters align="center" justify="center">
      <v-col
      >
        <div>Comments</div>

        <v-card
            outlined
            v-for="comment in product_comments" :key="comment.id"
        >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title v-text="comment.user"></v-list-item-title>
                <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-card>
        
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row align="center" justify="center">
        <v-col cols="12">
            <ValidationObserver ref="observer" v-slot="{ }">
                <form>
                <ValidationProvider v-slot="{ errors }" name="comment">
                    <v-text-field
                    v-model="comment"
                    :error-messages="errors"
                    label="comment"
                    required
                    ></v-text-field>
                </ValidationProvider>

                <v-btn type="submit" @click="addComment" value="Submit" color="primary" dark>Comment</v-btn>
                </form>
            </ValidationObserver>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import { mapGetters } from 'vuex';
import VueJwtDecode from 'vue-jwt-decode';

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})


export default {
    name: "Comment",

    components: {
      ValidationProvider,
      ValidationObserver,
    },

    data: () => ({
        comment: '',
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      addComment(e){
        this.$refs.observer.validate()
        let prod_id = this.$route.params.id
        let user_id = VueJwtDecode.decode(this.$store.getters.userjwt).user_id
        e.preventDefault();
          const CommentData  = {
              comment: this.comment,
              prod_id: prod_id,
              user_id: user_id,
          }
          // finally save the comment here
          console.log("CommentData: ", CommentData.comment);
          this.$store.dispatch('sendComment', CommentData)
          // mapGetters(['product_comments'])
          this.comment = ''

      }
    },

    computed: mapGetters(['product_comments']),
}
</script>

<style>

</style>