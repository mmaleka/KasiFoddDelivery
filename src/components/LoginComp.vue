<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <h3 class="blue-grey--text">Login</h3>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="8">
                <ValidationObserver ref="observer" v-slot="{ }">
                    <form>
                    <ValidationProvider v-slot="{ errors }" name="cell_number" rules="required|max:20">
                        <v-text-field
                        v-model="username"
                        :counter="20"
                        :error-messages="errors"
                        label="cell_number"
                        required
                        ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="password" rules="required">
                        <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        label="password"
                        required
                        ></v-text-field>
                    </ValidationProvider>

                    <!-- <v-btn class="mr-4" @click="submit">submit</v-btn> -->
                    <v-btn block type="submit" @click="Login" value="Submit" color="warning" dark>Login</v-btn>

                    
                    </form>
                </ValidationObserver>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="8">
              <router-link to = "/register">
                <p class="blue-grey--text">or Register</p>
              </router-link>
            </v-col>
            <v-col cols="8">
              <v-btn block color="" dark @click="password_reset()">forgot your password?</v-btn>
            </v-col>
            <router-view></router-view>
        </v-row>
    </v-container>
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
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
        username: '',
        password: '',
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()

      },
      Login(e){
          this.$refs.observer.validate()
          e.preventDefault();
            const LoginData  = {
                username: this.username,
                password: this.password,
            }
            // Send up to parent
            this.$emit('log-in', LoginData );
      },
      password_reset: function () {   
          window.open("http://www.try-coding.co.za/accounts/password_reset/", "_blank");    
      },
    },
  }
</script>