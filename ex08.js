
// let bootleBeer = 99;

// function beer() {

//     while(bootleBeer >= 1) {
//         console.log(bootleBeer + " bottles of beer on the wall," + bootleBeer + " bottles of beer. Take 1 down, pass it around," + (bootleBeer - 1) + " bottles of beer on the wall.");
//         bootleBeer--;

//         if(bootleBeer === 0){
//             console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//         }

//     }
    
// }


function beer(){

    var numberOfBottles = 99;
    while (numberOfBottles >= 0) {
        var bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        } 
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }

}

beer();