document.querySelectorAll('input').forEach(inputElement => {
    inputElement.readOnly = true;
});

document.getElementById('answer').readOnly = true
let answer = document.getElementById('answer')
let buttons = document.querySelectorAll('button')
let output = ""

buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        try{
            output = checkOperators(output, button.innerText)
            
            if(button.innerText === "C"){
                output = ""
            }
            if(button.innerText === "="){
                output = backspace()
                output = eval(output).toString()
            }
            if(button.innerText === "X"){
                output = backspace() + "*"
            }
            if(button.innerText === "<"){
                output = backspace()
                output = backspace()
            }
            if(button.innerText === "%"){
                output = backspace()
                output +="/100"
            }
        }
        catch(e){
            alert("Please enter expression correctly");
            output = ""
        }
        display(output)
    })  
});

document.addEventListener("keydown", function(event) {
    if((event.keyCode >= 48 && event.keyCode <= 57) ||
       (event.keyCode >= 96 && event.keyCode <= 105) ||
       event.key == "+" || event.key == "/" || event.key == "-"){
        console.log("1")
        output = checkOperators(output, event.key)
       }
    else if(event.keyCode == 8){output = backspace()}
    else if(event.key == "*" || event.key == "x" || event.key == "X") output = checkOperators(output, "*")
    if(event.keyCode == 46) output = ""
    try{
        if(event.keyCode == 13 || event.key == "="){
             output = eval(output).toString()
        }
    }catch(e){
        alert("Please enter expression correctly");
        output = ""
    }
    display(output)
  })


function backspace(){
    return output.slice(0, -1)
}

function display(output){
    answer.value = output
}

function checkOperators(output, button){
    if(button.textContent === "C") return ""
    if((output.substr(output.length - 1) == "/" ||
        output.substr(output.length - 1) == "+" ||
        output.substr(output.length - 1) == "-" ||
        output.substr(output.length - 1) == "*") 
        &&
        (button == "/" || button == "+" ||
        button == "-" || button == "X" ||
        button == "*")){
            alert("invalid operation")
            return output
        }
    else{
        return output + button
    }
 
}


