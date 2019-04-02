function shouldAppendErrorClass(field) {
  console.log(field)
  return field.$error
}

function shouldAppendValidClass(field) {
  return !field.$invalid && field.$model
}

export { shouldAppendErrorClass, shouldAppendValidClass }