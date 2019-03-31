function shouldAppendErrorClass(field) {
  return field.$error
}

function shouldAppendValidClass(field) {
  return !field.$invalid && field.$model
}

export { shouldAppendErrorClass, shouldAppendValidClass }