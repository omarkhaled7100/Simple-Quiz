var QuizQuestions = [

    {
        question: "What is the capital of Egypt? \n" ,
        answers:{
            a: 'Cairo', 
            b: 'Alex',  
            c: 'Luxor'
        },
        correctAnswer: 'a' 
    },
    {
        question: "What is the capital of Saudia Arabia? \n",
        answers:{
            a: 'Cairo', 
            b: 'Riyad',  
            c: 'Luxor'
        },
        correctAnswer: 'b' 
    },
    {
        question: "What is the capital of Germany? \n ",
        answers:{
            a: 'Cairo', 
            b: 'Alex',  
            c: 'Berlin'
        },
        correctAnswer: 'c' 
    },
    {
        question: "What is the capital of USA? \n ",
        answers:{
            a: 'Washinton', 
            b: 'Alex',  
            c: 'Luxor'
        },
        correctAnswer: 'a' 
    },
];

var quizContainer = document.getElementById('show-questions');
var resultsContainer = document.getElementById('show-results');
var submitButton = document.getElementById('result');


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
    var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		answers = [];
	for(letter in questions[i].answers){
			answers.push(
				'<label>' 
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': ' 
					+ questions[i].answers[letter]
				+ '</label>' + '<br>'
			);
    	}
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer){
    var answerContainer = quizContainer.querySelectorAll('.answers');
    var userResponse = '';
    var score = 0;
    for(var i=0; i<questions.length; i++){
        userResponse = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userResponse === questions[i].correctAnswer){
            score++;
            answerContainer[i].style.backgroundColor = "lightgreen";
        }
        else{
            answerContainer[i].style.backgroundColor = "red";
        }
    }
    if(score>2){
        alert('CONGRATULATIONS, You made it!')
    }
    resultsContainer.innerHTML = '<p id="score">' + "Your score is " + score + "/" + questions.length + '</p>';
}


showQuestions(QuizQuestions,quizContainer);
if(resultsContainer.checked){
    resultsContainer.hidden();
}
else{
submitButton.onclick = function(){
    showResults(QuizQuestions, quizContainer, resultsContainer);
}
}
}
generateQuiz(QuizQuestions, quizContainer, resultsContainer, submitButton);
