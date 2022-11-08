const QUSTION = document.querySelector("#question");
const NEXT_BUTTON = document.querySelector(".next");
const QUESTIONS_CONTAINER = document.querySelector(".container");
let questions = [];

const xhr = new XMLHttpRequest();
let url = "http://localhost/cours1/examen_js/enquete.php?page=1";
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


// const questionContainer = document.getElementById("questions");
// function affichageQuestion(data) {

//         for (const [key, value] of Object.entries(data.questions)) {
        
//         const true_check = document.createElement("input");
        
//         const false_check = document.createElement("input");
        
//         const question = document.createElement("p");
        
//         question.innerText = value;
        
//         true_check.setAttribute("type", "checkbox");
        
//         false_check.setAttribute("type", "checkbox");
        
//         QUESTION_CONTAINER.appendChild(questionContainer);
    
//     }
// };

// questionContainer.addEventListener("click", () =>{

// })
