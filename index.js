// takes in an array of driver objects, and a number called revenue
const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter( driver => {
    if (driver.revenue > revenue){
      return driver;
    }
  })
}
//an array of driver objects that have revenue greater than the revenue argument

// takes in an array of driver objects, and a number called revenue
const driverNamesWithRevenueOver = (drivers, revenue) => {
  return drivers.map( driver => {
    if (driver.revenue > revenue) {
      return driver.name;
    }
  }).filter( element => element !== undefined);
}
// returns an array of strings representing the name of  the drivers

// takes in an array of driver objects and an object that specifies an attribute and value
const exactMatch = (drivers, attrVal) => {
  let unKey = Object.keys(attrVal);
  return drivers.filter(driver => {
    if (driver[unKey] === attrVal[unKey]){
      return driver;
    }
  })
}

const exactMatchToList = (drivers, attrVal) => {
  return exactMatch(drivers, attrVal).map( driver => driver.name)
}
//returns an array of strings corresponding to the drivers name
