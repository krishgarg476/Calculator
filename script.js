 
const display = document.getElementById("display");

function appendtodisplay(input){

         display.value += input;
}
function cleartext(){
         display.value = "";
}
function calculate(){
         try{display.value =eval(display.value);}
         catch(error){
            display.value= "Error";
         }
}
