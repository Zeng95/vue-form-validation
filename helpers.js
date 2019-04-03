function shouldAppendErrorClass(field) {
  return field.$error
}

function shouldAppendValidClass(field) {
  return !field.$invalid && field.$model && field.$dirty
}

export { shouldAppendErrorClass, shouldAppendValidClass }