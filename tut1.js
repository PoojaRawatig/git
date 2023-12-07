// 1.Question 
// write a program to print the marks of a student in an objects using for loop
let marks = {
   pooja :90,
   sonu :9,
   lovish:56,
   monika :4

}
for (let i = 0; i < Object.keys(marks).length; i++) {
console.log(" the marks of " + Object.keys(marks)[i]+ "are " +  marks[Object.keys(marks)[i]]);
    
}
// 2.Question
// write the program in q1 using for in loop
 for(let key in marks){
    console.log(" the marks of " + key + "are" + marks[key])
 }
// 3.Question 
// write a program to rpint tyr again until the user enters the correct number

let cn = 4
let i
while(i != cn){
    console.log(" tyr again")
    i = prompt("enter a number")
}
console.log(" you have entered a correct number")
// 4.Question 
// write a function to find mean of 5 number

const mean = (a,b,c,d)=>{
    return (a + b+ c+d) /4
}
console.log(mean(4,5,6,7))

