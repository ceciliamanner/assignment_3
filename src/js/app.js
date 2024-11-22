const questions = [
    {
        question: "Oslo's Opera House is supposed to look like ... ?",
        options: ["Giant Snowflake", "Mountain Peak", "Spaceship", "Iceberg"],
        answer: "Iceberg", 
    },
    {
        question: "What was the name of Norway’s capital city between 1624 and 1925?",
        options: ["Oslofjord", "Malmø", "Christiania", "Nordvik" ],
        answer: "Christiania", 
    },
    {
        question: "Whats the classic Friday night food in Norway that everyone loves?",
        options: ["Grandiosa", "Fårikål", "Salmon", "Taco"],
        answer: "Taco",
    },
    {
        question: "What is Norway most famous for in the Eurovision Song Contest?",
        options: ["Winning the most times", "Getting zero points", "Always sending heavy metal bands", "Being super dramatic on stage"],
        answer: "Getting zero points", 
    },
    {
        question: "When do Norwegians most often greet each other with a friendly “hi”?",
        options: ["At Christmas time", "In bars", "At the libery", "On the mountains"],
        answer: "On the mountains",
    },
    {
        question: "Who´s the Norwegian pop sensation behind the iconic “Take On Me” that made you wanna dance like a maniac?",
        options: ["Kygo", "A-ha", "Alan Walker", "Sigrid"],
        answer: "A-ha",
    },
    {
        question: "When did Peppe's Pizza, Norway's beloved pizza chain, first open its doors?",
        options: ["1958", "1970", "1983", "1995"],
        answer: "1970",
    },
    {
        question: "Who invented the iconic Norwegian cheese slicer (Osthyvel) in 1925?",
        options: ["Ole Gunnar Solskjær", "Edvard Munch", "Thor Bjørklund", "Fridtjof Nansen"],
        answer: "Thor Bjørklund",
    }
];

const quizContainer = document.querySelector(".quiz__container");
const startScreen = document.querySelector(".start-screen"); // 
const quizButtonStart = document.querySelector(".quiz__button--start");

const gameScreen = document.querySelector(".game-screen");
const quizNumber = document.querySelector(".quiz__number"); 
const quizQuestion = document.querySelector(".quiz__question");
const quizOptions = document.querySelector(".quiz__options");
const quizButtonRestart = document.querySelector(".quiz__button--restart");
const quizButtonNext = document.querySelector(".quiz__button--next");
const quizButtonSubmit = document.querySelector(".quiz__button--submit"); 

const scoreScreen = document.querySelector(".score-screen");
const quizScoreTitle = document.querySelector(".quiz__score--title"); // 
const quizScore = document.querySelector(".quiz__score");
const quizButtonReview = document.querySelector(".quiz__button--review");

const reviewScreen = document.querySelector(".review-screen");
const quizReviewTitle = document.querySelector(".quiz__review--title"); //
const quizReviewContent = document.querySelector(".quiz__review--content"); 
const quizButtonClose = document.querySelector(".quiz__button--close");

//----* start screen*----// 
let currentQuizIndex = 0; 
let score = 0; 
let selectedAnswer = null; 

function showElement (element){
    element.classList.remove("hidden");
}

function hideElement (element){
    element.classList.add("hidden");
}

quizButtonStart.addEventListener("click", () => {
    currentQuizIndex = 0; 
    score = 0;
    selectedAnswer = null; 
    hideElement (startScreen); 
    showElement (gameScreen);
    displayQuestion()
    
}); 

//----* game screen *----//


const displayQuestion = () => {

    // display question 1 / 8 
    const quizData = questions[currentQuizIndex];
    
    quizNumber.innerText = `${currentQuizIndex + 1} / ${questions.length}`;
    quizQuestion.innerText = quizData.question; 
    quizOptions.innerHTML = ""; 

    // display the quiz-options 
    quizData.options.forEach(option => {
        const optionButton = document.createElement("button"); 
        optionButton.classList.add("quiz-option"); 
        quizOptions.append(optionButton);
        optionButton.innerText = option; 

        optionButton.addEventListener("click", () => {
            selectedAnswer = option; 
            
        }); 
    });

}; 

// next button

quizButtonNext.addEventListener("click", () => {
    if (selectedAnswer === null){
        return; 
    };

    const quizData = questions[currentQuizIndex];       
    /* usersAnswers[currentQuizIndex] = selectedAnswer;  */

    if (selectedAnswer === quizData.answer){        //addera score
        score++; 
    }; 

    if(currentQuizIndex === questions.length - 1){  
        hideElement(quizQuestion);
        hideElement(quizNumber);
        hideElement(quizOptions);
        quizButtonNext.classList.add("hidden");        
        quizButtonSubmit.classList.remove("hidden");
    }else{
        currentQuizIndex++; 
        selectedAnswer = null; 
        displayQuestion();
    }

}); 

// restart button

quizButtonRestart.addEventListener("click", () => {
    currentQuizIndex = 0;
    score = 0; 
    displayQuestion(); 
});

// submit button

quizButtonSubmit.addEventListener("click", () => {
    quizScore.innerText = `Your score is ${score} out of ${questions.length}`;
    hideElement(gameScreen);
    showElement(scoreScreen);
}); 


//-----* review screen *-----// 


quizButtonReview.addEventListener("click", () => {
    hideElement(scoreScreen);
    showElement(reviewScreen);

    questions.forEach((question, index) => {
        const reviewEachAnswer = document.createElement("div");
        reviewEachAnswer.classList.add("review-answers"); 

        const questionText = document.createElement("p"); 
        questionText.innerText = `Q${index +1}: ${question.question}`; 
        reviewEachAnswer.append(questionText);

    });


});


    