// Code your solution here:

function driversWithRevenueOver(arr, num) {
   return arr.filter(function(driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(arr, num) {
  let drivers = arr.filter(function(driver) {
    return driver.revenue > num;
  });
  return drivers.map(function(driver){
    return driver.name;
  });
}

function exactMatch(arr, obj) {
  return arr.filter(function(driver){
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0]
  });
}

function exactMatchToList(arr, obj) {
  let drivers = arr.filter(function(driver) {
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0]
  });
  return drivers.map(function(driver){
    return driver.name;
  });
}
