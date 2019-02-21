// Code your solution here:


function driversWithRevenueOver(drivers, revenue){
  return drivers.filter((driver)=> driver.revenue > revenue)
}

function driverNamesWithRevenueOver(dr, revenue){
  return driversWithRevenueOver(dr, revenue).map((selecteDriver)=>selecteDriver.name)
}


function exactMatch(dri, obj){
  let kulf = Object.keys(obj)[0]
  return dri.filter((d) => d[kulf] === obj[kulf])
}


const exactMatchToList = (dri, obj) => {
  return exactMatch(dri,obj).map((d) => d.name)
}
