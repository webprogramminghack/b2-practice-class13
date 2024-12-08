'use strict'

//pseudocode for error class

// class Error {
//   constructor(message){
//     this.message = message
//     this.name = "Error"
//     this.stack = <
//   }
// }


// class ValidationError extends Error{
//   constructor(message){
//     super(message)
//     this.name = "ValidationError"
//   }
// }

// function test(){
//   throw new ValidationError("error in validation")
// }

// try {
//   test()
// } catch (error) {
//   console.log(error.message);
//   console.log(error.name);  
// }



// function readUser(json) {
//   let user = JSON.parse(json)
//   if (!user.age) {
//     throw new ValidationError("age tidak ada")
//   }
//   if (!user.name) {
//     throw new ValidationError("name tidak ada")
//   }

//   return user
// }


// try {
//   readUser('{ "name": "rian" }')
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.log('invalid data:', error.message);
//   } else if ( error instanceof SyntaxError){
//     console.log("json Syntax Error:", error.message);
//   } else {
//     throw error
//   }
// }


// class ValidationError extends Error{
//   constructor(message){
//     super(message)
//     this.name = "ValidationError"
//   }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super('No property: ' + property);
//     this.property = property;
//   }
// }

// function readUser(json) {
//   let user = JSON.parse(json)
//   if (!user.age) {
//     throw new PropertyRequiredError("age tidak ada")
//   }
//   if (!user.name) {
//     throw new PropertyRequiredError("name tidak ada")
//   }

//   return user
// }

// try {
//   readUser('{ "name": "rian" }')
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.log('invalid data:', error.message);
//   } else if ( error instanceof SyntaxError){
//     console.log("json Syntax Error:", error.message);
//   } else {
//     throw error
//   }
// }











class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    // this.name = 'MyError';
  }
}

class ValidationError extends MyError {}

class PropertyError extends ValidationError {
  constructor(property) {
    super('No property: ' + property);
    this.property = property;
  }
}

// name is correct
console.log(new PropertyError('field').name); // PropertyRequiredError

