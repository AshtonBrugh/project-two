//Global variables
let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const questionEl = document.querySelector('.question');
const container = document.querySelector('.quiz-container');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
// const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');


const questions = [
    {
      "question": "What would you do in a bar fight?",
      "answer1": "1. Join in.",
      "answer1Total": "1",
      "answer2": "2. Break it up.",
      "answer2Total": "2",
      "answer3": "3. Run away.",
      "answer3Total": "3",
      "answer4": "4. Ignore it.",
      "answer4Total": "4"
    },
    {
      "question": "What would you do if you were given a million dollars?",
      "answer1": '1. Buy yourself everything you ever wanted.',
      "answer1Total": "1",
      "answer2": '2. Donate to charity.',
      "answer2Total": "2",
      "answer3": '3. spend some and invest the rest.',
      "answer3Total": "4",
      "answer4": '4. Like that would ever happen.',
      "answer4Total": "3"
    },
    {
      "question": 'Are you a moring, mid day, evening, or night owl sort of person?',
      "answer1": "1. Morning.",
      "answer1Total": "2",
      "answer2": "2. Mid day.",
      "answer2Total": "3",
      "answer3": "3. Evening.",
      "answer3Total": "4",
      "answer4": "4. Night owl.",
      "answer4Total": "1"
    },
    {
      "question": "What is you favorite season?",
      "answer1": "1. Spring.",
      "answer1Total": "3",
      "answer2": "2. Summer.",
      "answer2Total": "2",
      "answer3": "3. Fall.",
      "answer3Total": "4",
      "answer4": "4. Winter.",
      "answer4Total": "1"
    },
    {
      "question": "You are riding in a trolley without functioning breaks, headed toward a switch in the tracks. On the current track stand five people who will be hit. You have access to a switch to change tracks, but one individual stands there. Do you switch the tracks or not?",
      "answer1": "1. I dont know!!",
      "answer1Total": "3",
      "answer2": "2. Obviously switch tracks.",
      "answer2Total": "2",
      "answer3": "3. Destiny has chosen the five.",
      "answer3Total": "1",
      "answer4": "4. I refuse to answer.",
      "answer4Total": "4"
    }
];

const totalQuestions = questions.length;

// Generate questions on page
  function generateQuestions (index) {
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;

    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}

function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    for(let i = 0; i < totalQuestions; i++) {
        currentQuestion++;
        selectedOption.checked = false;
        score.push(answerScore)
        selectedAnswersData.push();
        if(!selectedOption) {
            alert('Please select your answer!');
            return;
        }
        if(currentQuestion === totalQuestions - 1 ) {
            nextButton.textContent = 'Finish';
        }
        if(currentQuestion === totalQuestions) {
            console.log(score)
            generateResults(score);
            return;
        }
        if(currentQuestion < totalQuestions) {
            generateQuestions(currentQuestion);
            return;
        }
    }
    
};

function generateResults() {
    var total = 0
    for (let i = 0; i < score.length; i++) {
        total += score[i]
        console.log(total)
    }
    if (total <= 4) {
        //Generate HTML For output Here Chaotic Evil The Joker
        console.log('hello')
        return;
    }
    else if (total >= 5 && total <= 8) {
        //Generate HTML for output here Lawful Evil Lord Farquaad
        console.log('ok')
        return;
    }
    else if (total >= 9 && total <= 12) {
        //Generate HTML for output here Neutral Good Spongebob Squarepants
        console.log('yes')
        return;
    }
    else if (total >= 13 && total <= 16) {
        //Generate HTML for output here True Neutral Brian Griffin
        console.log('ok')
        return;
    }
    else if (total >= 17 && total <= 20) {
        //Generate HTML for output here Lawful Good Woody Pride
        console.log('ok')
        return;
    }
};


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
// result.addEventListener('click',restartQuiz);
