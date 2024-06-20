// 1 - Classes

class Cookie {
constructor(color) {
 this.color = color
}
getColor(){
 return this.color
}
setColor(){
 this.color
}
}

let cookieOne = new Cookie('blue') 
let cookieTwo = new Cookie('green') 

cookieOne.getColor() = blue
cookieTwo.getColor() = green
cookieTwo.setColor(yellow); // now is yellow

// 2 - Pointers
let num1 = 5
let num2 = num1 
console.log(num2) // 5
console.log(num1) // 5
num1 = 10 
console.log(num1) // 10
console.log(num2) // STILL is 5

// This happens because is not using a POINTER, is just copying the value of num1 to num2
// Now using a pointer

let obj1 = {name: 'John'}
let obj2 = obj1 // obj2 is pointing to obj1, so basically if you change obj1, obj2 will change too
let obj3 = obj2 // obj3 is pointing to obj2, so basically if you change obj2, obj3 will change too
// Javascript uses pointers for objects, so if you change the value of an object, all the objects that are pointing to it will change too. 
// And has garbage collector, so if there is no pointer pointing to an object, it will be deleted from memory