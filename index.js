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
    for (const key in obj) {
    return obj[key] === el[key];
  };
});
}

function exactMatchToList(arr, obj) {
  return exactMatch(arr, obj)
  .map(function (element) {
    return element.name;
  })
}
