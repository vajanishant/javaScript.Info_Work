// Javascript material : Connect to server then enter this ---> smb://192.168.0.91

// alert("Hello world");

// function new1() {
// 	alert("New function 1");
// }
// new1();
// let new2 = function() {
// 		alert("New function 2");
// }
// new2();
// let new3 = () => alert("New function 3");

// new3();
// function showMessage() {
//   alert( "Hello everyone!" );
// }
// new3();
// showMessage();
// showMessage();

// let user={
// 	n: "vaja",
// 	age: 780,
// };
// console.log("age: ", user);
// let key = prompt("Vaja's age is :","age");
// console.log("Key: ", key);
// console.log("name: " + user.n);
// console.log("age: " + user.age);
// console.log("age: " + user[key]);



// let userr = { age: 30 };

// alert( x in userr )
// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
  // ..,
//   "+1": "USA"
// };

// for(let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }




// ------------------------------------------------------------------------------------------------------
// let obj = {};
// let obj2 = {};
// // let obj=new Object();
// obj.name="john";
// obj.surname="carter";
// alert(obj.name);
// obj.name="change";
// alert(obj.name);
// function isEmpty(check) {
// for(let key in obj2)
// {
// 	alert(key);
// 	return false;
// }
// return true;
// }

// alert(isEmpty(obj2));
// const obj3 = {
// 	name: "vaja",
// };
// alert(obj3.name);
// obj3.name="Nishant";
// alert(obj3.name);
// obj3=obj;                Throws an error 

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   name: "vaja"
// }
// let sum=0;
// for(key in salaries)
// {
// 	sum=sum+salaries[key];
// }
// alert(sum);
// for(key in salaries)
// {
// 	if(typeof(salaries[key])=="number")
// 	{
// 		salaries[key]=2*salaries[key];
// 	}
// }
// for(key in salaries)
// {
// 	alert(salaries[key]);
// }




// -----------------------------------------------------------------------------------------------------


// calculator using objects.

// let calculator = {
// 	read(){
// 		this.value1=+prompt("Enter any number",1);
// 		this.value2=+prompt("Enter any number",2);
// 		alert(typeof(this.value2));
// 	},
// 	sum()
// 	{
// 		this.sum=this.value2+this.value1;
// 		return this.sum;
// 	},
// 	mul()
// 	{
// 		this.mul=this.value1 * this.value2;
// 		return this.mul;
// 	},
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// alert(calculator.value2);
// alert(calculator.value1);


// -----------------------------------------------------------------------------------------------------



// chainable

// let ladder = {
// 	step: 0,
// 	up(){
// 		this.step++;
// 		return this;
// 		// return ladder;
// 	},
// 	down(){
// 		this.step--;
// 		return this;
// 		// return ladder;
// 	},
// 	showStep: function(){
// 		alert(this.step);
// 		return this;
// 		// return ladder;
// 	}
// };

// ladder.up().up().down().showStep();



// -----------------------------------------------------------------------------------------------------




// accumulator

// function Accumulator(value){
// 	this.value=value;

// 	this.read =function() {
// 		this.value=this.value + +prompt("enter number",1);
// 	};
// }

// let acc=new Accumulator(0);
// acc.read();
// acc.read();
// alert(acc.value);



//------------------------------------------------------------------------------------------------------

// function Calculator() {
// 	let Methods = {
// 	}
// 	this.calculator = function(str) {
// 		let spl=str.split(' ');
// 		let a=+spl[0];
// 		let b=spl[1];
// 		let c=+spl[2];
// 		let sum = a+c;
// 		if(b=='+')
// 		return sum;
// 		else
// 		{
// 			alert(a);
// 			alert(c);
// 			return Methods[b](a,c);
// 		}
// 	}
// 	this.addMethod = function (name,fun) {
// 		// body...

// 		Methods[name] = fun;
// 	}
// } ;

// let cal=new Calculator();
// alert(cal.calculator("5 + 9")); 	
// cal.addMethod("*",(a,b) => a*b );
// alert(cal.calculator('2 * 3'));





// -----------------------------------------------------------------------------------------------------


// function random(min,max) {
// 	let x=Math.random();
// 	x = min+x*(max-min);
// 	return parseInt(x);
// }

// alert(random(1,5));



// -----------------------------------------------------------------------------------------------------

// String Exercise

// function ucFirst(str) {
// 	return (str[0].toUpperCase() + str.slice(1)) ; 
// }

// alert(ucFirst("nishant"));


// function checkSpam(str) {
// 	str=str.toLowerCase();
// 	if(str.includes('xxx'))
// 		return true;
// 	else if(str.includes('viagra'))
// 		return true;
// 	else
// 		return false;
// }

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

// function trunc(str,ml) {
// 	if(str.length>ml)
// 	{
// 		str=str.slice(0,ml-1)+ '...';
// 		return str;
// 	}
// 	else
// 		return str;

// }
// alert(trunc("What I'd like to tell on this topic is:", 20));

// // truncate("Hi everyone!", 20) );

// function extractCurrencyValue(str) {
//       return +str.slice(1);
//     }
//     alert( extractCurrencyValue('$120') == 120);





// -----------------------------------------------------------------------------------------------------

// array

