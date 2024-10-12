document.getElementById("burger2").addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("open")

})

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");
const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");
const buttons = [plus, minus, mult, div, cos, sin, tg, ctg];

let first = document.getElementById("first");
let second = document.getElementById("second");
let var1 = document.getElementById("var1");

const result = document.getElementById("result");

let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    const num = parseFloat(var1.value) || 0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "error";
            break;
        case "sin":
            val = Math.sin(num);
            break;
        case "cos":
            val = Math.cos(num);
            break;
        case "tg":
            val = (num % Math.PI) === (Math.PI/2) ? "error" : Math.tan(num);
            break;
        case "ctg":
            val = (num % Math.PI) === 0 ? "error" : 1/(Math.tan(num));
            break;       
    }
    buttons.forEach((button) => {
        button.style.backgroundColor = "white";
      });
    vall.textContent = val.toFixed(2);
    result.textContent = res;
}


plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
    plus.style.backgroundColor = "red";
});

minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
    minus.style.backgroundColor = "red";
});

mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
    mult.style.backgroundColor = "red";
});

div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
    div.style.backgroundColor = "red";
});

cos.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("cos");
    cos.style.backgroundColor = "red";
});

sin.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("sin");
    sin.style.backgroundColor = "red";
});

tg.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("tg");
    tg.style.backgroundColor = "red";
});

ctg.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("ctg");
    ctg.style.backgroundColor = "red";
});