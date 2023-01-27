const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars Suvs Sailboats",
    correct: "b, c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  // Deselect everything
  deselectAnswers();
  //  Get current quiz data
  const currentQuizData = quizData[currentQuiz]
  // The value of question within the object of quizData
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  // Makes sure that any answer selected is deselected when the quiz loads. 
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  // Initialize answer
  let answer;
  // Iterate through each answerEls elements
  answerEls.forEach(answerEl => {
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  // which will return answer_id
  return answer;

}

submitBtn.addEventListener('click', () => {
  // Get the answer that the user has selected
  const answer = getSelected();

  // Testing of which answer has been selected
  console.log(answer)
  // Then get the correct answer 
  if (answer){
    if(answer === quizData[currentQuiz].correct){
      // Increment the score
      score++;
    }
    // Increments the 'currentQuiz' position
    currentQuiz++

    if(currentQuiz < quizData.length){
      loadQuiz();
    }
    else {
      quiz.innerHTML = `
        <h2> Feedback: You answered ${score}  / ${quizData.length} questions correctly</h2>
        
        <button onclick="location.reload()">Reload Quiz</button>`
    }
  }
})
