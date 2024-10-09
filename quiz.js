const questions = [
    {
        question : "Which is the biggest animal in the world ?" ,

        answers : [
            {text : "Elephant" , Correct : "False"},
            {text : "Sea Whale" , Correct : "Correct"},
            {text : "Giraffe" , Correct : "False"},
            {text : "Dinasor" , Correct : "False"}
        ]
    } 
    , 
    {
        question : "Which is the smallest country in the world ?" ,

        answers : [
            {text : "Vatican City" , Correct : "Correct"},
            {text : "Shri lanka" , Correct : "False"},
            {text : "Nepal" , Correct : "False"},
            {text : "Bhutan" , Correct : "False"}
        ]
    } 
    ,
    {
        question : "Which is the largest desrt in the world ?" ,

        answers : [
            {text : "Kalahari" , Correct : "False"},
            {text : "Gobi" , Correct : "False"},
            {text : "Sahara" , Correct : "False"},
            {text : "Antractica" , Correct : "Correct"}
        ]
    }
    , 
    {
        question : "Which is the smallest continent in the world ?" ,

        answers : [
            {text : "Asia" , Correct : "False"},
            {text : "Australia" , Correct : "Correct"},
            {text : "Europe" , Correct : "False"},
            {text : "Africa" , Correct : "False"}
        ] 
    }
]


const questionElement = document.querySelector("#Question")
const AnswersButton = document.querySelector("#answers-form")
const answerBox = document.querySelector("#answers-button")
const nextButton = document.querySelector("#next-btn")

let currentQuestionIndex = 0;
let score = 0;
nextButton.style.display = "none"


function startQuiz(){
    currentQuestionIndex = 0
    score = 0 
    showQuestion();
}

function showQuestion(){
    restartState()
    firstQuestion = questions[currentQuestionIndex]
    questionElement.innerHTML = questions[currentQuestionIndex].question
    
    firstQuestion.answers.forEach(element => {
        let newButton = document.createElement("button")
        newButton.className = "form-control my-quiz mb-4"
        newButton.innerHTML = element.text
        newButton.id = element.Correct
        answerBox.appendChild(newButton)
        
        newButton.addEventListener("click" , (e)=>{
            if(e.target.id == "Correct"){
                e.target.style.backgroundColor = "rgb(31, 170, 31)"
                score++;
            }
            else if(e.target.id == "False"){
                e.target.style.backgroundColor = "red"
                document.querySelector("#Correct").style.backgroundColor = "rgb(31, 170, 31)"
            }
            Array.from(answerBox.children).forEach((element)=>{
                element.disabled = true
                element.style.cursor = "not-allowed"
            })
            nextButton.style.display = "inline-block"
        })
    });

}

function restartState(){
    nextButton.style.display = "none"
    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild)
    }
}

function showScore(){
    restartState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} questions !`
    nextButton.innerHTML = "Play again"
    nextButton.style.display = "inline-block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
   
}

nextButton.addEventListener("click" ,()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})

startQuiz()