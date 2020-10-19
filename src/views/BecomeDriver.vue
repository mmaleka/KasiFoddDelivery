<template>
  <div>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <h3 class="blue-grey--text">Make extra money on your time. Start delivering toaday </h3>
          <p class="grey--text">
            Grab your bike or car and start delivering when ever you want.
            All you need is a smart phone for navigation. Sign up with kasi
            food delivery and we will connect with resturants.
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="8">
            <h3 class="blue-grey--text">Why delivery with us?</h3>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-card
            class="mx-auto"
            max-width="300"
            tile
          >
            <v-list disabled>
              <v-subheader></v-subheader>
              <v-list-item-group
                v-model="item"
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-icon>
                    <!-- <v-icon v-text="item.icon"></v-icon> -->
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
            <v-col cols="8">
                <ValidationObserver ref="observer" v-slot="{ }">
                    <form>
                    <ValidationProvider v-slot="{ errors }" name="cell_number" rules="required|max:20">
                        <v-text-field
                        v-model="cell_number"
                        :counter="20"
                        :error-messages="errors"
                        label="cell_number"
                        required
                        ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="first_name" rules="required">
                        <v-text-field
                        v-model="first_name"
                        :error-messages="errors"
                        label="first_name"
                        required
                        ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="email" rules="required">
                        <v-text-field
                        v-model="email"
                        :error-messages="errors"
                        label="email"
                        required
                        ></v-text-field>
                    </ValidationProvider>

                    <!-- <v-btn class="mr-4" @click="submit">submit</v-btn> -->
                    <v-btn block type="submit" @click="addContact" value="Submit" color="warning" dark>Sign up</v-btn>

                    
                    </form>
                </ValidationObserver>
            </v-col>
        </v-row>

    </v-container>
  </div>
</template>

<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
    name: "BecomeDriver",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      item: 1,
      items: [
        { text: 'Get paid weekely', icon: 'mdi-clock' },
        { text: 'Keep track of all your payments', icon: 'mdi-account' },
        { text: 'Keep all your tips', icon: 'mdi-flag' },
        { text: 'Work full time or part time', icon: 'mdi-flag' },
      ],
      first_name: '',
      cell_number: '',
      email: '',
    }),
    methods: {
      submit () {
        // this.$refs.observer.validate()
      },
      addContact(e){
        e.preventDefault();
          const ContactData  = {
            first_name: this.first_name,
            cell_number: this.cell_number,
            email: this.email,
          }
          // finally save the comment here
          console.log("ContactData: ", ContactData);
          this.$store.dispatch('sendContact', ContactData)
          // mapGetters(['product_comments'])
          // this.first_name = ''
          // this.cell_number = ''
          // this.email = ''

      }
    }
}
</script>

<style>

</style>