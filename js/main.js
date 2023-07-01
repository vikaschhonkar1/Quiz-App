let testHeading = "";
let questions = [];
let totalQuestions = 0;
let currentIndex = 0;
let score = 0;
let selctedChoice = {};

//Fetching data from json file
fetch("./question.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    setTestHeading(res.heading);
    totalQuestions = res.mcqs.length;
    questions = res.mcqs;
  })
  .catch((err) => {
    console.error(err);
  });

// To set the heading of the test
function setTestHeading(testHeading) {
  testHeading = testHeading;
  document.getElementById("test-heading").innerText = testHeading;
}

// Load the quiz section
function quizPage() {
  document.getElementById("header").className = "header hidden";
  document.getElementById("section_question").className = "py_2 section_question";
  startQuiz();
}

//start Quiz
function startQuiz() {
  //set the question number
  //shows progress
  document.getElementById("question-num-value").innerHTML = currentIndex + 1;
  document.getElementById("total-questions").innerHTML = totalQuestions;

  //set the question
  document.getElementsByClassName("question-num").innerHTML = currentIndex + 1;
  document.getElementById("question").innerText =
    questions[currentIndex].question;

  // set the options
  document.getElementById("options").innerHTML = "";
  questions[currentIndex].choices.forEach((element) => {
    let choices;
    choices = `<div><input type="radio" name="options" value="${element}">  ${element}</div>`;

    document.getElementById("options").innerHTML += choices;
  });
}

//Next Button
function nextQuestion() {
  let selected = document.querySelector('input[name="options"]:checked');
  if (selected != undefined && selected != null) {
    selctedChoice[`${currentIndex}`] = selected.value;
  }
  currentIndex += 1;
  if (currentIndex < questions.length && currentIndex >= 0) {
    nextPrevQuiz(selctedChoice[currentIndex]);
  }
}

//Previous Button
function prevQuestion() {
  currentIndex -= 1;
  if (currentIndex < questions.length && currentIndex >= 0) {
    nextPrevQuiz(selctedChoice[currentIndex]);
  }
}

// To submit the test
// Final Score Page
function submitTest() {
  document.getElementById("section_question").className = "py_2 hidden";
  document.getElementById("quiz-score").className = "quiz-score py_2";

  finalResult();

  console.log(score);
  document.getElementById("quiz-result").innerHTML =
    score + "/" + totalQuestions;
}

function finalResult() {
  // console.log(selctedChoice);
  for (let i = 0; i < questions.length; i++) {
    if (selctedChoice[`${i}`] == questions[i].correct) {
      score++;
    }
  }
  // console.log(score);
}

//Utility Function to Check whether the answer is marked previously or not
function nextPrevQuiz(chked) {
  let checked;
  document.getElementById("question-num-value").innerHTML = currentIndex + 1;
  document.getElementById("total-questions").innerHTML = totalQuestions;

  document.getElementsByClassName("question-num").innerHTML = currentIndex + 1;
  document.getElementById("question").innerText =
    questions[currentIndex].question;
  document.getElementById("options").innerHTML = "";
  questions[currentIndex].choices.forEach((element) => {
    if (element == chked) {
      checked = "checked";
    } else {
      checked = "";
    }

    let choices;
    choices = `<div><input type="radio" name="options" value="${element}" ${checked} >  ${element}</div>`;

    document.getElementById("options").innerHTML += choices;
  });
}

//TO Show Summary
function finalSummary() {
  let FinalS = "";

  for (let i = 0; i < totalQuestions; i++) {
    let choices = "";
    questions[i].choices.forEach((element) => {
      let checked;
      if (element == questions[i].correct) {
        checked = "label-green";
      }
      if (
        selctedChoice[i] == element &&
        selctedChoice[i] != questions[i].correct
      ) {
        checked = "label-red";
      }

      choices += `<div class="${checked}"> ${element}</div>`;
    });

    FinalS += `<div class="quiz-container">
     <div class="question-number"><h3>Question <span class="question-num-value">${
       i + 1
     }</span> of <span class="total-questions">${totalQuestions}</span></h3> </div>
     <div class="question">${questions[i].question}</div>
     <div class="options">${choices}
     </div>
     <div><strong>Explaination :</strong> ${questions[i].explanation}</div>
   </div>
  `;
  }

  document.getElementById("quiz-summary").innerHTML += FinalS;
}

// To submit the test
// Final Score Page
function submitTest() {
  document.getElementById("section_question").className = "py_2 hidden";
  document.getElementById("quiz-score").className = "quiz-score py_2";

  nextQuestion();
  finalResult();
  finalSummary();
  console.log(score);
  document.getElementById("quiz-result").innerHTML =
    score + "/" + totalQuestions;
}


function finalResult() {
  // console.log(selctedChoice);
  for (let i = 0; i < questions.length; i++) {
    if (selctedChoice[`${i}`] == questions[i].correct) {
      score++;
    }
  }
  // console.log(score);
}
