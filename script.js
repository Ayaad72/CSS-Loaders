// Task 1
// Task 1: Interacting with Users
// Objective: Create a script that interacts with the user using alert, prompt, and confirm.
// Display an alert that says "Welcome to our website!".
// Use prompt to ask the user for their name, then display it back to them in an alert saying, "Hello, [name]!".
// Use confirm to ask the user if they want to proceed with the site. If they click "OK", display an alert with "You chose to proceed!", otherwise display "You chose to cancel!".

// alert('Welcome to Our Website!')
// let name = prompt('Please enter your name')
//  alert(`Hello ${name}`)
 
//  let proceed = confirm('Do you want to proceed') ;
// if (proceed) {
//     alert('You Chose to Proceed')
// }
//  else {
//     alert('You Chose to cancel')

// }
// Task 2
// Task 2: Working with Variables and Data Types
// Objective: Demonstrate variable declarations, data types, and basic operators.
// Declare two variables: admin and name.
// Assign the string value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (it should show "John").
// Perform a mathematical operation on two numbers and log the result.
// Concatenate two strings and log the result.
// let admin ='John'
// let name = admin
// alert (admin)
// let num1 = '6'
// let num2 = '9'
// console.log(num1 + num2)

// Task 3
// Task 3: Conditional Branching and Type Conversion
// Objective: Use conditional branching and type conversions to create a simple login script.
// Prompt the user for their username.
// If the username is "Admin", prompt for a password. If the username is not "Admin", alert "I don't know you".
// If the password is "TheMaster", alert "Welcome!", if it's another string, alert "Wrong password", and if the input is empty or canceled, alert "Canceled".
// Ensure that all prompts and alerts are user-friendly and informative.
// ||
// let user = prompt('Username');

// if (user === 'Admin') {
//     let password = prompt('Password' );
//     if (password === 'TheMaster'  ) {
//         alert('Welcome')
        
//     } if(password === null) {
//         alert('You have cancelled')
//     }
//     if( password!=='TheMaster') {
//         alert('You have entered wrong password')
//     }
// } else {
//     alert('I dont Know You !')
// }

// Task 4
//  Loops and the Switch Statement
// Objective: Create a script that uses loops and the switch statement.
// Use a for loop to iterate from 1 to 10 and print each number to the console.
// Inside the loop, use a switch statement to print "even" for even numbers and "odd" for odd numbers.
// Bonus: Try rewriting the loop using the while loop instead of for.

// for (let numbers = 1; numbers <= 10; numbers++) {
//     console.log(numbers);
//     switch (numbers) {
//           case 2:
//             console.log(`Even ${numbers}`)
//             case 4:
//             console.log(`Even ${numbers}`)
//             case 6:
//             console.log(`Even ${numbers}`)
//             case 8:
//             console.log(`Even ${numbers}`)
//             case 10:
//             console.log(`Even ${numbers}`)
//             break;
//             default:
//             console.log(`Odd ${numbers}`)
//             break;
//     }
// }

// Task 5
// Task 5: Functions and Arrow Functions
// Objective: Explore functions and arrow functions through a simple task.

// Write a function named greet that takes a name as an argument and logs "Hello, [name]!" to the console.
// Rewrite the greet function as an arrow function.
// Call both versions of the function with a few different names to test them.
// Bonus: Write a function that takes two numbers as arguments and returns their sum. Then, rewrite it as an arrow function.


// function greet1(name = 'name') {
// console.log(`Hello  ${name}`);
// }
// greet1();
// Same Function Using Arrow Function
// let greet2 =(name ='name') => {
//     console.log(`Hello ${name}`);
// }
// greet2();


// function plusetti(a, b) {
//     return a + b;
//   }
  
//   console.log(plusetti(3, 5)); 

//   const plusotti = (a, b) => a + b;

//   console.log(plusotti(3, 5)); 
  
  




