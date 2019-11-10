//variables: var, let, const
  //var is globally scoped.
  //let values can be reassigned
  //const values cannot be reassigned
  
//Use const unless the value will be reassigned later (i.e. in a game).


//Data Types: String, Numbers, Boolean, Null, Undefined, Symbol
//String:     
const name = 'John';
//Number:     
age = 30;
rating = 4.5;
//Boolean:    
isCool = true;
isBoring = false;
//Null:
const x = null;
//Undefined:
const y = undefined;
let z;


//Concatenation
const name = 'Robert';
const age = 19;
console.log('My name is ' + name + ', and I am ' + age);

//Template Literal
const name = 'Robert';
const age = 19;
console.log(`My name is ${name} and I am &{age}`);


//Properties
const hw = 'Hello World!';
console.log(hw.length); //returns the length of the string.

//Methods
const hw = 'Hello World!';
console.log(hw.toUpperCase()); //Converts all letters to upper-case
console.log(hw.toLowerCase()); //Converts all letters to lower-case
console.log(hw.substring(0, 5));//Logs all symbols from 0 (H), to 5 (o).
console.log(hw.substring(0, 5).toUpperCase());//Took all symbols from 0 to 5, and converted them to upper-case.
console.log(hw.split(''));//Converts the string to an array with 12 values.

const splitExample = 'Technology, Computers, IT, Code';
console.log(s.split(', '));//Takes string and creates array. Use comma + space in split to seperate the comma and space between each word out.

//Arrays: Variables that hold multiple values.

const numbers = new Array('1,2,3,4,5');//Arrays using the constructor (new).
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];//Arrays are most often built using brackets.
console.log(fruits);

console.log(fruits [1]);//Select specific items in an array. Arrays are 0 based, so [1] would select oranges.

fruits[3] = 'grapes';//Adds new item to end of array. You can manipulate arrays even when you use const to declare the variable, you just can't assign that variable to a different array.
fruits.push['mangos'];//A better way to add items to the end of an array. It will add the item regardless of how many item are in the array.

fruits.unshift['strawberries'];//Add item to beginning of array.

fruits.pop();//Delete the last item from the array.

console.log(Array.isArray('grapes'));//Checks to see if grapes is in the array.

console.log(Array.indexOf('oranges'));//Gets the index of oranges.

const mixedArray = ['apples', 10, true 'Hello World'];//Arrays can hold different data types.
console.log(mixedArray);

//Object Literals
const person = {
  firstName: 'John',//string
  lastName: 'Doe',
  age: 20,//number
  hobbies: ['music', 'coding', 'sports'],//array
  address: {
    street: '00 Main St.',
    city: 'Anytown',
    state: 'Anystate',
    country: 'USA'
  }//object inside object.
}

person.email = 'john.doe@gmail.com';//add item to object.

console.log(person);
console.log(person.firstName);//logs firstName.
console.log(person.firstName, person.lastName, person.age);//log differen variables from object.
console.log(person.hobbies[1]);//log 2nd item in hobbies array.

const{ firstName, lastName, address: { city } } = person;//Destructuring 
console.log(firstName);
console.log(city);

//store objects in array
const toDo = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Finish JS project',
    isCompleted: false
  }
];
console.log(toDo);
console.log(toDo[1.text]);//selects the text property of the 2nd object in the array

//json, check out free json formatters online....below is how to get data ready to send to a server

var toDosJSON = JSON.stringify(toDOJSON);
console.log(toDosJSON);//console.log it 

//For Loop
for(let i=0; i<10; i++){
  console.log(`For Loop Number: ${i}`);
}//initialize i at 0, stop loop at less that 10, increment i by i as long as i is less than 10. Console.log the template literal each time the loop runs.



//While Loop
let i = 0;
while(i<10){
  console.log(`For Loop Number: ${i}`)
  i++;
}//initialize i at 0, while i is less than 10, console.log the template literal, and make sure to increment i at the end to keep the loop from being indefinite.


