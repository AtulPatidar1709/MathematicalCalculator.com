const sides = document.querySelectorAll(".side-input");
const trianglebtn = document.querySelector('#triangle-btn');
const outPutE2 =document.querySelector('#output');

// calculate the semi-perimeter

function calculateData(side1,side2,side3)
{
const sum = (side1 + side2 + side3) / 2;
return sum;
}
//calculate the area
function calculateAreaofTriangle(){
  const sum = calculateData(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value));
  const areaValue = Math.sqrt(sum * (sum - Number(sides[0].value)) * (sum - Number(sides[1].value)) * (sum - Number(sides[2].value)));
  console.log(areaValue);
  outPutE2.innerText = "The Area of Triangle is " + areaValue.toFixed(2);
}

trianglebtn.addEventListener("click",calculateAreaofTriangle);
