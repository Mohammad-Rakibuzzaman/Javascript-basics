
let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// console.log(names.length)
// var numberOfpeople = names.length;
// var randomPersonPosition = Math.random() * numberOfpeople
// console.log(randomPersonPosition)

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
  
        
        var numberOfpeople = names.length;
        var randomPersonPosition = Math.floor(Math.random() * numberOfpeople);

        var randomPerson = names[randomPersonPosition];
        

        return randomPerson + " is going to buy lunch today!";
        
    
    
    /******Don't change the code below*******/    
}

// console.log(whosPaying(names));


