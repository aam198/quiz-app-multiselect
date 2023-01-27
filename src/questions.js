const questions = [
  {
    question: "What are the colors of the rainbow?",
    answers: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  },
  {
    question: "What are the Great Lakes of North America?",
    answers: ["Superior", "Michigan", "Huron", "Erie", "Ontario"]
  },
  // more questions here
];

const answerEls = document.querySelectorAll('.answer');

deselectAnswers();

function deselectAnswers() {
  // Makes sure that any answer selected is deselected when the quiz loads. 
  answerEls.forEach(answerEl => answerEl.checked = false)
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let correctAnswers = 0;

  const checkboxes = document.getElementsByName('question1');
  console.log(checkboxes.length);

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    // const selectedOptions = form[i].checked;
    console.log(checkboxes[i].value);
    const selectedOptions = checkboxes[i].checked;
    
    let userAnswers = [];
    for (let j = 0; j < selectedOptions.length; j++) {
      console.log(selectedOptions[j].value);
      userAnswers.push(selectedOptions[j].value);
    }
    if (JSON.stringify(userAnswers.sort()) === JSON.stringify(question.answers.sort())) {
      console.log(question.answers);
      correctAnswers++;
    }
  }

  alert(`You got ${correctAnswers} out of ${questions.length} questions correct!`);
});