Vue.use(window.vuelidate.default)
const { required, minLength, integer, between } = window.validators

new Vue({
  el: '#app',

  data: {
    form: {
      name: null,
      age: null
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
      }
    }
  },

  methods: {
    submitForm(validation) {
      const { name, age } = validation.form

      if (!name.$invalid && !age.$invalid) {
        console.log('successful')
      } else {
        console.log('error')
      }
    }
  }
})