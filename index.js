// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
    return driver.filter( driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(driver, revenue) {
    drivers = driver.filter( driver => driver.revenue > revenue);
    return drivers.map(driver => driver.name);
}

function exactMatch(driver, att) {
    drivers = driver.filter( driver => driver[Object.keys(att)] == Object.values(att));
    return drivers

}

function exactMatchToList(driver, att) {
    return exactMatch(driver, att).map (driver => driver.name);
    
}

