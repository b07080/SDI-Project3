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
        
    //code
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

