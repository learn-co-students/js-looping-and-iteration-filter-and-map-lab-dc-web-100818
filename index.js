// Code your solution here:

function driversWithRevenueOver (driverObjs, revenue) {
  return driverObjs.filter(function (driverObj) {
    return driverObj.revenue > revenue
  })
}

function driverNamesWithRevenueOver (driverObjs, revenue) {
  return driverObjs.filter(d => d.revenue > revenue)
    .map(d => d.name)
}

function exactMatch (driverObjs, matchObj) {
  return driverObjs.filter(function (driverObj) {
    for (const key in matchObj) {
      return matchObj[key] === driverObj[key]
    }
  })
}

function exactMatchToList (driverObjs, matchObj) {
  return exactMatch(driverObjs, matchObj)
    .map(d => d.name)
}
