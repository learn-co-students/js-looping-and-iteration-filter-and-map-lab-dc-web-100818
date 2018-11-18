// Code your solution here:
function driversWithRevenueOver(arr, num) {
  return arr.filter(function (el) {
    return el.revenue > num;
  });
}

function driverNamesWithRevenueOver(arr, num) {
  return driversWithRevenueOver(arr, num)
  .map(function (el) {
    return el.name;
  });
}

function exactMatch (arr, obj) {
  return arr.filter(function (el) {
    let results = false;
/* why this?*/
    for (const key in obj) {
      results = el[key] === obj[key];
    }

    return results;
  });
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj)
  .map(function (element) {
    return element.name;
  })
}
