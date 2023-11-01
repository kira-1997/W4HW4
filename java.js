window.alert("---------Calculator--------")

let tot=0;
let cal= prompt("Choose operation: - * / + ")
let num1= prompt("Please enter the first Number") 
let num2= prompt("Please enter the second Number")
var regex=/^[0-9]+$/;
var regex1=/^[a-zA-Z]+$/;

if(num1.match(regex) && num2.match(regex)){
    if (cal == '-') { 
        tot = num1 - num2;  
    }  
    else if (cal == '*') { 
        tot = num1 * num2;  
    }  
    else if (cal == '/') { 
        tot = num1 / num2;  
    }  
    else if (cal == '+'){  
        tot = num1 + num2; 
    }
    else{
        window.alert("Please choose from the following Operation only") 
    }
    window.alert(" Answer: " +tot);
    }
 else{
    window.alert("Please enter numbers only") 
 }







 window.alert("---------Employee Info--------")

let fname= prompt("Enter the first name:")
let lname= prompt("Enter the last name:")
let id= prompt("Enter the ID:")
  

if(fname.match(regex1) && lname.match(regex1) && id.match(regex) && fname.length>2 && lname.length>2){
    window.alert("There were no errore found")
}

else{
if(fname.length==0){
        window.alert("Please first name must be filled in")
    }
    else if(fname.length<=2){
        window.alert("Please first name is too short")
    }
    else if(!fname.match(regex1)){
        window.alert("Please first name must be letters only")
}


 if(lname.length==0){
        window.alert("Please last name must be filled in")
    }
    else if(lname.length<=2){
        window.alert("Please last name is too short")
    }
    else if(!lname.match(regex1)){
        window.alert("Please last name must be letters only")
}


if(!id.match(regex)){
        window.alert("Please ID must be numbers only")
    }


}


