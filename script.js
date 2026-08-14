let number = document.querySelector('.question-number');

let quizzes;

let choiceArea = document.querySelector('.question-choices');

let currentQuestionIndex = 0;

let questionText = document.querySelector('.question');

let answerMessage  = document.querySelector('.answer-message');

let nextButton = document.querySelector('.next-button');

quizzes = [
  {
      question: "星宮ととのアルバム「TIMESURF」から、「summer dreamin'」と「夢日記」をドッキングさせた曲とは何か。",
      choices: ["なおざり","繰り返す夏休み","タイムサーフ","ともだち"],
      answer: 3,
      explanation: "正解は、ともだち"
  },

  {
      question: "星宮ととの楽曲「Outline」に参加したアーティストは、誰か",
      choices: ["TEMPLIME","N33T","EAERAN&Phritz","somunia"],
      answer: 2,
      explanation: "正解は、EAERAN&Phritz"
  },
    
  {
      question: "星宮ととのアルバム「SHOOTING POP」の3曲目は、何か",
      choices: ["滅亡☆タイムスリップ","打倒、侵略者！","たぶんハッピーエンド","SHOOTING POP"],
      answer: 3,
      explanation: "正解は、SHOOTING POP"
  },

 {
    question: "星宮ととのアルバム「POP-AID」に収録されていない曲は何か",
    choices: ["リンクロット","Hiko","skycave","Escapism"],
    answer: 0,
    explanation: "正解は、リンクロット"
 },

{
    question: "2026/6/7に行われた星宮ととの自主企画のライブ名は、何か",
    choices: ["MOONRAKER","TIME-SARFIN","Cloud Diver","NIGHT HIKE"],
    answer: 0,
    explanation: "正解は、MOONRAKER"
 }
];

function shuffle(array){
  for (let i = array.length - 1; i > 0;i--){
    const j = Math.floor (
      Math.random() * ( i + 1 )
    );
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showQuestion()  {
  choiceArea.innerHTML = "";
  answerMessage.textContent = "";
  number.textContent = currentQuestionIndex + 1 ;
  const quiz = quizzes[currentQuestionIndex];
  questionText.textContent = quiz.question;
  for ( let i = 0; i < quiz.choices.length ;i++ ) {
    const button = document.createElement("button");
    button.textContent = quiz.choices[i];

    button.addEventListener("click",() => {
       if ( quiz.answer === i ) {
    answerMessage.textContent = "正解！ " + quiz.explanation;
  } else {
    answerMessage.textContent = "不正解！ " + quiz.explanation;
  }
});
    choiceArea.appendChild(button);
  }
}


nextButton.addEventListener("click",() => {
  if (currentQuestionIndex < quizzes.length - 1 ){
    currentQuestionIndex++;
    showQuestion();
  }
  
});
showQuestion();