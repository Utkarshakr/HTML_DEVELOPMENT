
var city = "Delhi";

function f1(){
    console.log("city");
    function fn(){
        console.log("fn is called");
    }
}

function f2(){
    console.log("city");
}

function f3(){
    console.log("city");
}

f1();
f2();
f3();