// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter( d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(driver, revenue) {
  drivers = driver.filter( d => d.revenue > revenue )
  return drivers.map( d => d.name)
}

function exactMatch(driver, obj){
  return driver.filter(function(d){ 
    let b = Object.values(obj);
    return Object.values(d).includes(b[0]);
  })
}

function exactMatchToList(driver, obj) {
  let match = driver.filter(function(d){ 
    let b = Object.values(obj);
    return Object.values(d).includes(b[0]);
  })
  return match.map( d => d.name)
}