function driversWithRevenueOver(drivers, num) {
  return drivers.filter(function(driver){
    return driver.revenue > num
  })

}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(function (el) {
    return el.name
  });
}

function exactMatch(drivers, obj){
  return drivers.filter(function (driver) {
    for (const key in obj){
        if (driver[key] === obj[key]){
          return driver;
        }
    }
  });
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function (el){
    return el.name
  });
}
