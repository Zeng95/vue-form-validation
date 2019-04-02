import { shouldAppendErrorClass, shouldAppendValidClass } from './helpers.js'

Vue.use(window.vuelidate.default)

const { required, minLength, integer, between, email, helpers, requiredIf } = window.validators
const pizzaOrBurger = value => value === 'pizza' || value === 'burger' || !helpers.req(value)

new Vue({
  el: '#app',

  data: {
    form: {
      name: null,
      age: null,
      email: null,
      food: null,
      newsletter: null
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
          return this.form.newsletter
        })
      },

      food: {
        pizzaOrBurger
      }
    }
  },

  methods: {
    shouldAppendErrorClass,

    shouldAppendValidClass,

    nameIsValid(validation) {
      validation.name.$touch()
    },

    ageIsValid(validation) {
      validation.age.$touch()
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