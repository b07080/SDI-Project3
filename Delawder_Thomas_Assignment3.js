//alert("JavaScript works!");

// Tom Delawder
// SDI 1306
// Project 3



var json = {    // JSON Data
    
    "trucks": [ // Property Array
        
        {
            "truck": "15 foot truck"
        },
        {
            "truck": "20 foot truck"
        },
        {
            "truck": "25 foot truck"
        }        
    ]
    
    
}; // End JSON Data

// Variables


var truck1 = "Economy size";
var truck2 = "Standard size";
var truck3 = "Full size";

var truckInfo = json;
for (var key in truckInfo.trucks) {
    if (truckInfo.trucks[key].truck == "15 foot truck") {
        console.log(truck1);
        
    } if (truckInfo.trucks[key].truck == "20 foot truck") {
        console.log(truck2);
        
        } if (truckInfo.trucks[key].truck == "25 foot truck") {
        console.log(truck3);        
        }
}


var totalFeet = "square feet";

// Object - Storage Unit A

var movingTruck = {
    
    "name": "Truck A",
    "height": 12,
    "length": 10,
    "width": 5,
    "supplies": {
        "padding": "furniture covers",
        "loader": "dolly"
        
    },
    "area": function(){      // Method Accessor
        
        var totalArea = this.height * this.length * this.width;
        
        return totalArea;    // Return Number    
        
    }, // End Area Method
    "setLength": function(newLength) { // Method Procedure - does not return  value
        
        this.length = newLength;
        
    } // End Set Length
    
} // End movingTruck object
  
var theArea = movingTruck.area();

console.log("The area of the truck is " + theArea + " " + totalFeet);

movingTruck.setLength(15);

console.log("The new area is " + movingTruck.area() + " " + totalFeet);

console.log("The supplies included with the truck are the " + movingTruck.supplies.padding + " and " + movingTruck.supplies.loader + ".");


// Function
//________________
var person = "customer";

var countDown = function(boxes) {
    
    while (boxes > 0) {
        
        console.log("while boxes area greater then 0 output this code");
        console.log("while boxes are greater ouptut this also");
        
        boxes = boxes - 1; 
        //code
    } // End of While Loop
} // End of CountDown



//__________________________



var myArray = ["Franko", "Jimmy", "Ledo"]; // Global Variables
var company = "Quick Movers";
 


// Number Function with "for" loop

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


// 

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



// Argument

if (pay(bill) >= 150) {
    console.log(pay(bill) + " has been paid, its " + billPaid + " that the bill is paid in full.");
} else {
    console.log("The ammount collected does not appear to be equal or greater then " + pay(bill));
    
    }
