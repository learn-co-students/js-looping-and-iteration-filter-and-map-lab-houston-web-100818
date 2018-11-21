// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(driver => driver.revenue > revenue)

};
function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue)
        .map(driver => `${driver.name}`)
};

function exactMatch(drivers, obj){
    return drivers.filter(function (driver) {
        let result = [];

        for(const key in obj){
            result = driver[key] === obj[key];
        }
        return result;
    }

    )}

function exactMatchToList(drivers, obj){
    return exactMatch(drivers,obj)
        .map(driver => `${driver.name}`)
}