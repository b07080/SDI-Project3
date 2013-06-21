var json = {    // JSON Data
    
    "trucks": [ // Property Array
        
        {
            "truck": "15 foot truck" //objects
        },
        {
            "truck": "20 foot truck"
        },
        {
            "truck": "25 foot truck"
        }        
    ]
    
    
}; // End JSON Data


// Global Variables / Array
var myArray = ["Franko", "Jimmy", "Ledo"]; // Global Variables
var company = "Quick Movers";
var customer = "Jim";
var truckSizes = ["Economy size", "Standard size", "Full size"];
var palletSpace = 700;
var totalFeet = "square feet";
var truckCost = [100, 150, 200];

console.log(customer + " is looking for a moving truck so that he can relocate 3 pallets of company supplies to a new building.");
console.log("Each pallet has 36 boxes and that takes up " + palletSpace + " " + totalFeet + ".");
console.log(company + " has offered 3 different truck sizes.");



var truckInfo = json;
for (var key in truckInfo.trucks) {
    if (truckInfo.trucks[key].truck == "15 foot truck") {
        console.log(truckSizes[0] + " is a 15 foot truck.");
        
    } if (truckInfo.trucks[key].truck == "20 foot truck") {
        console.log(truckSizes[1] + " is a 20 foot truck.");
        
        } if (truckInfo.trucks[key].truck == "25 foot truck") {
        console.log(truckSizes[2] + " is a 25 foot truck.");        
        }
}

console.log(company + " advertises that they have increased the " + truckSizes[0] + " truck by 30%.");




// Object - Moving Truck 1 / local variables
var movingTruck = {
    
    "name": "Truck A",
    "height": 12,
    "length": 10,
    "width": 7,
    "supplies": {
        "padding": "2 furniture covers",
        "loader": "1 dolly"
        
    },
    "area": function(){      // Method Accessor
        
        var totalArea = this.height * this.length * this.width;
        
        return totalArea;    // Return Number    
        
    }, // End Area Method
    "setLength": function(newLength) { // Method Procedure - does not return  value
        
        this.length = newLength;
        
    } // End Set Length
    
} // End movingTruck object 1

var theArea = movingTruck.area();

console.log("The previous area of the truck was " + theArea + " " + totalFeet + ".");

movingTruck.setLength(15);  // Changing a value / insert

console.log("The new area is " + movingTruck.area() + " " + totalFeet + ".");
console.log("The supplies included with the truck are the " + movingTruck.supplies.padding + " and " + movingTruck.supplies.loader + ".");




// Object - Moving Truck 2 / local variables
var movingTruck = {
    
    "name": "Truck B",
    "height": 12,
    "length": 20,
    "width": 7,
    "supplies": {
        "padding": "10 furniture covers",
        "loader": "2 dolly"
        
    },
    "area": function(){      // Method Accessor
        
        var totalArea = this.height * this.length * this.width;
        
        return totalArea;    // Return Number    
        
    } // End Area Method
    
} // End movingTruck object 2


  
var theArea = movingTruck.area();

console.log("The area of the " + truckSizes[1] + " is " + movingTruck.area() + " " + totalFeet + ".");
console.log("The supplies included with the truck are the " + movingTruck.supplies.padding + " and " + movingTruck.supplies.loader + "'s.");




// Object - Moving Truck 3 / local variables
var movingTruck = {
    
    "name": "Truck C",
    "height": 12,
    "length": 25,
    "width": 7,
    "supplies": {
        "padding": "20 furniture covers",
        "loader": "dolly"
        
    },
    "area": function(){      // Method Accessor
        
        var totalArea = this.height * this.length * this.width;
        
        return totalArea;    // Return Number    
        
    } // End Area Method
    
} // End movingTruck object 3


  
var theArea = movingTruck.area();

console.log("The area of the " + truckSizes[2] + " is " + movingTruck.area() + " " + totalFeet + ".");
console.log("The supplies included with the truck are the " + movingTruck.supplies.padding + " and 3 " + movingTruck.supplies.loader + "'s.");




var findTruck = function() {
var palletSpaceNeeded = 2100;
    
    for (var truckNeeded = palletSpaceNeeded; truckNeeded <= palletSpaceNeeded; truckNeeded++) {
    
            console.log("We need a truck that can hold " + palletSpaceNeeded + " square feet or more.");
        
            if (palletSpaceNeeded <= 1260) {
                console.log("Lets rent the Economy size Truck.");
            
                if (palletSpaceNeeded <= 1680) {
                    console.log("Lets rent the Standard size Truck.");
            
                    if (palletSpaceNeeded >= 2100) {
                        console.log("Lets rent the Full size Truck.");
                        
                        return truckNeeded;
             }            
        }

    }

}
    
   
    
}

var truckFound = findTruck(2100);
console.log("So lets rent the Full size truck.");






// Number Function with for loop and return
var findSeat = function() {
    
    console.log("Three movers from " + company + " are tasked with the job of loading a moving truck for a customer.");
    console.log(myArray[0] + ", " + myArray[1] + " and " + myArray[2] + " need 3 " + movingTruck.supplies.loader + "'s to load the truck.");
        for (var i = 2; i <=3; i++) {
    
            console.log("The " + movingTruck.supplies.loader + " count is " + i + ".");
        
        if (i < 3) {
            console.log(myArray[1] + " says: Lets look around the office for another " + movingTruck.supplies.loader + "... Heres 1, I'll bring it over to the truck!");
        } else {
            console.log(myArray[0] + " says: Now lets get started!");
        }
    }
    
    return i;
    
}

var seatFound = findSeat();
console.log("All the movers are ready to start loading the truck!");




// Array Function with while loop

var soldCount = function(pallet) {

    while (pallet > 0) {
        
        console.log("The " + myArray.length + " movers look at the " + pallet + " boxes on the pallet."); 
        console.log(myArray[0] + ", " + myArray[1] + " and " + myArray[2] + " each pick up 3 boxes and put them on their " + movingTruck.supplies.loader + ".");
        
        pallet = pallet - 9;
        
        if (pallet > 0) {
            console.log("Each one then carefully stacks their boxes onto the truck.");
            console.log("Now back to the pallet to get more boxes...");
            
        } else {
            console.log(myArray[2] + " great job guys that looks like all of them.");
            
        }// End IF
        
        if (pallet === 1) {
            return pallet;
        }
        
    }// End while LOOP
    return pallet;
    
}// End soldCount

soldCount(36);

var finalCount = soldCount(0);
console.log("There are " + finalCount + " boxes left.");
console.log(customer + " says: thank you for your service here is the 150.00 dollars for the Full Size 25 foot truck rental.");

// function and while loop with return


var bill = 150
var pay = function(bill) {
var dollarBills = 0;

    while (dollarBills < bill) {
        console.log("Ammount paid " + dollarBills + " dollars.");
        console.log("He hands a 50 dollar bill");
        
        dollarBills+=50;
    };
    return dollarBills;
}



// Procedure / Argument / outputs / back
var billPaid = true;
var unPaid = false;

if (pay(bill) >= 150) {
    console.log("Its " + billPaid);
    console.log(bill + " has been paid, the bill is paid in full.");
} else {
    console.log("The ammount collected does not appear to be equal or greater then " + pay(bill));
    }
    
// Finish
