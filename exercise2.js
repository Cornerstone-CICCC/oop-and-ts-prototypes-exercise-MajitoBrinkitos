// Exercise 2: Create a Prototype with Chaining and Inheritance
// Instructions: 
// 1. Create a constructor function called "Device" with a "brand" property and a method "powerOn" that logs "[brand] device is now powered on."
// 2. Create another constructor function called "Smartphone" that inherits from Device, and add a "model" property to Smartphone.
// 3. Add a method "call" to Smartphone's prototype that logs "Calling from [brand] [model]..."

const { prototype } = require("events")



// YOUR CODE HERE
//function Device
function Device (brand) {
    this._brand = brand
}

//method powerOn
Device.prototype.powerOn = function() {
    console.log(`The ${this._brand} device is now powered on.`)
}

//function Smartphone
function Smartphone(brand, model) {
    Device.call(this, brand)
    this._model = model
}

Smartphone.prototype = Object.create(Device.prototype) //Device properties into Smartphone
Smartphone.prototype.constructor = Smartphone

//method call
Smartphone.prototype.call = function() {
    console.log(`Calling from ${this._brand} ${this._model}`)
}


// Test the Smartphone prototype with inheritance
const myPhone = new Smartphone("Apple", "iPhone 14");
myPhone.powerOn();  // Output: Apple device is now powered on. (inherited from Device)
myPhone.call();     // Output: Calling from Apple iPhone 14. (defined in Smartphone)