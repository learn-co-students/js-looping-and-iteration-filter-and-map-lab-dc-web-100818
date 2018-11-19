// Code your solution here:

function driversWithRevenueOver(arr, num) {
  return arr.filter( driver => driver.revenue > num )
}

function driverNamesWithRevenueOver(arr, num) {
  return driversWithRevenueOver(arr, num).map( driver => driver.name )
}

function exactMatch(arr, obj) {
  return arr.filter(function(driver) {
    let match = false

    for(const key in obj) {
      match = obj[key] === driver[key]
    }

    return match
  })
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj).map( driver => driver.name )
}
