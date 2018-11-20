function driversWithRevenueOver(array, revenue) {
  return array.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(array, revenue) {
  newArray = driversWithRevenueOver(array, revenue);
  return newArray.map(driver => driver.name);
}

function exactMatch(array, attrO) {
  return array.filter(driver => driver[Object.keys(attrO)] == Object.values(attrO));
}

function exactMatchToList(array, attrO) {
  newArray = exactMatch(array, attrO);
  return newArray.map(driver => driver.name);
}
