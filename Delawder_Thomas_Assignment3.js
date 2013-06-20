//alert("JavaScript works!");

// Tom Delawder
// SDI 1306
// Project 3




// Object - Storage Unit A

var storageUnit = {
    
    "name": "Unit A",
    "height": 10,
    "length": 10,
    "width": 5,
    "area": function(){      // Method Accessor
        
        var totalArea = this.height * this.length * this.width;
        
        return totalArea;        
        
    }, // End Area Method
    "setLength": function(newLength) { // Method Mutator
        
        this.length = newLength;
        
    } // End Set Length
    
} // End storageUnit object
  
var theArea = storageUnit.area();

console.log("The area of the unit is " + theArea);

storageUnit.setLength(20);

console.log("The new area is " + storageUnit.area());
