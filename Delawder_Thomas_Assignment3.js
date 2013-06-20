//alert("JavaScript works!");

// Tom Delawder
// SDI 1306
// Project 3


var totalFeet = "square feet";

// Object - Storage Unit A

var movingTruck = {
    
    "name": "Truck A",
    "height": 12,
    "length": 10,
    "width": 5,
    
    "area": function(){      // Method Accessor
        
        var totalArea = this.height * this.length * this.width;
        
        return totalArea;   // Return Number     
        
    }, // End Area Method
    "setLength": function(newLength) { // Method Procedure - does not return a value 
        
        this.length = newLength;
        
    } // End Set Length
    
} // End movingTruck object
  
var theArea = movingTruck.area();

console.log("The area of the truck is " + theArea + " " + totalFeet);

movingTruck.setLength(15);

console.log("The new area is " + movingTruck.area() + " " + totalFeet);


