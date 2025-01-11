function bmiCalculator(weight, height){
    
    let calcBmi = (weight / (height ** 2));
    
    return Math.round(calcBmi);
    
    
    
}


var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)