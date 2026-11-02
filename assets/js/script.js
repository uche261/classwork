function myfunc(){
    let data="Data from function"
    return "Data from function"

}
myfunction()

function getName(sName){
    return  `My name is ${sName}`
}
function sum(a,b){
    a=Number(a);
    b=Number(b);
    let sum=a+b
    return sum
}
sum(45,78)
console.log(`Sum of ${a} and ${b} is ${sum}`)

const showData=() => {
                console.log("Data from arrow function")
            }
   