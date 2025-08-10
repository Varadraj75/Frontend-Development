let book={
    name:"Rd sharma",
    publisher:"abcd",
    price:300,
    quantiy:4
}


let book1={
    name:"Rd sharma class 12",
    publisher:"abffcd",
    price:200,
    quantiy:5
}


let cost1 = book1.quantiy*book1.price;
let cost2= book.quantiy*book.price;

let result=cost1>=cost2?"book1 is costly than book2":"book2 is costly than book1";

console.log(result);
