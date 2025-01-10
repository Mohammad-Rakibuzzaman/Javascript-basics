function test() {

    var a = "3";
    var b = "8";


    //here we go
    var temp;
    temp = a;
    a = b; 
    b = temp;

    console.log("a is " + a);
    console.log("b is " + b);


}

test()