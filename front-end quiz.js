const quizData = [
    {
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "HighText Markup Language",
            "HyperText Markdown Language",
            "HighText Markdown Language"
        ],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        answers: [
            "<title>",
            "<header>",
            "<meta>",
            "<h1>"
        ],
        correctAnswer: "<title>"
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "How do you print the following statement in Python, Lili's cat \"Iris\" is cute?",
        answers: [
            "print(\"Lili's cat \\\"Iris\\\" is cute\")",
            "print(\'Lili's cat \"Iris\" is cute\')",
            "print(\"'Lili's cat \\\"Iris\\\" is cute\"')",
            "print(Lili's cat \"Iris\" is cute)"
        ],
        correctAnswer: "print(\"Lili's cat \\\"Iris\\\" is cute\")"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: [
            "bgcolor",
            "color",
            "background-color",
            "background"
        ],
        correctAnswer: "background-color"
    },
    {
        question: "What is the purpose of the <head> tag in HTML?",
        answers: [
            "To define the body of the document",
            "To contain meta-information about the document",
            "To create a footer",
            "To define the main content"
        ],
        correctAnswer: "To contain meta-information about the document"
    },
    {
        question: "Which HTML element is used to create an unordered list?",
        answers: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        correctAnswer: "<ul>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            "<break>",
            "<br>",
            "<lb>",
            "<line>"
        ],
        correctAnswer: "<br>"
    },
    {
        question: "What does the 'float' property do in CSS?",
        answers: [
            "Positions an element to the left or right",
            "Creates a responsive layout",
            "Changes the opacity of an element",
            "Sets the margin of an element"
        ],
        correctAnswer: "Positions an element to the left or right"
    },
    {
        question: "Which tag is used to define a table cell?",
        answers: [
            "<td>",
            "<th>",
            "<tr>",
            "<table>"
        ],
        correctAnswer: "<td>"
    },
    {
        question: "What is the purpose of the <footer> tag in HTML?",
        answers: [
            "To define the footer of a document",
            "To add metadata",
            "To create a navigation menu",
            "To display a heading"
        ],
        correctAnswer: "To define the footer of a document"
    },
    {
        question: "How do you create a comment in CSS?",
        answers: [
            "// This is a comment",
            "<!-- This is a comment -->",
            "/* This is a comment */",
            "# This is a comment"
        ],
        correctAnswer: "/* This is a comment */"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        answers: [
            "src",
            "alt",
            "title",
            "img"
        ],
        correctAnswer: "alt"
    },
    {
        question: "What is the purpose of the <div> tag in HTML?",
        answers: [
            "To create a division or section",
            "To define a list",
            "To add an image",
            "To create a heading"
        ],
        correctAnswer: "To create a division or section"
    },
    {
        question: "Which property is used to control the text size in CSS?",
        answers: [
            "font-size",
            "text-size",
            "text-style",
            "font-style"
        ],
        correctAnswer: "font-size"
    },
    {
        question: "What does the 'display' property do in CSS?",
        answers: [
            "Defines how an element is displayed",
            "Changes the background color",
            "Sets the margin of an element",
            "Defines the font size"
        ],
        correctAnswer: "Defines how an element is displayed"
    },
    {
        question: "Which HTML tag is used to create a checkbox?",
        answers: [
            "<check>",
            "<checkbox>",
            "<input type='checkbox'>",
            "<input type='check'>"
        ],
        correctAnswer: "<input type='checkbox'>"
    },
    {
        question: "What is the correct syntax for linking a CSS file in HTML?",
        answers: [
            "<link rel='stylesheet' href='styles.css'>",
            "<css href='styles.css'>",
            "<stylesheet src='styles.css'>",
            "<link src='styles.css'>"
        ],
        correctAnswer: "<link rel='stylesheet' href='styles.css'>"
    },
    {
        question: "Which CSS property is used to add space between elements?",
        answers: [
            "padding",
            "margin",
            "border",
            "spacing"
        ],
        correctAnswer: "margin"
    },
    {
        question: "What does the 'visibility' property do in CSS?",
        answers: [
            "Hides an element but maintains its space",
            "Completely removes an element",
            "Changes the color of an element",
            "Sets the opacity of an element"
        ],
        correctAnswer: "Hides an element but maintains its space"
    },
    {
        question: "What is the purpose of the <section> tag in HTML?",
        answers: [
            "Defines a section in a document",
            "Creates a hyperlink",
            "Defines a footer",
            "Adds comments"
        ],
        correctAnswer: "Defines a section in a document"
    },
    {
        question: "Which HTML element is used for defining a form?",
        answers: [
            "<form>",
            "<input>",
            "<fieldset>",
            "<button>"
        ],
        correctAnswer: "<form>"
    },
    {
        question: "How do you make a numbered list in HTML?",
        answers: [
            "<ol>",
            "<ul>",
            "<li>",
            "<list>"
        ],
        correctAnswer: "<ol>"
    },
    {
        question: "What does the 'position' property do in CSS?",
        answers: [
            "Specifies the type of positioning method",
            "Sets the margin of an element",
            "Defines the color of text",
            "Changes the font style"
        ],
        correctAnswer: "Specifies the type of positioning method"
    },
    {
        question: "Which of the following is a block-level element?",
        answers: [
            "<p>",
            "<span>",
            "<a>",
            "<strong>"
        ],
        correctAnswer: "<p>"
    },
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        answers: [
            "To provide metadata about the HTML document",
            "To define the title of the document",
            "To create a hyperlink",
            "To add a script"
        ],
        correctAnswer: "To provide metadata about the HTML document"
    },
    {
        question: "Which CSS property is used to change the font family?",
        answers: [
            "font-family",
            "text-family",
            "font",
            "text-style"
        ],
        correctAnswer: "font-family"
    },
    {
        question: "How do you specify a class in CSS?",
        answers: [
            ".classname",
            "#classname",
            "classname",
            "class:classname"
        ],
        correctAnswer: ".classname"
    },
    {
        question: "Which HTML element defines the structure of a table?",
        answers: [
            "<table>",
            "<tr>",
            "<th>",
            "<td>"
        ],
        correctAnswer: "<table>"
    },
    {
        question: "What does the 'opacity' property in CSS do?",
        answers: [
            "Controls the transparency of an element",
            "Changes the color of an element",
            "Controls the size of an element",
            "Sets the font style"
        ],
        correctAnswer: "Controls the transparency of an element"
    },
    {
        question: "Which HTML tag is used for defining an image?",
        answers: [
            "<img>",
            "<image>",
            "<src>",
            "<picture>"
        ],
        correctAnswer: "<img>"
    },
    {
        question: "What is the purpose of the <strong> tag in HTML?",
        answers: [
            "Defines important text",
            "Defines a link",
            "Creates a heading",
            "Adds a comment"
        ],
        correctAnswer: "Defines important text"
    },
    {
        question: "How do you create a dropdown list in HTML?",
        answers: [
            "<input type='dropdown'>",
            "<select>",
            "<list>",
            "<option>"
        ],
        correctAnswer: "<select>"
    },
    {
        question: "Which CSS property is used to set the space between the content and the border of an element?",
        answers: [
            "padding",
            "margin",
            "border-spacing",
            "spacing"
        ],
        correctAnswer: "padding"
    },
    {
        question: "What is the purpose of the <link> tag in HTML?",
        answers: [
            "To link to an external resource",
            "To define a script",
            "To create a hyperlink",
            "To add a comment"
        ],
        correctAnswer: "To link to an external resource"
    },
    {
        question: "What is the default value of the position property in CSS?",
        answers: [
            "static",
            "relative",
            "absolute",
            "fixed"
        ],
        correctAnswer: "static"
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