const queststions = [
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


function showElement (element){
    element.classList.remove("hidden");
}

function hideElement (element){
    element.classList.add("hidden");
}

quizButtonStart.addEventListener("click", () => {
    hideElement (startScreen); 
    showElement (gameScreen);
    
})