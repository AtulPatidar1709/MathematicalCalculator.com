const sides = document.querySelectorAll(".side-input");
const hypotenusBtn = document.querySelector('#hypotenous-btn');
const outPutE1 =document.querySelector('#output');

function calculateSumOfSquare(a,b){
 const sumOfSquares = a*a + b*b ; 
// console.log(sumOfSquare);
return sumOfSquares;
}

function calculateHypotenuse (){
 const sumOfSquares =  calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value));
 const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
 console.log(lengthOfHypotenuse);
 outPutE1.innerText = "The Length of Hypotenuse " + lengthOfHypotenuse;
}


hypotenusBtn.addEventListener("click",calculateHypotenuse);