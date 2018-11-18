// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter (function (driver) {
    return rev < driver.revenue;
  })
}

function driverNamesWithRevenueOver(drivers, rev) {
  driverArray = driversWithRevenueOver(drivers, rev);

  return driverArray.map (function (driver) {
    return driver.name;
  })
}

function exactMatch(drivers, object) {
  return drivers.filter (function (driver) {
    for (const key in object) {
      return driver[key] === object[key];
    }
  })
}

function exactMatchToList(drivers, object) {
  driverArray = exactMatch(drivers, object);

  return driverArray.map(function (driver) {
    return driver.name;
  })
}
