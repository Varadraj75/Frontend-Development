
if(a%2==0)
{
    console.log("Even");

}
else{
    console.log("odd");
}


if(score>10)
{
    if(score>=10 && score <=50)
    {
        console.log("It is between 10 and 50");
    }

    else if(score>50 && score<=100)
        {
            console.log("it is betwwen 50 and 100")
        }
}



let a="a";

if(a=="R")
{
    console.log("Stop");
}
else if(a=="Y")
{
    console.log("Wait");
}
else if(a=="G")
{
    console.log("Go..")
}
else{
    console.log("Trye the character among R,Y, and G")
}



//Switch Case:-

let ch="a";
switch(ch)
{
    case "a";
    {
        console.log("it is a 'a' vowel");
        break;
    }

    case "e";
    {
        console.log("its is a vowel");
        break;
    }

     case "i";
    {
        console.log("its is a vowel");
        break;
    }

     case "o";
    {
        console.log("its is a vowel");
        break;
    }


}


let a=1;

switch(a){
    case 1:{
        console.log("Monday");
        break;
    }
    case 2:{
        console.log("Tuesday");
        break;
    }
    case 3:{
        console.log("Wednesday");
        break;
    }
    case 4:{
        console.log("Thursday");
        break;
    }
    case 5:{
        console.log("Friday");
        break;
    }
    case 6:{
        console.log("Saturday");
        break;
    }
    case 7:{
        console.log("Sunday");
        break;
    }
    default:
        console.log("Enter a correct number between 1 to 7");
        break;
}


/*scope variable 
//var doesn't have block scope
block scope {var x=2;}
{
    let x=2;
    var j=2;
}
console.log(x);

not able to access x as it is inside block scope 


function scope 
function myFunction(){
var firstName = "krishna"; //function scope 
}

example:
function pname()
{
var name = "shr";
}

console.log(name);
pname;

global scope 

can access from anywhere 

let x=2; //global scope
const x=2; //global scope
var x=2; //global scope

