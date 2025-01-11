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


function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
        let dayAlive = ((365 * 90) - (365 * age));
        let weekAlive = ((52 * 90) - (52 * age)); 
        let monthAlive = ((12 * 90) - (12 * age));
        
        
        console.log("You have " + dayAlive + " days, " + weekAlive + " weeks, and " + monthAlive + " months left.")
        
        
    /*************Don't change the code below**********/
}

lifeInWeeks(56);

