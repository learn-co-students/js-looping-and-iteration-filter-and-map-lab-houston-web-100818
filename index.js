function driversWithRevenueOver(drivers, revenue){
   return drivers.filter(function (dr) {
        return dr.revenue > revenue;
    })
};

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map(function (dr) {
        return dr.name;
    })
};

function exactMatch(drivers, match){
    return drivers.filter(function (dr) {
        for (key in match) {
            if (match[key] === dr[key]){
                return dr;
            }
        }
    })
}

function exactMatchToList(drivers, match){
    return exactMatch(drivers, match).map (function (dr) {
        return dr.name;
    })
}