const QUSTION = document.querySelector("#question");
const START_BUTTON = document.querySelector(".start");
const QUESTIONS_CONTAINER = document.querySelector(".questions-container");

QUESTIONS_CONTAINER.classList.add("hide");

let questions = [];
let index = 0;
let correctAnswers = 0;

const xhr = new XMLHttpRequest();
let url = "http://localhost/cours1/app-quiz/index.php";
xhr.open("GET", url);
xhr.send(null);

xhr.onreadystatechange = function() {
  switch (xhr.readyState) {
    case xhr.DONE:
      switch (xhr.status) {
        case 200:
          questions = JSON.parse(xhr.response);
          break;
        case 404:
          console.log("resources not exist");
          break;
      }
      break;
    default:
      break;
  }
};

START_BUTTON.addEventListener("click", () => {
  START_BUTTON.classList.add("hide");
  QUESTIONS_CONTAINER.classList.add("show");
  showQuestions();
});

function showQuestions() {
  if (index < questions.length) {
    const ANSWERS_CONTAINER = document.querySelector("#answers");
    ANSWERS_CONTAINER.innerHTML = "";
    QUSTION.innerText = questions[index].question;

    questions[index].answer.forEach(answer => {
      const ANSWER_BUTTON = document.createElement("button");
      ANSWER_BUTTON.innerText = answer.text;
      ANSWER_BUTTON.value = answer.correct;
      ANSWER_BUTTON.addEventListener("click", () => {
        if (ANSWER_BUTTON.value === "true") {
          correctAnswers++;
          showQuestions();
        } else {
          showQuestions();
        }
      });
      ANSWERS_CONTAINER.appendChild(ANSWER_BUTTON);
      console.log(questions.length - 1);
    });
  } else {
    QUESTIONS_CONTAINER.classList.remove("show");
    QUESTIONS_CONTAINER.classList.add("hide");
    console.log("in result");
    showResult();
  }
  index++;
}

function showResult() {
  const RESULT = document.querySelector(".result");
  RESULT.innerText = `You have ${correctAnswers} correct answers of ${questions.length}`;
}
