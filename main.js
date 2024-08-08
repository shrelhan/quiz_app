const apiUrl = "questions.json";
//const apiUrl ="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

let questions = [
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: [
      { text: "Crypton Future Media", correct: true },
      { text: "Sega", correct: false },
      { text: "Sony", correct: false },
      { text: "Yamaha Corporation", correct: false },
    ],
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: [
      { text: "Crypton Future Media", correct: true },
      { text: "Sega", correct: false },
      { text: "Sony", correct: false },
      { text: "Yamaha Corporation", correct: false },
    ],
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: [
      { text: "Crypton Future Media", correct: true },
      { text: "Sega", correct: false },
      { text: "Sony", correct: false },
      { text: "Yamaha Corporation", correct: false },
    ],
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: [
      { text: "Crypton Future Media", correct: true },
      { text: "Sega", correct: false },
      { text: "Sony", correct: false },
      { text: "Yamaha Corporation", correct: false },
    ],
  },
];

// async function fetchQuestions() {
//   const response = await fetch(apiUrl);
//   let data = await response.json();
// }

// fetchQuestions();
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectANswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectANswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct == "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
