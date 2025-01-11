/* You can write the lines in the terminal in VS it will work

// npm init -y
// then again write,

// npm install prompt-sync

// then write this line in the code editor above all codes and save the code and run */

//const prompt = require('prompt-sync')();

const prompt = require('prompt-sync')();

// let name = prompt("Please enter your name:");
// console.log("Hello, " + name + "!");

var myName = "Ratul";
// var yourName = prompt("Whats your name?: ")

// console.log(yourName)

// let Alert = new CustomAlert();
// window.Alert = Alert;


var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
// console.log(Alert("Your level is currently: " + gameLevel));

// var x = 3;
// var y = ++x;
// y += 1;

// console.log(y)


function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("You can buy total " + Math.floor(money / 1.25) + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

// getMilk(16);


// function lifeInWeeks(age) {
    
//     /************Don't change the code above************/    
        
//         //Write your code here.
        
//         let dayAlive = ((365 * 90) - (365 * age));
//         let weekAlive = ((52 * 90) - (52 * age)); 
//         let monthAlive = ((12 * 90) - (12 * age));
        
        
//         console.log("You have " + dayAlive + " days, " + weekAlive + " weeks, and " + monthAlive + " months left.")
        
        
//     /*************Don't change the code below**********/
// }

// lifeInWeeks(56);




//build a love calculator using random number generator


var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1 ;

// console.log(n);

// prompt("What is your name?: ");
// prompt("What is their name?: ");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
// console.log("So your love score is: " + loveScore + "%");


const guest = ["Ratul ra", "Linta miss", "Snigdha", "Sumu"];

// let yourInvite = prompt("Whats your name?: ")

// console.log(guest.includes(yourInvite));

// guest.includes(yourInvite) ? console.log("You welcome to raddison!!!") : console.log("sorry, Next time..");



var myArrayex = [];
var countss = 1;


function fizBuzz() {

  while (countss <= 100) {

    if (countss % 3 === 0 && countss % 5 === 0) {
      myArrayex.push("FizzBuzz");
    } else if (countss % 3 === 0) {
      myArrayex.push("Fizz");
    } else if (countss % 5 === 0) {
      myArrayex.push("Buzz");
    } else {
      myArrayex.push(countss);
    }
  
    // myArrayex.push(countss);
    countss++;
    // console.log(myArrayex)


  }
  
  console.log(myArrayex)

}

fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();
// fizBuzz();


