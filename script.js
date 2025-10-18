    const questions = [
        {
            question: "What type of light from devices can delay your body's sleep signals?",
            answers: [
                { text: "Red Light", correct: false},
                { text: "Blue Light", correct: true},
                { text: "Green Light", correct: false},
                { text: "Yellow Light", correct: false},
            ]
        },
        {
            question: "How long before bedtime is it recommended to stop using devices to help improve sleep quality?",
            answers: [
                { text: "5 minutes", correct: false},
                { text: "15 minutes", correct: false},
                { text: "30-60 minutes", correct: true},
                { text: "Only when you feel tired", correct: false},
            ]
        },
        {  
            question: "Which hormone does blue light suppress, making it harder to fall asleep?",
            answers: [
                { text: "Cortiso", correct: false},
                { text: "Serotonin", correct: false},
                { text: "Melatonin", correct: true},
                { text: "Adrenaline", correct: false},
            ]
        },
        {
            question: "What is a common effect of using devices late at night?",
            answers: [
                { text: "Improved focus the next day", correct: false},
                { text: "Shorter sleep duration", correct: true},
                { text: "More vivid dreams", correct: false},
                { text: "Faster muscle recovery", correct: false},
            ]
        },
        {
            question: "Which is the most common reason people lose sleep when using devices before bed?",
            answers: [
                { text: "Mental stimulation from content", correct: true},
                { text: "Devices overheat the room", correct: false},
                { text: "Radiation from devices", correct: false},
                { text: "Sound quality of videos", correct: false},
            ]
        },
        {
            question: "Which of the following can help reduce the negative effects of night time screen use?",
            answers: [
                { text: "Holding the screen closer to your eyes", correct: false},
                { text: "Using devices in complete darkness", correct: false},
                { text: "Turning up volume", correct: false},
                { text: "Wearing blue-light blocking glasses ", correct: true},
            ]
        },
        {
            question: "How can late-night phone notifications affect your sleep?",
            answers: [
                { text: "They can make dreams more vivid", correct: false},
                { text: "They boost melatonin levels", correct: false},
                { text: "They can wake you or disrupt sleep cycles", correct: true},
                { text: "They improve deep sleep", correct: false},
            ]
        },
        {
            question: "What is the main reason scrolling social media in bed can delay sleep?",
            answers: [
                { text: "It keeps the brain alert and engaged", correct: true},
                { text: "It burns calories", correct: false},
                { text: "It srengthens eye muscles", correct: false},
                { text: "It lowers stress hormones", correct: false},
            ]
        },
        {
            question: "What are three ways you can do to reduce excessive device use at night?",
            answers: [
                { text: "Just get off your device, its not that hard", correct: false},
                { text: "Charge your phone next to bed, Disable dnd, leave notifications unmuted", correct: false},
                { text: "Use mutiple devices at once, scroll media in bed, play games in the dark", correct: false},
                { text: "Use App Limits, Greyscale, Charge/Keep your phone outside of your room", correct: true},
            ]
        },
        {
            question: "Which habit before bedtime can most negatively impact your sleep quality?",
            answers: [
                { text: "Reading a book in dim light", correct: false},
                { text: "Drinking water before bed", correct: false},
                { text: "Scrolling on your phone or using devices before bed", correct: true},
                { text: "Doing light stretches", correct: false},
            ]
        }
    ];

    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if (answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState(){
        nextButton.style.display = "none";
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You got a score of ${score} out of ${questions.length}! Well done!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}               

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){    
        handleNextButton();
    }else{
        startQuiz();
    }
});
    startQuiz();
