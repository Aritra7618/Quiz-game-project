const quizData = [
  {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
  },
  {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b"
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hyperloop Machine Language",
      c: "Hyperlinking Text Management Language",
      d: "Home Tool Markup Language",
      correct: "a"
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b"
  },
  {
      question: "Which company developed JavaScript?",
      a: "Microsoft",
      b: "Sun Microsystems",
      c: "Netscape",
      d: "Oracle",
      correct: "c"
  },
  {
      question: "Which HTML tag is used to define an internal style sheet?",
      a: "<css>",
      b: "<style>",
      c: "<script>",
      d: "<link>",
      correct: "b"
  },
  {
      question: "Which property is used to change the background color in CSS?",
      a: "color",
      b: "bgcolor",
      c: "background-color",
      d: "background",
      correct: "c"
  },
  {
      question: "Which symbol is used for comments in JavaScript?",
      a: "//",
      b: "/* */",
      c: "#",
      d: "<!-- -->",
      correct: "a"
  },
  {
      question: "How do you write 'Hello World' in an alert box in JavaScript?",
      a: "msg('Hello World');",
      b: "alert('Hello World');",
      c: "alertBox('Hello World');",
      d: "msgBox('Hello World');",
      correct: "b"
  },
  {
      question: "Which of the following is NOT a programming language?",
      a: "Python",
      b: "HTML",
      c: "C++",
      d: "Java",
      correct: "b"
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <h2>You answered correctly ${score}/${quizData.length} questions</h2>
              <button onclick="location.reload()">Reload</button>
          `;
      }
  }
});
