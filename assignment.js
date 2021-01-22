//https://github.com/SajibBarua-art/jsAssignment
function kilometerToMeter(kilometer) {
    // To check kilometer is a number or not
    if(typeof(kilometer) !== "number"){
        return "Your input is not a number!"
    }

    // To check kilometer is a positive number or not
    if(kilometer < 0) {
        return "Your input distance can't be a negative value!";
    }

    let meter = kilometer*1000;
    return meter;
}

function budgetCalculator(clocksAmount, phonesAmount, laptopsAmount) {
    // To check all amounts are number or not
    if(typeof(clocksAmount) !== "number" ||
     typeof(phonesAmount) !== "number" || 
     typeof(laptopsAmount) !== "number"){
        return "Your input format is not correct!"
    }

    // To check all amounts are positive number or not
    if(clocksAmount < 0 || phonesAmount < 0 || laptopsAmount < 0) {
        return "Your input amount can't be a negative value!";
    }

    let clocksPrice = clocksAmount*50;
    let phonesPrice = phonesAmount*100;
    let laptopsPrice = laptopsAmount*500;

    let totalBudget = clocksPrice + phonesPrice + laptopsPrice;
    return totalBudget;
}

function hotelCost(totalDays){
    // To check totalDays is a number or not
    if(typeof(totalDays) !== "number"){
        return "Your input is not a number!"
    }

    // To check totalDays is a positive number or not
    if(totalDays < 0){
        return "Your input days can't be a negative number!"
    }

    let totalCost;
    if (totalDays > 20){
        let fiftyPerDays = totalDays - 20;
        // 10*100 for first 10 days hotel cost
        // 10*80 for next 10 days hotel cost
        // fiftyPerDay*50 for other days hotel cost
        totalCost = 10*100 + 10*80 + fiftyPerDays*50;
    } else if (totalDays > 10){
        let eightyPerDays = totalDays - 10;
        totalCost = 10*100 + eightyPerDays*80;
    } else {
        totalCost = totalDays*100;
    }

    return totalCost;
}

function megaFriend(allFriendsName){
    // To check input array is empty or not
    if(allFriendsName.length === 0){
        return "Array is empty!";
    }

    // To check input is an array or not
    if(typeof(allFriendsName) !== "object"){
        return "Your input in not an array!";
    }

    let indexOfMegaName = 0, lengthOfMegaName = allFriendsName[0].length;
    for(let i = 1; i < allFriendsName.length; i++){
        let lengthOfCurrentName = allFriendsName[i].length;
        
        if(lengthOfCurrentName > lengthOfMegaName){
            // update the value of index and length of Mega name
            indexOfMegaName = i;
            lengthOfMegaName = lengthOfCurrentName;
        }
    }

    let megaName = allFriendsName[indexOfMegaName];
    return megaName;
}
