//*****Variables

//-----Questions and Answers
var arrayOfQuestions = [{
    question: "What is the result of (30+20)?",
    choices: ["20", "30", "50", "60"],
    correctAnswer: "50"
}, {
    question: "What is the result of (5*20)?",
    choices: ["100", "25", "50", "200"],
    correctAnswer: "100"
}, {
    question: "What is the result of (20-10)?",
    choices: ["5", "10", "30", "20"],
    correctAnswer: "10"
}, {
    question: "What is the result of (-25+5)?",
    choices: ["30", "20", "-30", "-20"],
    correctAnswer: "-20"
}, {
    question: "What is the result of (10/2)?",
    choices: ["5", "10", "30", "20"],
    correctAnswer: "5"
}];

//-----Other necessary variables
var totalResult = 0; 
var currentIndexQuestion = 0;

//*****Functions

//-----Show questions ou result
function showQuestion(){ //if the user reach the end of the quizz, call showResult().
    //console.log(currentIndexQuestion);
    if(currentIndexQuestion == arrayOfQuestions.length){
        showResult();
    } else{
        renderQuestions();
    }
}

//-----Show score
function showResult(){ //show the score to the user
    if (totalResult < 3){  
        var result = `<h2> Thank you for taking this quizz! <br> <br>Your total score is ${totalResult}/${arrayOfQuestions.length}. <br><br> Try harder next time. <br>`;
    } else{
        var result = `<h2> Thank you for taking this quizz! <br> <br>Your total score is ${totalResult}/${arrayOfQuestions.length}. <br><br> Congratulations!`;
    }
    document.getElementById('showQuestion').innerHTML = result;
    document.getElementById('forProceed').remove; //remove the alert space
}

//----Render questions
function renderQuestions(){//show questions
    var nextQuestion = '';
    nextQuestion += `<h2>${arrayOfQuestions[currentIndexQuestion].question}</h2>`;
    for (var i = 0; i < arrayOfQuestions[currentIndexQuestion].choices.length; i++){ //show choices as radio buttons
            nextQuestion += `<br>
            <input type="radio" value="${arrayOfQuestions[currentIndexQuestion].choices[i]}" id="${arrayOfQuestions[currentIndexQuestion].choices[i]}" name="choices">
            <label for="${arrayOfQuestions[currentIndexQuestion].choices[i]}">${arrayOfQuestions[currentIndexQuestion].choices[i]}</label><br>
            `; 
    }
    nextQuestion += `<br><br> <button onclick="processQuestion();"><b>Next</b></button> &nbsp <b>Total Score = ${totalResult}.</b>`;//Next button invokes processQuestion()
    document.getElementById('showQuestion').innerHTML = nextQuestion;   
}

//-----Process questions
function processQuestion(){//process user choice

    var userChoice = 'fasfas';
    var choices = document.getElementsByName('choices');
    var correctAnswer = arrayOfQuestions[currentIndexQuestion].correctAnswer;

    for(var i = 0; i < choices.length; i++){ //verifies if a choice was checked by the user and keeps the result
        if(choices[i].checked){
            userChoice = choices[i].value;
            document.getElementById('forProceed').innerHTML = ''; 
            break;
        }
    }

    if(userChoice != 'fasfas'){ 

        if(userChoice == correctAnswer){//if the user checks the correst answer, a point is summed in totalResult
            totalResult++;
        }
        currentIndexQuestion++; //increments one to the Index of current Question
        showQuestion(); //Invokes showQuestion() to decide if showResult() or renderQuestion() - a new question
    }
    else{
        document.getElementById('forProceed').innerHTML =  '<br><br><b>Please select something to proceed<b>';//alert to the user to choose a option
    }

}