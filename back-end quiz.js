const quizData = [
    {
        question: "What is load balancing?",
        answers: [
            "Distributing network traffic across multiple servers",
            "Storing data in multiple locations",
            "Deleting unnecessary files from a server",
            "Creating backups of data"
        ],
        correctAnswer: "Distributing network traffic across multiple servers"
    },
    {
        question: "What does 'authentication' mean?",
        answers: [
            "Verifying the identity of a user",
            "Creating a user account",
            "Changing a password",
            "Logging out of an account"
        ],
        correctAnswer: "Verifying the identity of a user"
    },
    {
        question: "What is 'authorization'?",
        answers: [
            "Granting permission to a user",
            "Creating a user account",
            "Logging in to an account",
            "Verifying a user's identity"
        ],
        correctAnswer: "Granting permission to a user"
    },
    {
        question: "What is a URL?",
        answers: [
            "Uniform Resource Locator",
            "Unique Resource Locator",
            "Uniform Resource Link",
            "Universal Resource Locator"
        ],
        correctAnswer: "Uniform Resource Locator"
    },
    {
        question: "What is a session in web development?",
        answers: [
            "A temporary interaction between a user and a server",
            "A way to store data permanently",
            "A type of database",
            "An API endpoint"
        ],
        correctAnswer: "A temporary interaction between a user and a server"
    },
    {
        question: "What is a cookie in web development?",
        answers: [
            "A small piece of data stored on the user's computer",
            "A type of server",
            "A programming language",
            "An image file"
        ],
        correctAnswer: "A small piece of data stored on the user's computer"
    },
    {
        question: "What is a web socket?",
        answers: [
            "A communication channel for real-time data exchange",
            "A type of database",
            "A server framework",
            "A web hosting service"
        ],
        correctAnswer: "A communication channel for real-time data exchange"
    },
    {
        question: "What does 'debugging' refer to?",
        answers: [
            "Identifying and fixing errors in code",
            "Writing code",
            "Creating software",
            "Managing servers"
        ],
        correctAnswer: "Identifying and fixing errors in code"
    },
    {
        question: "What is a framework used for?",
        answers: [
            "To simplify the development process",
            "To store data",
            "To create images",
            "To write user guides"
        ],
        correctAnswer: "To simplify the development process"
    },
    {
        question: "What is the purpose of caching?",
        answers: [
            "To store frequently accessed data for quicker retrieval",
            "To back up data",
            "To delete old data",
            "To increase server load"
        ],
        correctAnswer: "To store frequently accessed data for quicker retrieval"
    },
    {
        question: "What does the term 'API key' refer to?",
        answers: [
            "A unique identifier used to authenticate a user or application",
            "A type of database",
            "A programming language",
            "A web server"
        ],
        correctAnswer: "A unique identifier used to authenticate a user or application"
    },
    {
        question: "What is an ORM?",
        answers: [
            "Object-Relational Mapping",
            "Original Resource Model",
            "Open Resource Management",
            "Online Resource Model"
        ],
        correctAnswer: "Object-Relational Mapping"
    },
    {
        question: "What does 'asynchronous programming' allow?",
        answers: [
            "Non-blocking code execution",
            "Synchronous code execution",
            "Simplified code writing",
            "Faster data transfer"
        ],
        correctAnswer: "Non-blocking code execution"
    },
    {
        question: "What is a framework for building web applications?",
        answers: [
            "Express.js",
            "Java",
            "HTML",
            "CSS"
        ],
        correctAnswer: "Express.js"
    }
];

let currentQuestion = 0;
let score = 0;
let timerInterval;
const questionElement = document.getElementById("question");
const optionButtons = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4")
];
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("time");

// Load the first question
loadQuestion();

function loadQuestion() {
    resetTimer();
    startTimer();

    const currentQuiz = quizData[currentQuestion];
    questionElement.innerText = currentQuiz.question;

    optionButtons.forEach((button, index) => {
        button.innerText = currentQuiz.answers[index];
        button.onclick = () => {
            clearInterval(timerInterval); // Stop timer when an answer is selected
            checkAnswer(currentQuiz.answers[index]);
        };
    });

    scoreElement.innerHTML = `<h3>Score: ${score}</h3>`;
}

function checkAnswer(selectedAnswer) {
    const currentQuiz = quizData[currentQuestion];
    if (selectedAnswer === currentQuiz.correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval); // Stop the timer when the quiz ends
    document.getElementById("quiz-container").innerHTML = `
      <h2>Quiz Completed</h2>
      <p>Your score: ${score}/${quizData.length}</p>
  `;
}

// Timer functions
function startTimer() {
    let timeLeft = 10; // Set the time limit (in seconds)
    timerElement.innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Moving to the next question.");
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                endQuiz();
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval); // Clear any existing timer interval
    timerElement.innerText = "10"; // Reset the displayed time
}