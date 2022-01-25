//Global variables
let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

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
    option4.setAttribute('data-total', `${option4total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}

function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
//  Confirm input was made
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
// Add score to current total
    score.push(answerScore);
    selectedAnswersData.push();
//Increment question number
    currentQuestion++;

        selectedOption.checked = false;
//Once out of questions move onto results
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        generageResults();
        return;
    }
    generateQuestions(currentQuestion);
};

function generateResults() {
    if (score <= 4) {
        //Generate HTML For output Here Chaotic Evil The Joker
        return;
    }
    else if (score >= 5 && score <= 8) {
        //Generate HTML for output here Lawful Evil Lord Farquaad
        return;
    }
    else if (score >= 9 && score <= 12) {
        //Generate HTML for output here Neutral Good Spongebob Squarepants
        return;
    }
    else if (score >= 13 && score <= 16) {
        //Generate HTML for output here True Neutral Brian Griffin
        return;
    }
    else if (score >= 17 && score <= 20) {
        //Generate HTML for output here Lawful Good Woody Pride
        return;
    }
};

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
result.addEventListener('click',restartQuiz);
