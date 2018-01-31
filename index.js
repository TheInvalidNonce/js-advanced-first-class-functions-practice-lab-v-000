const logDriverNames = function (arr) {
  return arr.forEach(function (el) {
    console.log(el.name)
  })
}

const logDriversByHometown = function (arr, location) {
  return arr.filter(function (el) {
    if (el.hometown === location) {
      console.log(el['name'])
    }
  })
}