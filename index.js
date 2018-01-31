const logDriverNames = function (arr) {
  return arr.forEach(function (el) {
    console.log(el.name)
  })
}

const logDriversByHomeTown = function (arr, location) {
  return arr.filter(function (el) {
    return el.hometown === location
  })
}