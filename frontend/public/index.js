import { fetchQuizzes } from "./api.js";

let current = 0;
let questions = [];

async function loadQuiz() {
  questions = await fetchQuizzes();

  if (!questions || questions.length === 0) {
    document.getElementById("app").innerHTML = `
      <div class="card">
        <h2>No questions found ❌</h2>
      </div>
    `;
    return;
  }

  showQuestion();
}

function showQuestion() {
  const app = document.getElementById("app");
  const q = questions[current];

  app.innerHTML = `
    <div class="card">
      <h1 class="title">Cloud Quiz App</h1>

      <div class="question">${q.question_text}</div>

      <button class="option-btn" onclick="checkAnswer(this, '${q.option_a}', '${q.correct_answer}')">${q.option_a}</button>
      <button class="option-btn" onclick="checkAnswer(this, '${q.option_b}', '${q.correct_answer}')">${q.option_b}</button>
      <button class="option-btn" onclick="checkAnswer(this, '${q.option_c}', '${q.correct_answer}')">${q.option_c}</button>
      <button class="option-btn" onclick="checkAnswer(this, '${q.option_d}', '${q.correct_answer}')">${q.option_d}</button>
    </div>
  `;
}


window.checkAnswer = function (btn, chosen, correct) {
  let buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(b => (b.disabled = true));

  if (chosen === correct) {
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
  }

  setTimeout(() => {
    current++;

    if (current >= questions.length) {
      finishQuiz();
    } else {
      showQuestion();
    }
  }, 1000);
};


function finishQuiz() {
  document.getElementById("app").innerHTML = `
      <div class="card finish">
        <h1>Quiz Finished 🎉</h1>
        <p>Great job! Refresh to try again.</p>
      </div>
  `;
}

loadQuiz();
