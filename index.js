// Code your solution here:
function driversWithRevenueOver(drivers, arg) {
  return drivers.filter (function(drv) {
    return drv['revenue'] > arg;
  });
}

function driverNamesWithRevenueOver(drivers, arg) {
  return driversWithRevenueOver(drivers,arg).map(function(drv) {
    return drv['name'];
  });
}

function exactMatch(drivers, arg) {
  return drivers.filter(function(drv) {
    let x = false;

    for (const key in arg) {
      x = drv[key] === arg[key];
    }
    return x;
  })
}

function exactMatchToList(drivers, arg) {
  return exactMatch(drivers, arg).map(function(drv) {
    return drv['name'];
  });
}
