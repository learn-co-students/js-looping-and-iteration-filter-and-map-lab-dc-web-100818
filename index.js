// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter (function(driver) {
      return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driversWithMoolah = driversWithRevenueOver(drivers, revenue);
  return driversWithMoolah.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter (function(driver) {
    let matches = false;

    for (const key in attribute) {
      matches = driver[key] === attribute[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, attribute) {
  const matches = exactMatch(drivers, attribute);
  return matches.map(function(driver) {
    return driver.name;
  });
}
