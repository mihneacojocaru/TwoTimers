const produs = (a,b) => {
    return a * b;
}
const sum = (a,b) => {
    return a + b;
}
const subtraction = (a,b) => {
    return a - b;
}
const divisioin = (a,b) => {
    return a / b;
}


let ceva=(x,y,f)=>{


      return f(x,y);
}


console.log(ceva(1,2,(a,b)=>{


    return a+b-2;
}));
console.log(ceva(1,2,sum));
console.log(ceva(1,2,subtraction));
console.log(ceva(1,2,divisioin));