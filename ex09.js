function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        
        let myArr = [];
        let extraArr = [];
        
        // for(let i = 0; i < n; i++ ){
            
            
            
        // }

    
        // if(n <= 0){
        //     myArr.push(0);
        // }
        // if (n >= 1) {
        //     let i = 0;
        //     while(i <= 1){
        //         myArr.push(i);
        //         i++;
        //     }
        //     let x = 0;
        //     let y = 1;
        //     for (let j = 0; j < n; j++){
                
        //         if (myArr.length < n) {
        //             let c = x + y;
        //             myArr.push(c);

        //             x = y;
        //             y = c;
        //         }
        //     }
        // }
        let i = 0;
        while(i <= 1){
            myArr.push(i);
            i++;
        }
        let x = 0;
        let y = 1;
        for (let j = 0; j < n; j++){
            
            if (myArr.length < n) {
                let c = x + y;
                myArr.push(c);

                x = y;
                y = c;
            }
        }
        
        // console.log(myArr);
        if(n === 1) {
            extraArr.push(0);
            console.log(extraArr);
        } else {
            console.log(myArr);
        }

        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
}


fibonacciGenerator(2);


// function fibonacciGenerator(n) { 
//     let fibonacciSequence = []; 
//     if (n >= 1) fibonacciSequence.push(0);
//     if (n >= 2) fibonacciSequence.push(1); 
//     for (let i = 2; i < n; i++) { 
//         fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);   
//     } 
//     console.log(fibonacciSequence); 
    
// }

// fibonacciGenerator(3);