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

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let correctAnswers = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const selectedOptions = form[i].selectedOptions;
    let userAnswers = [];
    for (let j = 0; j < selectedOptions.length; j++) {
      userAnswers.push(selectedOptions[j].value);
    }
    if (JSON.stringify(userAnswers.sort()) === JSON.stringify(question.answers.sort())) {
      correctAnswers++;
    }
  }

  alert(`You got ${correctAnswers} out of ${questions.length} questions correct!`);
});