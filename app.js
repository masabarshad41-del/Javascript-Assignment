// question-01.js
// var fullName ="Ahmed"
// var age ="19"
// var city ="karachi"
// var courseName ="Web & Mobile App Development"
// var instituteName ="SMIT"
// console.log(fullName)
// console.log(age)
// console.log(city)
// console.log(courseName)
// console.log(instituteName)

// question-02.js
// var programmingLanguage ="javascript"
// let topic = "forloops nested"
// const batchnumber ="23"
// console.log(programmingLanguage)
// console.log(topic)
// console.log(batchnumber)

// question-03.js
// String
// let studentName = "Masab"
// Number
// let age = 30;
// Boolean
// let isstudent = true;
// Undefined
// let city
// Null
// let country = null;
// console.log(typeof studentName)
// console.log(typeof age)
// console.log(typeof isstudent)
// console.log(typeof city)
// console.log(typeof country)

// question-04.js
// Legal and ILLegal Variables
// 1. Valid
// var studentName; Can not allowed space
// 2. Invalid
// var 1stStudent; Can not allowed with a number
// Valid
// 2. var firstStudent
// 3. Valid
// var __totalMarks; Variable names start with an underscore(__).
// 4. Invalid
// var my-Name; Hyphen (-) is not allowed in variable names
// 4. Valid
// var myName
// 5. Valid
// var $price; Variable Name can start with $.
// 6. Invalid
// var class; Reserved keywords cannot be used as variable names
// 6. Valid
// var myClass
// 7. Valid
// var userAge; Starts with a letter        
// 8. Invalid
// var first name; space are not allowed in variable names
// 8. Valid
// var firstname
// 9. Valid
// var total_amount; Underscore (_) is allowed
// 10. Invalid
// var let; Reserved keywords cannot be used as variable names.
// 10. Valid
// var mylet

// question-05.js
// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
// Addition
// var addition = num1 + num2
// console.log("Addition;",addition);
// Subtraction
// var subtraction = num1 - num2
// console.log("Subtraction;",subtraction);
// Multiplication
// var multiplication = num1 * num2
// console.log("Multiplication;",multiplication);
// Division
// var division = num1 / num2
// console.log("Division;",division);
// Modulus
// var modulus = num1 % num2
// console.log("Modulus;",modulus);

// question-06.js
// var product1 = Number(prompt("Enter Product 1 Price"));
// var product2 = Number(prompt("Enter Product 2 Price"));
// var product3 = Number(prompt("Enter Product 3 Price"));
// console.log("Product 1:",product1);
// console.log("Product 2:",product2);
// console.log("Product 3:",product3);
// var totalBill = product1 + product2 + product3;
// console.log("Total Bill:", totalBill);
// var discount = totalBill * 10 / 100;
// console.log("Discount:", discount);
// var finallBill = totalBill - discount;
// console.log("Finall Bill:", finallBill);

// question-07.js
// A
// First multiplication, then addition
// var A = 10 + 5 * 2;
// console.log("A:" , A);
// B
// First brackets, then multiplication
// var B = (10 + 5) * 2;
// console.log("B:" , B);
// C
// First division and multiplication, then addition and subtraction
// var C = 20 / 2 + 3 * 4 - 5;
// console.log("C:" , C);
// D
// First brackets, then multiplication and division, then addition
// var D = 5 + 2 * (8 - 3) / 5
// console.log("D:" , D);
// E
// First modulus and multiplication, the addition
// var E = 30 % 4 + 6 *2;
// console.log("E:" , E);

// question-08.js
// var firstName = prompt("Enter First Name");
// var LastName = prompt("Enter Last Name");
// var city = prompt("Enter City");
// console.log("Welcome " + firstName + " " + LastName + "! You are from " + city +  ".");

// question-09.js
// var birthYear = Number(prompt("Enter Your Birth Year"));
// var currentYear = 2026;
// var age = currentYear - birthYear;
// console.log("Your approximate age is " + age + " years.");
 
// question-10.js
// var english = Number(prompt("Enter English Marks"));
// var math = Number(prompt("Enter Math Marks"));
// var science = Number(prompt("Enter Science Marks"));
// var computer = Number(prompt("Enter Computer Marks"));
// var urdu = Number(prompt("Enter Urdu Marks"));
// var obtainedMarks = english + math + science + computer + urdu;
// var totalMarks = 5 * 100;
// var percentage = obtainedMarks / totalMarks * 100;
// console.log("Obtained Marks:", obtainedMarks);
// console.log("Total Marks:", totalMarks);
// console.log("Percentage:", percentage + "%");

// question-11.js
// var pkr = Number(prompt("Enter PKR"));
// var exchangeRate =  280;
// var usd = pkr / exchangeRate;
// console.log("Equivalent USD: $" + usd);

// question-12.js
var basicSalary = Number(prompt("Enter Basic Salary"));
var houseAllowance = basicSalary * 20 / 100;
var medicalAllowance = basicSalary * 10 / 100;
var taxDeduction = basicSalary * 5 / 100;
var grossSalary = basicSalary + houseAllowance + medicalAllowance;
var netSalary = grossSalary - taxDeduction;
console.log("Basic Salary: Rs." + basicSalary);
console.log("House Allowance: Rs." + houseAllowance);
console.log("Medical Allowance: Rs." + medicalAllowance);
console.log("Tax Deduction: Rs." + taxDeduction);
console.log("Gross Salary: Rs." + grossSalary);
console.log("NetSalary: Rs." + netSalary)