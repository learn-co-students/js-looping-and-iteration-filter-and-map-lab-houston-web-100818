function driversWithRevenueOver(drivers, revenue) {
  let d = drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
  return d;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, revenue) {
  return drivers.filter(function(driver) {
    for (key in revenue) {
      if (revenue[key] === driver[key]) {
        return driver;
      }
    }
  });
}

function exactMatchToList(drivers, revenue) {
  return exactMatch(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}
