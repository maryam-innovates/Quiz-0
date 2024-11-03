const quizData = [
    {
        question: "What is the output of print(2 * 3 ** 3)?",
        answers: [50, 54, 60, 72],
        correctAnswer: 54
    },
    {
        question: "Which of the following is a mutable data type in Python?",
        answers: ["list", "tuple", "string", "int"],
        correctAnswer: "list"
    },
    {
        question: "What is the keyword used to define a function in Python?",
        answers: ["function", "def", "method", "define"],
        correctAnswer: "def"
    },
    {
        question: "How do you create a list in Python?",
        answers: ["[]", "{}", "()", "<>"],
        correctAnswer: "[]"
    },
    {
        question: "Which of the following is used to comment in Python?",
        answers: ["//", "#", "/*", "<!--"],
        correctAnswer: "#"
    },
    {
        question: "What is the output of len('Hello World')?",
        answers: [10, 11, 12, 13],
        correctAnswer: 11
    },
    {
        question: "Which of the following is a Python built-in function?",
        answers: ["print()", "echo()", "write()", "display()"],
        correctAnswer: "print()"
    },
    {
        question: "What is the correct way to create a dictionary in Python?",
        answers: ["{}", "[]", "()", "<>"],
        correctAnswer: "{}"
    },
    {
        question: "What does the 'break' statement do?",
        answers: ["Exits the loop", "Continues to the next iteration", "Stops the program", "Exits the function"],
        correctAnswer: "Exits the loop"
    },
    {
        question: "What is the result of 10 // 3?",
        answers: [3, 3.33, 4, 5],
        correctAnswer: 3
    },
    {
        question: "How do you start a for loop in Python?",
        answers: ["for i in range(0, 10)", "for i = 0 to 10", "for i: range(10)", "for i in 10"],
        correctAnswer: "for i in range(0, 10)"
    },
    {
        question: "Which method is used to convert a string to a list?",
        answers: ["split()", "list()", "convert()", "to_list()"],
        correctAnswer: "split()"
    },
    {
        question: "What is the correct syntax for a while loop?",
        answers: ["while (i < 5):", "while i < 5:", "while i < 5()", "while i: < 5"],
        correctAnswer: "while i < 5:"
    },
    {
        question: "Which of the following is a way to handle exceptions?",
        answers: ["try/catch", "try/except", "handle/except", "catch/try"],
        correctAnswer: "try/except"
    },
    {
        question: "What is the output of print(type(3.5))?",
        answers: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'complex'>"],
        correctAnswer: "<class 'float'>"
    },
    {
        question: "How do you create a tuple in Python?",
        answers: ["[]", "{}", "()", "<>"],
        correctAnswer: "()"
    },
    {
        question: "What is the method to find the maximum value in a list?",
        answers: ["max()", "highest()", "top()", "largest()"],
        correctAnswer: "max()"
    },
    {
        question: "Which of the following can be used to read a file in Python?",
        answers: ["open()", "read()", "file()", "load()"],
        correctAnswer: "open()"
    },
    {
        question: "What is the output of 5 % 2?",
        answers: [1, 2, 0, 5],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to define a class?",
        answers: ["class", "def", "struct", "create"],
        correctAnswer: "class"
    },
    {
        question: "How do you define a variable in Python?",
        answers: ["x = 10", "define x as 10", "var x = 10", "let x = 10"],
        correctAnswer: "x = 10"
    },
    {
        question: "What will be the output of print('Hello' + ' World')?",
        answers: ["HelloWorld", "Hello World", "Hello, World", "Hello World!"],
        correctAnswer: "Hello World"
    },
    {
        question: "Which of the following is not a keyword in Python?",
        answers: ["print", "if", "else", "switch"],
        correctAnswer: "print"
    },
    {
        question: "What does the 'pass' statement do?",
        answers: ["Does nothing", "Raises an error", "Exits the function", "Returns None"],
        correctAnswer: "Does nothing"
    },
    {
        question: "Which of the following is a Python library for data manipulation?",
        answers: ["Pandas", "NumPy", "SciPy", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the output of print(0b1010)?",
        answers: [8, 10, 12, 14],
        correctAnswer: 10
    },
    {
        question: "How do you install a package using pip?",
        answers: ["pip install package_name", "pip install --upgrade package_name", "pip add package_name", "pip get package_name"],
        correctAnswer: "pip install package_name"
    },
    {
        question: "What is the output of print(2 ** 3)?",
        answers: [6, 8, 10, 4],
        correctAnswer: 8
    },
    {
        question: "How do you create a virtual environment in Python?",
        answers: ["python -m venv env", "venv env", "virtualenv env", "create env"],
        correctAnswer: "python -m venv env"
    },
    {
        question: "What is the default port for HTTP?",
        answers: [21, 25, 80, 443],
        correctAnswer: 80
    },
    {
        question: "Which function is used to get the length of a list?",
        answers: ["length()", "len()", "size()", "count()"],
        correctAnswer: "len()"
    },
    {
        question: "What is the output of print('Python'.upper())?",
        answers: ["PYTHON", "python", "Python", "PYthOn"],
        correctAnswer: "PYTHON"
    },
    {
        question: "Which of the following is a way to import a module?",
        answers: ["import module_name", "require(module_name)", "include(module_name)", "load(module_name)"],
        correctAnswer: "import module_name"
    },
    {
        question: "What is the purpose of the self parameter in class methods?",
        answers: ["Refers to the class", "Refers to the instance", "Refers to the method", "Refers to the variable"],
        correctAnswer: "Refers to the instance"
    },
    {
        question: "How do you format a string in Python?",
        answers: ["Using f-strings", "Using format()", "Using % operator", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the output of print('Hello'.replace('H', 'J'))?",
        answers: ["Hello", "Jello", "Jello World", "JellO"],
        correctAnswer: "Jello"
    },
    {
        question: "Which of the following is used to declare a variable in Python?",
        answers: ["var x", "let x", "x =", "int x"],
        correctAnswer: "x ="
    },
    {
        question: "What is the purpose of the continue statement?",
        answers: ["Skip to the next iteration", "Exit the loop", "Stop the program", "Go to the end of the loop"],
        correctAnswer: "Skip to the next iteration"
    },
    {
        question: "What will be the output of print('5' + '5')?",
        answers: ["10", "55", "5", "5.0"],
        correctAnswer: "55"
    },
    {
        question: "Which function can be used to convert a string to an integer?",
        answers: ["int()", "str()", "float()", "convert()"],
        correctAnswer: "int()"
    },
    {
        question: "What is the output of print(3 != 3)?",
        answers: ["True", "False", "None", "0"],
        correctAnswer: "False"
    },
    {
        question: "Which data type is used to store True and False values?",
        answers: ["int", "bool", "str", "float"],
        correctAnswer: "bool"
    },
    {
        question: "What is the result of 1 == 1 and 2 == 2?",
        answers: ["True", "False", "None", "0"],
        correctAnswer: "True"
    },
    {
        question: "What is the correct way to check membership in a list?",
        answers: ["in", "is", "not", "and"],
        correctAnswer: "in"
    },
    {
        question: "What will be the output of print(bool(0))?",
        answers: ["True", "False", "None", "0"],
        correctAnswer: "False"
    },
    {
        question: "How do you raise an exception in Python?",
        answers: ["raise Exception", "throw Exception", "error Exception", "raise_error Exception"],
        correctAnswer: "raise Exception"
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
