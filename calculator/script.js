const buttons = document.querySelectorAll("button")
const input = document.querySelector('.display');
const operators = ["+", "-", "*", "/"];
let output = "";

function calculte(btnValue) {
    if (btnValue === "=" && output !== "") {
        output = eval(output)
    } else if (btnValue === "C"){
        output = ""
    }else if(btnValue === "del"){
        output = output.toString().slice(0, -1)
    }else{
        if (operators.includes(btnValue) && operators.includes(output[output.length-1])) {
             output = output.slice(0, -1) + btnValue
    
        }else {
        output += btnValue;                                
    }
}
    input.value = output
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
buttons.forEach(button => {

    button.addEventListener("click", (btn) => {
        btn.preventDefault();
        calculte(btn.target.dataset.value)
    });
}); 