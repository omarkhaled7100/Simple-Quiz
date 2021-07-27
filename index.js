var questions = [

    {
        prompt: "What is the capital of Egypt? \n (a) Cairo \n (b) Alex \n (c)Luxor",
        answer: "a" 
    },
    {
        prompt: "What is the capital of Saudia Arabia? \n (a) Cairo \n (b) Riyad \n (c)Luxor",
        answer: "b" 
    },
    {
        prompt: "What is the capital of Germany? \n (a) Cairo \n (b) Alex \n (c)Berlin",
        answer: "c" 
    },
    {
        prompt: "What is the capital of USA? \n (a) Washinton \n (b) Alex \n (c)Luxor",
        answer: "a" 
    },
];

var score = 0;

for(var i=0; i<questions.length; i++){
    var res = window.prompt(questions[i].prompt)
    if(res == questions[i].answer){
        score++;
        alert("CORRECT")
    }
    else{
        alert("WRONG")
    }    
}
alert("Your score is " + score + "/" + questions.length)
    






/*function answerQuestions(){
    var val = document.getElementById('Q1').value;
    var p;
    if(val == ""){
        p = document.createElement('p').textContent("Please answer the question");
        document.body.appendChild(p);
    }
    else if(val == "one"){
        document.createElement('p').textContent("Correct answer");
        document.body.appendChild(p);
    }
    else{
        document.createElement('p').textContent("Wrong answer, please try again");
        document.body.appendChild(p);
    }
}*/