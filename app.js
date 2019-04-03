import { shouldAppendErrorClass, shouldAppendValidClass } from './helpers.js'

Vue.use(window.vuelidate.default)

const { required, minLength, integer, between, email, requiredIf, helpers } = window.validators
const pizzaOrBurger = value => value === 'pizza' || value === 'burger' || !helpers.req(value)

new Vue({
  el: '#app',

  data: {
    form: {
      name: '',
      age: 0,
      email: null,
      food: null,
      newsletter: null,
      githubUsername: ''
    }
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },

      age: {
        required,
        integer,
        between: between(12, 120)
      },

      email: {
        email,
        required: requiredIf(function () {
          return !!this.form.newsletter
        })
      },

      food: {
        pizzaOrBurger
      },

      githubUsername: {
        exists(value) {
          if (value === '') return true

          return axios.get(`//api.github.com/users/${value}`)
        }
      }
    }
  },

  methods: {
    shouldAppendErrorClass,

    shouldAppendValidClass,

    isValid(field) {
      field.$touch()
    },

    submitForm(validation) {
      validation.form.$touch()

      if (!validation.form.$invalid) {
        console.log('successful')
      } else {
        console.log('error')
      }
    }
  }
})