const car={
    Name:"bmw",
    Model:"2023",
    color:"white",
    weight:65,
};

console.log(car);

const student={};

student.firstName="varad";
student.lastName="agrawal";
console.log(student);


const book={};

book.name="Rich Dad, Poor Dad";
book.realesate="Books about real estate investment";
book.Physicalcharacteristics="Books can have reading levels associated with them, with level 5 indicating longer, complex stories. ";
book.properties="Personal finance, Non-fiction";
book.author="Robert Kiyosaki and Sharon Lechter";

console.log(book);
console.log(book.name);
console.log(book["realesate"]);


book.quantity=5;
console.log(book);




//Working of arrays 

let names=["Shruti","Varad","soumya","random"];
let fruits=["mango","apple","graphes"];

console.log(fruits);
console.log(names);
console.log(fruits[2]);
fruits[2]="watermelon";
console.log(fruits);

//different way 
const names1=[];
names1[0]="shurit";
names1[1]="aman";
names1[2]="ria";
names1[3]="abinav";

console.log(names1);



//methods of Array:
//length
let fruits1=["banana","mango","guava","watermelom"];
console.log(fruits1);
let n=fruits1.length;
console.log(n);

fruits1.push("apple"); //in end adding
console.log(fruits1);
fruits1.unshift("pineapple");//in start adding
console.log(fruits1);

fruits1.pop(); //remove from last 
console.log(fruits1);

let lastvalue = fruits1.pop();
console.log(lastvalue);

fruits1.shift(); //remove from first 
console.log(fruits1);

fruits1.fill("kiwi",0,1); //to add the element inside the array
console.log(fruits1);



//using switch case
let arr=["random","new random","next random","2ndrandom","3rd random"]
let b=5;
switch(b)
{
    case 1:{
        let index=2;
        arr[2]="random";
        break;
    }
    case 2:{
        arr.pop();
        break;
    }
    case 3:{
        arr.push("1 random");
        break;
    }
    case 4:{
        arr.shift();
        break;
    }
    case 5:{
        let ran=arr.length;
        console.log(ran);
        break;
    }
    case 6:{
        arr.unshift("last random");
        break;
    }
    default:
        {
            console.log("enter correct value");
        }
}


//if the element is present or not 

let arrr=["varad","vardhan","raghab"];
let result=arr.includes("varad");
console.log(result);


//Ternary operator 

let value=1;
let ans= value==1?"Present":"not present";
console.log(ans);


let age=18;
let resul22t =age>=18?"Eligible":"not Eligible";
console.log(resul22t);