import { shouldAppendErrorClass, shouldAppendValidClass } from './helpers.js'

Vue.use(window.vuelidate.default)
const { required, minLength, integer, between, email } = window.validators

new Vue({
  el: '#app',

  data: {
    form: {
      name: null,
      age: null,
      email: null
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
        email
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