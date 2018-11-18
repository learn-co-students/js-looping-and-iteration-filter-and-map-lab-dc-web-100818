// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
   return drivers.filter(function(driver) {
    if (driver.revenue > revenue) {
      return driver;
    }
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let names = [];
   drivers.filter(function(driver) {
    if (driver.revenue > revenue) {
      names.push(driver.name)
    }
  })
  return names;
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    for (let key in obj) {
      if (driver[key] === obj[key]) {
        return driver;
      }
    }
  })
}

function exactMatchToList(drivers, obj) {
  let names = [];
  drivers.filter(function(driver) {
    for (let key in obj) {
      if (driver[key] === obj[key]) {
        names.push(driver.name);
      }
    }
  });
  return names;
}