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

const driversByRevenue = function (arr) {
  return arr.slice().sort(function (a, b) {
    return a.revenue > b.revenue
  })
}

const driversByName = function (arr) {
  return arr.slice().sort(function (a, b) {
    return a.localecompare(name)
  })
}