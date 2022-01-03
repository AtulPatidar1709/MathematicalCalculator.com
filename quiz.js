const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outPutE1 = document.querySelector('#output');

const correctAnswer = ["50","right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value===correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    //console.log(score);
    outPutE1.innerText = "Your Score is" + score;
}

submitAnswerBtn.addEventListener('click',calculateScore);