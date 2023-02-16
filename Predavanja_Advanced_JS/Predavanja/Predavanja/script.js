// document.getElementById(`sendRequest`)
// .addEventListener('click',function (){
//     let xhr = new XMLHttpRequest()
//     xhr.onload = function(){
//         console.log('request sent');
//         if(xhr.status >= 200 && xhr.status < 300){
//             let objectResponse = JSON.parse(xhr.response)
//             console.log(objectResponse);
//         }
//         else{
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open("GET","https://raw.githubusercontent.com/sedc-codeacademy/skwd9-04-ajs/main/Samples/students.json");
//     xhr.send();
// })

//
//JQUERY

// $(document).ready(function(){
//     document.getElementById('sendRequest')
//     .addEventListener('click',function(){
//         $.ajax({
//             url: "https://raw.githubusercontent.com/sedc-codeacademy/skwd9-04-ajs/main/Samples/students.json",
//             success: function(response){
//                 console.log('request successful');
//                 let responseObject = JSON.parse(response);
//                 console.log(responseObject);
//             },
//             error: function(response){
//                 console.log('The request has failed: '+ response.status);
//                 console.log(response.responseText);
//             }
//         })
//     })
// })


// //fetch
// const url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
// document.getElementById('sendRequest')
// // .addEventListener('click',function(){
// //     fetch(url)
// //     .then(data => {
// //         data.json()
// //         .then(parsedData =>{
// //             console.log(parsedData);
// //         })
// //     })
// //     .catch(e =>{
// //         console.error(e);
// //     })
// // })
// .addEventListener('click',function(){
//     fetch(url)
//     .then(get) =>{
//         data.json()
//         .then(parsedData =>{

//         })
//     }
// })


//fuctions,scope and recursion

function sumOfTwoNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}
sumOfTwoNumbers(5, 6);

let greeting = 'Hello';

function sumOfTwoNumbersWithReturn(num1, num2) {
    let result = num1 + num2;
    console.log(greeting);
    function sayHello(helloWorld) {
        let greetingInsideSecondFunction = helloWorld;
        console.log(greetingInsideSecondFunction);

    }
    sayHello(greeting);
    return result;
}

let resultOfSecondFunction = sumOfTwoNumbersWithReturn(6, 7);
console.log(resultOfSecondFunction);

class Person {
    constructor(firstName, lastName) {
        this.personFirstName = firstName;
        this.personLastName = lastName;
    }
    info() {
        console.log(`${this.personFirstName} ${this.personLastName}`);
    }
}

let boki = new Person("Bojan", "Damchevski");
boki.info();


//ANONYMOUS FUNCTIONS

let func1 = function (name) {
    console.log(`Hello from an anonymous function from ${name}`);
    return name;
}

console.log(func1("Ivan"));

let myArray = ["test", 2, 5, 3, function () {
    return 2 + 3 + 5;
}];
console.log(myArray[4]());


let ifElseFunc = function (n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    if (n1 < n2) {
        return n2;
    }
    return 0;
};
console.log(ifElseFunc(5, 3));
console.log(ifElseFunc(5, 6));
console.log(ifElseFunc(2, 2));
console.log(ifElseFunc());


//Arrow Functions

function someFuncWithABasicFunction(num) {
    return num + 10;
}


const someFuncWithAnArrowFunction = (num) => num + 10;

console.log(someFuncWithABasicFunction(5));
console.log(someFuncWithAnArrowFunction(61));

const sayHelloWithAnArrowFunction = () => console.log("Hello from SEDC");

sayHelloWithAnArrowFunction();

const arrowFuncWithMoreParams = (number1, number2) => number1 + number2;

console.log(arrowFuncWithMoreParams(2, 3));
































































//recursion

function sumTo(num) {
    if (num === 0) {
        return 0;
    }
    return num + sumTo(num - 1);
}
console.log(sumTo(5));

let arrowOfSumTo = (num) => (num === 0 ? 0 : num + arrowOfSumTo(--num));
let arrowOfFactorial = (num) => (num === 0 ? 1 : num * arrowOfFactorial(--num));

console.log(arrowOfFactorial(5));