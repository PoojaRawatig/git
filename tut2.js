//1..... Write a JavaScript program to get the website URL (loading page).  
alert(document.URL);

//2...... Write a JavaScript exercise to create a variable using a user-defined name.
var var_name = " pooja";
let age = 23;

this[var_name] = age;
console.log(this[var_name]);

// Write a JavaScript exercise to get the filename extension.  

console.log(file_name);
// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
 function difference(n){
    if(n <= 13){
        
        return 13 -n;
    }else{
        return (n -13) *2;
    }
 }
 console.log(difference(32));
 console.log(difference(11));


//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  


// Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
function positive_nagative(x,y){
    if((x < 0 && y >0 ) || (x >0 && y <0 )){
        return true;
    }else{
        return false;

    }
}
console.log(positive_nagative(2,2));
console.log(positive_nagative(2,-2));

// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  
function start_spec_str(str){
    if(str.lenght < 4){
        return false;
    }
    front = str.substring(0,4);
    if(front == 'java'){
        return true;
    }else{
        return false;
    }
}
console.log(start_spec_str("javascritp"))
console.log(start_spec_str("java"));