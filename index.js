function driversWithRevenueOver(driversArr, revenue) {
  return driversArr.filter(function revenueThreshold(driver) {return driver[`revenue`] > revenue})
}

function driverNamesWithRevenueOver(driversArr, revenue) {
  driverObjectArr = driversWithRevenueOver(driversArr, revenue)
  return driverObjectArr.map(function nameGetter(driver) {return driver[`name`]})
}

function exactMatch(driversArr, object) {
  return driversArr.filter(function matcher(driver) {return driver[`${Object.keys(object)[0]}`] === Object.values(object)[0]})
}

function exactMatchToList(driversArr, object) {
  driverObjectArr = exactMatch(driversArr, object)
  return driverObjectArr.map(function nameGetter(driver) {return driver[`name`]})
}
