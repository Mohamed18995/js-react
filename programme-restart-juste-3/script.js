const BTN_AJAX = document.getElementById('start-btn');

let questions = [];

let xhr = new XMLHttpRequest();

xhr.open('GET', `http://localhost/cours1/programme-restart-juste-3/test_ajax.php`);

xhr.send(null);

xhr.onreadystatechange = function () {
    switch (xhr.readyState){
      case xhr.DONE:
        switch(xhr.status){
          case 200:
          const TABLE_QUESTIONS = document.getElementById('hide');
           questions = JSON.parse(xhr.response);
          break;
          case 404 : 
          console.error(`Erreur [${xhr.status}] : ${xhr.statusText}`);
          break;
        }
      break;
      case xhr.LOADING:
        console.info("chargement en cours");
        break;

    }
    };

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const reulst = document.querySelector(".result")
let correctAnswers = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    const done = document.createElement("p")
    // done.innerText = `you have ${correctAnswers} answers of ${questions.length}`
    reulst.appendChild(done)
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    // console.log("in correct");
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
