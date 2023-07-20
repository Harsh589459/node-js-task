

const product = (a,b)=>{
    return a*b;
}
console.log(product(4,5))

const person = {
    name:"Max",
    age:29,
    greet(){
        console.log("hi I am "+ this.name);
    }

};
person.greet();
console.log(person);