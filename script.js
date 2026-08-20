let number = document.querySelector('.question-number');

let quizzes;

let choiceArea = document.querySelector('.question-choices');

let currentQuestionIndex = 0;

let score = 0;

let questionText = document.querySelector('.question');

let answerMessage  = document.querySelector('.answer-message');

let nextButton = document.querySelector('.next-button');

quizzes = [
  {
      question: "星宮ととのアルバム「TIMESURF」から、「summer dreamin'」と「夢日記」をドッキングさせた曲とは何か。",
      choices: ["なおざり","繰り返す夏休み","タイムサーフ","ともだち"],
      answer: "ともだち",
      explanation: "正解は、ともだち"
  },

  {
      question: "星宮ととの楽曲「Outline」に参加したアーティストは、誰か",
      choices: ["TEMPLIME","N33T","EAERAN&Phritz","somunia"],
      answer: "EAERAN&Phritz",
      explanation: "正解は、EAERAN&Phritz"
  },
    
  {
      question: "星宮ととのアルバム「SHOOTING POP」の3曲目は、何か",
      choices: ["滅亡☆タイムスリップ","打倒、侵略者！","たぶんハッピーエンド","SHOOTING POP"],
      answer: "SHOOTING POP",
      explanation: "正解は、SHOOTING POP"
  },

 {
    question: "星宮ととのアルバム「POP-AID」に収録されていない曲は何か",
    choices: ["リンクロット","Hiko","skycave","Escapism"],
    answer: "リンクロット",
    explanation: "正解は、リンクロット"
 },

{
    question: "2026/6/7に行われた星宮ととの自主企画のライブ名は、何か",
    choices: ["MOONRAKER","TIME-SARFIN","Cloud Diver","NIGHT HIKE"],
    answer: "MOONRAKER",
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
  nextButton.disabled = true;

  if ( currentQuestionIndex === quizzes.length - 1 ) {
        nextButton.textContent = "結果を見る";
      } else {
        nextButton.textContent = "次の問題へ";
      }

  number.textContent = currentQuestionIndex + 1 ;
  const quiz = quizzes[currentQuestionIndex];
  const shuffledChoices = shuffle([...quiz.choices]);
  questionText.textContent = quiz.question;
  for ( let i = 0; i < shuffledChoices.length ;i++ ) {
    const button = document.createElement("button");
    button.textContent = shuffledChoices[i];
    button.addEventListener("click",() => {
      nextButton.disabled = false;
       const buttons = choiceArea.querySelectorAll("button");
       for ( let j = 0; j < buttons.length; j++){
        buttons[j].disabled = true;
       }
       if ( quiz.answer === shuffledChoices[i] ) {
          answerMessage.textContent = "正解！ " + quiz.explanation;
          score++;

          button.classList.add("correct");

      } else {

          for (let j = 0; j < buttons.length; j++) {
          if(buttons[j].textContent === quiz.answer) {
            buttons[j].classList.add("correct");
          }
        }

          answerMessage.textContent = "不正解！ " + quiz.explanation;
          button.classList.add("incorrect");

  } 
});
    choiceArea.appendChild(button);
  }
}


nextButton.addEventListener("click",() => {
  if (currentQuestionIndex < quizzes.length - 1 ){
    currentQuestionIndex++;
    showQuestion();
  } else  {
    questionText.textContent = "";
    choiceArea.innerHTML = "";
    number.textContent = "";
    answerMessage.textContent = "クイズ終了 あなたの正解数は" + score + "/" + quizzes.length + "問です";

    nextButton.style.display = "none";

    const restartButton = document.createElement("button");
    
     restartButton.textContent = "もう一度挑戦";

    restartButton.addEventListener("click",() => {
      currentQuestionIndex = 0;
      score = 0;
      
      quizzes = shuffle(quizzes);
      nextButton.style.display = "inline-block";

      showQuestion();
    });
    choiceArea.appendChild(restartButton);
  } 
});
quizzes = shuffle(quizzes);
showQuestion();