//let arr = new Array();
// let styles = ['Jazz', 'Blues'];
// alert(styles);
// styles.push('Rock-n-Roll');
// alert(styles);
// styles[1]='Classics';
// alert(styles);
// alert(styles.shift(0));
// styles.unshift('Rap','Reggae');
// alert(styles);
//  let arr=['vaja',function(){return this;}];
// alert(arr[1]());


// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];


// let getMaxSubSum = function(arr){
// 	let sum=0;
// 	max=0;
// 	for(let ind of arr)
// 	{
// 		sum=sum+ind;
// 		if(sum<0)
// 		{
// 			if(max<sum)
// 				max=sum;
// 			sum=0;
// 		}
// 		if(max<sum)
// 				max=sum;

// 	}
// 	return max;
// }

// alert(getMaxSubSum([-1, 2, 3, -9]));
// alert(getMaxSubSum([2, -1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));
// alert(getMaxSubSum([-1, -2, -3]));



// -----------------------------------------------------------------------------------------------------

// --------------->>> array task1

// function camelize(str){

// 	let a;
// 	a=str.split('-');
// 	//alert(a[1]);

// 		return (a.map(
// 			(word,ind) => ind==0 ? word : word[0].toUpperCase() + word.slice(1)
// 			).join(''));
// 		 // alert(a);
// 		// a=a.join('');
// 		// alert(a);

// }

// alert(camelize("-webkit-transition"));
// alert(camelize("list-style-image"));
// alert(camelize("background-color"));


// --------------->>>> array task2

// function filterRange(arr,a,b) {
// 	let ar=[];
// 	ar=arr.filter(item => {if(item>=a && item<=b)return item});
// 	return ar;
// }



// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)


// ---------------->>> 	array task3


// function filterRange(arr,a,b) {
// 	 let ar=[];
// 	// ar=arr;
// 		ar = arr.filter((item,ind,arr) => {if(item<a || item>b){arr.splice(ind,1)}});
// 	// arr=ar;
// 	 return arr;


	// let ab;
	// for(let i=0;i<arr.length;i++)
	// {
	// 	ab=arr[i];
	// 	if(ab<=b && ab>=a)

	// }


// }



// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)


// ---------------->>> 	array task4

// let arr = [5, 2, 1, 12, -10, 8];

// arr.sort((a,b) => (b-a));

// // arr.reverse();
// // ... your code to sort it in the reverse order

// alert( arr ); // 8, 5, 2, 1, -10


// ---------------->>> 	array task5

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
// 	let ar=[];
// 	for(let i=0;i<arr.length;i++)
// 		ar[i]=arr[i];
// 	return arr.slice('H');
// }


// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)




// ---------------->>> 	array task6



// let john = { name: "vaja", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((element) => element.name);

// alert( names ); // John, Pete, Mary




// ---------------->>> 	array task7



// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(element => ({ 
// 	fullName: `${element.name} ${element.surname}`, 
// 	id: element.id}));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith



// ---------------->>> 	array task8


// let john = { name: "john", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ john, pete, mary ];

// function sortByName(arr) {
// 	// body...
// 	return arr.sort((a,b) => a.age > b.age);

// }

// sortByName(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // Mary
// alert(arr[1].name);
// alert(arr[2].name);


// ---------------->>> 	array task9

// -->shuffle array.


// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // counts of appearances for all possible permutations
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }


// ---------------->>> 	array task10

// --->> average using reduce

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr) {
// 	let x = arr.reduce((element,index) => element+index.age,0);
// 	alert(x);
// 	 return (x/arr.length);
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



// ---------------->>> 	array task11


// function unique(arr) {

// 	let a=[];
// 	for(let ar of arr)
// 	{
// 		if(!a.includes(ar))
// 			a.push(ar);

// 	}
// 	return a;

// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); 




// -----------------------------------------------------------------------------------------------------

// ---------------------------------- iterators --------------------------------------

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// for (let num of range) {
//   alert(num); // 1, then 2, 3, 4, 5
// }




// let arrayLike = { // has indexes and length => array-like
//   0: "Hello",
//   1: "World",
//   length: 6
// };
// // Error (no Symbol.iterator)
// for (let item in arrayLike) {
// }

// ------------------------------  map-set-weakmap-weakset  --------------------------------------------


// task-1


// function unique(arr) {
//   let uniqueSet = new Set(arr);
//   return Array.from(uniqueSet);;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare, Krishna, :-O


// task-2



// var a = function (){
// 	this.abc=10;

// 	this.function_name = function()  {
	
// 	console.log('this.abc',this.abc);
// 	this.abc=20;
// 	console.log('=====',this.abc);
	
// 	function xyz(){
	
// 		this.abc=30;
// 		console.log('fun xyz',this.abc);
	
// 	}

// }

// 	this.getValue = function() {
// 		return this.abc;
// 	}

// }

// let b=new a();
// console.log(b);
// let y=b.function_name();
// console.log('fun',b.getValue());
// y.xyz();







let obj = {
	 
	arr : ['John', 'Alex', 'Roy'],

	loop() {

		console.log(this.arr);

		this.arr.forEach(() => {
			console.log("Hello " + this.arr);
		})

	}

};

obj.loop();




