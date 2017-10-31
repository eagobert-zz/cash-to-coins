
//Define constant named "piggyBank", that accepts the parameter dollarAmount to determine number of quarters, nickels, dimes, and pennies in piggybank

const piggyBank = function(dollarAmount){

    //create formulas to calculate the number of quarters, nickels, dimes, and pennies in the piggybank
    let quarters = Math.floor(dollarAmount/.25);
    let dimes = Math.floor((dollarAmount-(quarters*.25))/.10);
    let nickels = Math.floor((dollarAmount-(quarters*.25)-(dimes*.10))/.05);
    let pennies = Math.floor((dollarAmount-(quarters*.25)-(dimes*.10)-(nickels*.05))/.01);
    //still working... pennies is 1 cent off.  need to reconfigure.

    return Object.create(null, {

        //define keys of object "piggyBank"
        "Quarters": {value: quarters, enumerable: true},
        "Dimes": {value: dimes, enumerable: true},
        "Nickels": {value: nickels,enumerable: true},
        "Pennies": {value: pennies, enumerable: true}
    })
    
    }
    
    //Test
    console.log(piggyBank(158));
    console.log(piggyBank(1.60))
    console.log(piggyBank(.24));