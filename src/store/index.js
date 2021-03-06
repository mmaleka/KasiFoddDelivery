import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import router from '@/router/index.js'
// import VueAxios from 'vue-axios'

Vue.use(Vuex)
// Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    authorization: '',
    jwt: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    username2: '',
    endpoints: {
      obtainJWT: 'api-food_delivery/api/token/',
      refreshJWT: 'api-food_delivery/api/token/refresh/',
      // baseURL: 'http://127.0.0.1:8080/',
      baseURL: 'https://try-coding.herokuapp.com/'
    },
    loggedIn: '',
    registered: '',
    categories_data: [],
    resturants_data: [],
    products_data: [],
    product_detail_data: [],
    cart_id: '',
    user_cart_data: [],
    user_get_cart_sum: 0,
    comments: [],
    addCartLoading: false,
    completeCartLoading: false,
    user_location: '',
  },
  mutations: {
    updateToken(state, newToken) {
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      localStorage.removeItem('token');
      state.jwt = null;
    },
    updateUsername(state, username) {
      localStorage.setItem('username', username);
      state.jwt = username;
    },
    loginSuccess(state, username) {
      state.loggedIn = true;
      state.username = username;
      state.jwt = localStorage.getItem('token');
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.username = null;
    },
    registerSuccess(state) {
      state.registered = true;
      state.jwt = localStorage.getItem('token');
    },
    registerFailure(state) {
      state.registered = false;
    },
    itemAddedCart() {
      Vue.$toast.open("Failure to registered", {
        timeout: 2000
      });
    },
    nullShit() {
      
    },
    authHeader(state) {
      let token = localStorage.getItem('token');
      let username = localStorage.getItem('username');
      if (username && token) {
        state.authorization = 'Bearer ' + token
      } else {
        state.authorization = '';
      }
    },
    addCategories(state, cat_data) {
      state.categories_data = cat_data;
    },
    addResturants(state, rest_data) {
      state.resturants_data = rest_data;
    },
    addProducts(state, prod_data) {
      state.products_data = prod_data;
    },
    addProductDetail(state, prod_detail_data) {
      state.product_detail_data = prod_detail_data
    },
    addCartID(state, cart_id) {
      state.cart_id = cart_id
    },
    addUserCartData(state, user_cart_data) {
      state.user_cart_data = user_cart_data,
      state.user_get_cart_sum = user_cart_data.get_cart_sum
    },
    addProductComments(state, comment_data) {
      state.comments = comment_data
    },
    addCartLoad(state, loading){
      state.addCartLoading = loading
    },
    completeCartUser(state, loading1){
      state.completeCartLoading = loading1
    },
    updateUserLocation(state, user_location){
      state.user_location = user_location
    }
  },
  getters: {
    isLoggedIn: state => !!state.jwt,
    userName: state => state.username2,
    userjwt: state => state.jwt,
    userName1: state => state.username,
    loggedIn: state => state.loggedIn,

    cartQuantity: state => state.cart_quantity,
    all_categories: state => state.categories_data,
    all_resturants: state => state.resturants_data,
    all_products: state => state.products_data,
    product_detail: state => state.product_detail_data,
    user_cart: state => state.user_cart_data,
    user_cart_sum: state => state.user_get_cart_sum,
    product_comments: state => state.comments,
    cart_loading: state => state.addCartLoading,
    complete_cart_loading: state => state.completeCartLoading,
    user_location: state => state.user_location,
  },
  actions: {
    getUserLocation({ commit }) {

      // listen to Cordova event
      Vue.cordova.on('deviceready', () => {
        
        Vue.cordova.geolocation.getCurrentPosition((position) => {
          // window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
          const API_KEY = 'AIzaSyDUtEbZWwtSvV2PSsu-8jVHMBng9X98FWc'
          const LATLNG = position.coords.latitude + ',' + position.coords.longitude
          const url_geacode = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + LATLNG + '&key=' + API_KEY

          axios.get(url_geacode)
            .then(res_address => {
              console.log(res_address.data.results[0].formatted_address);
              commit('updateUserLocation', res_address.data.results[0].formatted_address);
              

              const url_postUserLocation = this.state.endpoints.baseURL + "api-analytics/api_user_location/"

              axios
                .post(url_postUserLocation, {
                  latlng: LATLNG,
                  location: res_address.data.results[0].formatted_address
                })
                .then(res => console.log(res))
                .catch(err => console.error(err));
                

            })

          

            
          
        }, (error) => {
            console.log(error);
            Vue.$toast.error('Please turn on location', {
            timeout: 2000
            });
        }, {
          timeout: 1000,
          enableHighAccuracy: true
        })

        

      });


    },

    obtainToken({ commit }, user) {
      const username = user.username
      axios.post(this.state.endpoints.baseURL + this.state.endpoints.obtainJWT, user)
        .then((res) => {
          commit('updateToken', res.data.access);
          commit('updateUsername', username);
          const token = res.data.token;
          axios.defaults.headers.common['Authorization'] = token
          this.state.username2 = username
          commit('loginSuccess', username)
          router.push('/');
          Vue.$toast.open("Login successful", {
              timeout: 2000
          });
        })
        .catch(err => {
          commit('loginFailure')

          if (err.response.data.username) {
            Vue.$toast.error(err.response.data.username[0], {
              timeout: 2000
            });
          } else if (err.response.data.email) {
            Vue.$toast.error(err.response.data.email[0], {
              timeout: 2000
            });
          } else if (err.response.data.password) {
            Vue.$toast.error(err.response.data.password[0], {
              timeout: 2000
            });
          } else if (err.response.data.detail) {
            Vue.$toast.error(err.response.data.detail, {
              timeout: 2000
            });
          } else {
            Vue.$toast.error(err.response.data, {
              timeout: 2000
            });
          }


        })
    },
    newRegister({ commit }, registerdata) {
      const { username, first_name, email, password, password_confirm } = registerdata;
      axios.post(this.state.endpoints.baseURL + 'api-food_delivery/auth/accounts/register/', {
        username,
        first_name,
        email,
        password,
        password_confirm
      })
        .then(resUser => {
          this.dispatch('obtainToken', { username, password});
          this.state.username2 = username;
          console.log(resUser);
          let res_user_id = resUser.data.id
          console.log("res_user_id: ", res_user_id);
          this.dispatch('updateUserProfile', { res_user_id });
          commit('registerSuccess');
          // router.push('/');
          Vue.$toast.open("Registration successful", {
            timeout: 2000
          });
        })
        .catch(err => {
          this.commit('registerFailure')
          console.log("err: ", err.response.data);

          if (err.response.data.username) {
            Vue.$toast.error(err.response.data.username[0], {
              timeout: 2000
            });
          } else if (err.response.data.email) {
            Vue.$toast.error(err.response.data.email[0], {
              timeout: 2000
            });
          } else if (err.response.data.password) {
            Vue.$toast.error(err.response.data.password[0], {
              timeout: 2000
            });
          } else if (err.response.data.password_confirm) {
            Vue.$toast.error(err.response.data.password_confirm[0], {
              timeout: 2000
            });
          } else {
            Vue.$toast.error(err.response.data, {
              timeout: 2000
            });
          }


          
        })
    },


    async updateUserProfile({ commit }, res_user_id) {
      commit('nullShit');
      let user_id = res_user_id.res_user_id
      console.log("user_id: ", user_id);
      let url_profileUpdate = this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile/'
      axios.post(url_profileUpdate, {
        user: user_id,
        tag: "food_delivery"
      })
        .then(res => {
          console.log("res_adding_profile: ", res);
        })
        .catch(err => {
          console.log("err_adding_profile: ", err);
        })
    },


    
    getTestAPI() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.state.authorization
        }
      };

      axios.get(
        this.state.endpoints.baseURL + 'api-food_delivery/api_food_delivery_productList/', config
      )
    },

    async fetchCatergories({ commit }) {
      const response = await axios.get(
        this.state.endpoints.baseURL + 'api-food_delivery/api_food_delivery_catergory/'
      )
      commit('addCategories', response.data)
    },

    async fetchResturants({ commit }) {
      const response = await axios.get(
        this.state.endpoints.baseURL + 'api-food_delivery/api_food_delivery_resturent/'
      )
      commit('addResturants', response.data)
    },

    async fetchProductList({ commit }) {

      const responseProducts = await axios.get(
        this.state.endpoints.baseURL + 'api-food_delivery/api_food_delivery_productList/')

      commit('addProducts', responseProducts.data)

    },

    async fetchProductDetail({ commit }, product_id) {

      const responseProductDetail = await axios.get(
        this.state.endpoints.baseURL + 'api-food_delivery/api_food_delivery_detail/' + product_id)

      commit('addProductDetail', responseProductDetail.data)

    },

    async AddtoCart({ commit }, cart_data) {

      console.log("adding to cart lana");
      commit('addCartLoad', true)
      let prod_id = cart_data.prod_id
      let user_id = cart_data.user_id
      let user_quantity = cart_data.user_quantity

      const responseProfile = await axios.get(
        this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/?search=' + user_id)
      let responseProfile_id = responseProfile.data[0].id

      //will get cart item by user later
      const responseCart = await axios.get(
        this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search=' + responseProfile_id)
      
      this.dispatch('FilterUserCart', { responseCart, prod_id, user_id, responseProfile_id, user_quantity });
    },

    async FilterUserCart({ commit }, cart_data2) {

      let user_profile = cart_data2.responseProfile_id;
      let responseCart = cart_data2.responseCart;
      let prod_id = cart_data2.prod_id;
      let user_quantity = cart_data2.user_quantity;

      let new_array = [];

      if (responseCart.data.length > 0){
        new_array = responseCart.data.filter(function (item) {
          return item.owner == user_profile && item.is_complete == false
        });
      }

      commit('nullShit');

      // if new_array.length < 1 then create a new order
      // Basically an update or create
      if (new_array.length == 0) {
        const responseCart2 = await axios.post(
          this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search=' + user_profile, {
            owner: user_profile,
          })

        new_array = [responseCart2.data]

        this.dispatch('fetchCartDetailsUserProfile', { user_profile });

        
        this.dispatch('AddCartItem', { new_array, prod_id, user_profile, user_quantity });

      } else {
        
        this.dispatch('AddCartItem', { new_array, prod_id, user_profile, user_quantity });
      }

    },


    // Finally add the item to the cart
    async AddCartItem({ commit }, cart_data2) {

      
      commit('nullShit');
      let existing_items = cart_data2.new_array[0].cart_item
      let cart_id = cart_data2.new_array[0].id
      let prod_id = cart_data2.prod_id
      let user_quantity = cart_data2.user_quantity
      let user_profile = cart_data2.user_profile

      const url = this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartItem/'
      axios
        .post(url, {
          items: prod_id,
          quantity: user_quantity,
        })
        .then(responseCart2 => {
          this.dispatch('updateCart', { responseCart2, cart_id, user_profile, existing_items })
        })
    },

    async updateCart({ commit }, cart_data3) {
      let cart_item_id = cart_data3.responseCart2.data.id
      let cart_id = cart_data3.cart_id
      let existing_items = cart_data3.existing_items
      existing_items.push(cart_item_id)


      
      const url = this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartdetail/' + cart_id + '/'
      axios
        .patch(url, {
          cart_item: existing_items,
        })
        .then(resupdateCart => {
          Vue.$toast.open("Item added to cart" + resupdateCart, {
            timeout: 2000
          });
          console.log("Finished adding to cart");
          commit('addCartLoad', false)
        })
        // .catch(err => );

    },

    async completeCart({ commit }, checkoutdata) {
      let user_id = checkoutdata.user_id
      let cell_number = checkoutdata.cell_number
      let delivery_address = checkoutdata.delivery_address
      let comment = checkoutdata.comment
      
      console.log("starting to complete cart");
      commit('completeCartUser', true)

      // get the owner using user id
      const res_profile = await axios.get(
        this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/?search=' + user_id)
      let res_profile_id = res_profile.data[0].id
      commit('nullShit');

      // get cart by owner
      const res_user_cart = await axios.get(
        this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search=' + res_profile_id)

      // get the last cart for this user
      let last_user_cart = []
      res_user_cart.data.forEach(function (element) {
        if (element.is_complete == false) {
          last_user_cart = element
        }
      })

      // Finally update the cart to add cellnumber, address, and change to complete
      const url = this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartdetail/' + last_user_cart.id + '/'
      axios.patch(url, {
        cell_number: cell_number,
        delivery_address: delivery_address,
        comment: comment,
        is_complete: true
      })
      .then(resupdateCart => {
        Vue.$toast.open("Thank you for your order" + resupdateCart, {
          timeout: 4000
        });

        
        console.log("resupdateCart: ", resupdateCart.data);
        // Run python function to send email or whatspp to notify service provider
        // Will send the email to notify of order
        let orderNo = resupdateCart.data.id

        console.log("finished to complete cart");
        commit('completeCartUser', false)

        console.log("orderDetails: ", orderNo);
        this.dispatch('sendOrderEmail', { orderNo })

      })
      // .catch(err => );
      
    },

    async fetchCartDetails({ commit }, user_id) {
      // get the owner using user id
      console.log("user_id cart detail: ", user_id.user_id);
      const res_profile = await axios.get(
        this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/?search=' + user_id)
      let res_profile_id = res_profile.data[0].id

      // get cart by owner
      const res_user_cart = await axios.get(
        this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search=' + res_profile_id)

      // get the last cart for this user
      let last_user_cart = []
      res_user_cart.data.forEach(function (element) {
        if (element.is_complete == false) {
          last_user_cart = element
        }
      })
      
      if (last_user_cart.is_complete == true) {
        commit('nullShit');
      } else {
        const url = this.state.endpoints.baseURL + 'api-shopping_cart3/UIapi_shopping_cart3_cartdetail/' + last_user_cart.id + '/'
        const response = await axios.get(url)
        commit('addUserCartData', response.data)
      }
      
    },

    async fetchCartDetailsUserProfile({ commit }, user_profile) {

      let res_profile_id = user_profile

      // get cart by owner
      const res_user_cart = await axios.get(
        this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search=' + res_profile_id)

      // get the last cart for this user
      let last_user_cart = []
      res_user_cart.data.forEach(function (element) {
        if (element.is_complete == false) {
          last_user_cart = element
        }
      })

      if (last_user_cart.is_complete == true) {
        commit('nullShit');
      } else {
        const url = this.state.endpoints.baseURL + 'api-shopping_cart3/UIapi_shopping_cart3_cartdetail/' + last_user_cart.id + '/'
        const response = await axios.get(url)
        commit('addUserCartData', response.data)
      }

    },

    async sendOrderEmail({ commit }, orderDetails) {
      commit('nullShit');
      // get the owner using user id
      let order_id = orderDetails.orderNo
      console.log("order_id: ", order_id);
      const res_email = await axios.get(this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_userEmail/?cart_id=' + order_id)
      console.log("res_email: ", res_email);
    },

    async fetchComments({ commit }, product_id) {

      const res_comments = await axios.get(this.state.endpoints.baseURL + 'api_comments/comments/?search=' + product_id.prod_id)
      console.log("res_comments.data: ", res_comments.data);
      commit('addProductComments', res_comments.data)

    },

    async UserProductView({ commit }, product_data) {
      console.log("commit: ", commit);
      console.log("product_data.data: ", product_data);

      const url = this.state.endpoints.baseURL + 'api-analytics/api_user_product_view/'
      axios.post(url, {
        user: product_data.user_id,
        product: product_data.prod_id,
      })
        .then(res_userproductview => console.log(res_userproductview))
        .catch(err => console.error(err));

    },



    async sendComment({ commit }, comment_data) {
      console.log("commit: ", commit);
      
      let prod_id = comment_data.prod_id
      const url = this.state.endpoints.baseURL + 'api_comments/new_comment/'
      axios.post(url, {
        user: comment_data.user_id,
        product: comment_data.prod_id,
        content: comment_data.comment
      })
      .then(res_comment => 
        this.dispatch('fetchComments', { prod_id, res_comment }))
      .catch(err => console.error(err));

    },


    async sendContact({ commit }, contact_data) {
      console.log("commit: ", commit);

      const url = this.state.endpoints.baseURL + 'api_contact/api_contact/'
      axios.post(url, {
        first_name: contact_data.first_name,
        cell_number: contact_data.cell_number,
        email: contact_data.email,
      })
      .then(res => {
        console.log(res)
        Vue.$toast.open("Thank you. We will get in touch soon", {
          timeout: 4000
        });
      }  
      )
    },

    async RemovefromCart({ commit }, cart_data) {
      console.log("commit: ", commit);
      console.log("item_id: ", cart_data.item_id);
      console.log("user_id: ", cart_data.user_id);
      let user_id = cart_data.user_id

      const url = this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_cart3_cartItem/' + cart_data.item_id + '/'

      axios
        .delete(url)
        .then(res => 
          console.log(res),
          this.dispatch('fetchCartDetails', user_id),
        )
        .catch(err => console.error(err));


    }

  },
  modules: {
  }
})
