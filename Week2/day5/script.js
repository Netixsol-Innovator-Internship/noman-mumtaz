// Global variables
let currentUser = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizTimer = null;
let timeLeft = 60;
let userScore = 0;
let quizHistory = [];

// Sample quiz data
const quizData = {
    general: {
        name: "General Knowledge",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Rome"],
                correct: 1
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "In which year did World War II end?",
                options: ["1944", "1945", "1946", "1947"],
                correct: 1
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "Which is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "Which gas makes up most of Earth's atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 1
            }
        ]
    },
    science: {
        name: "Science",
        questions: [
            {
                question: "What is the speed of light?",
                options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
                correct: 0
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "NaCl", "CH4"],
                correct: 0
            },
            {
                question: "Which organ produces insulin?",
                options: ["Liver", "Kidney", "Pancreas", "Heart"],
                correct: 2
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "6", "8", "12"],
                correct: 1
            },
            {
                question: "Which scientist developed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                correct: 1
            },
            {
                question: "What is the largest bone in the human body?",
                options: ["Tibia", "Femur", "Humerus", "Radius"],
                correct: 1
            },
            {
                question: "Which planet has the most moons?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: 1
            },
            {
                question: "What is the pH of pure water?",
                options: ["6", "7", "8", "9"],
                correct: 1
            },
            {
                question: "Which blood type is known as the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: 3
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
                correct: 1
            }
        ]
    },
    history: {
        name: "History",
        questions: [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correct: 1
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Which ancient wonder of the world was located in Alexandria?",
                options: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"],
                correct: 1
            },
            {
                question: "Who was known as the 'Iron Lady'?",
                options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
                correct: 1
            },
            {
                question: "In which year did the Titanic sink?",
                options: ["1910", "1911", "1912", "1913"],
                correct: 2
            },
            {
                question: "Who painted the ceiling of the Sistine Chapel?",
                options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
                correct: 2
            },
            {
                question: "Which war was fought between the North and South in America?",
                options: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"],
                correct: 1
            },
            {
                question: "Who was the last Pharaoh of Egypt?",
                options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ankhesenamun"],
                correct: 1
            },
            {
                question: "Which city was the capital of the Byzantine Empire?",
                options: ["Rome", "Athens", "Constantinople", "Alexandria"],
                correct: 2
            }
        ]
    },
    literature: {
        name: "Literature",
        questions: [
            {
                question: "Who wrote 'Pride and Prejudice'?",
                options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "George Eliot"],
                correct: 2
            },
            {
                question: "Which novel begins with 'It was the best of times, it was the worst of times'?",
                options: ["Great Expectations", "A Tale of Two Cities", "Oliver Twist", "David Copperfield"],
                correct: 1
            },
            {
                question: "Who wrote '1984'?",
                options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
                correct: 1
            },
            {
                question: "Which Shakespeare play features the character Hamlet?",
                options: ["Macbeth", "Othello", "King Lear", "Hamlet"],
                correct: 3
            },
            {
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: ["Harper Lee", "Toni Morrison", "Maya Angelou", "Zora Neale Hurston"],
                correct: 0
            },
            {
                question: "Which epic poem was written by Homer?",
                options: ["The Aeneid", "The Iliad", "Beowulf", "The Divine Comedy"],
                correct: 1
            },
            {
                question: "Who wrote 'The Great Gatsby'?",
                options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
                correct: 1
            },
            {
                question: "Which novel features the character Atticus Finch?",
                options: ["To Kill a Mockingbird", "Of Mice and Men", "The Grapes of Wrath", "East of Eden"],
                correct: 0
            },
            {
                question: "Who wrote 'Wuthering Heights'?",
                options: ["Charlotte Brontë", "Emily Brontë", "Anne Brontë", "Jane Austen"],
                correct: 1
            },
            {
                question: "Which play contains the line 'To be or not to be, that is the question'?",
                options: ["Macbeth", "Romeo and Juliet", "Hamlet", "Othello"],
                correct: 2
            }
        ]
    },
    mathematics: {
        name: "Mathematics",
        questions: [
            {
                question: "What is the value of π (pi) to two decimal places?",
                options: ["3.14", "3.15", "3.16", "3.13"],
                correct: 0
            },
            {
                question: "What is 15% of 200?",
                options: ["25", "30", "35", "40"],
                correct: 1
            },
            {
                question: "What is the square root of 144?",
                options: ["11", "12", "13", "14"],
                correct: 1
            },
            {
                question: "If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?",
                options: ["Right triangle", "Isosceles triangle", "Equilateral triangle", "Scalene triangle"],
                correct: 2
            },
            {
                question: "What is 7 × 8?",
                options: ["54", "56", "58", "60"],
                correct: 1
            },
            {
                question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                options: ["24", "28", "32", "36"],
                correct: 2
            },
            {
                question: "What is the area of a circle with radius 5?",
                options: ["25π", "10π", "15π", "20π"],
                correct: 0
            },
            {
                question: "What is 144 ÷ 12?",
                options: ["11", "12", "13", "14"],
                correct: 1
            },
            {
                question: "What is the sum of angles in a triangle?",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1
            },
            {
                question: "What is 2³ (2 to the power of 3)?",
                options: ["6", "8", "9", "12"],
                correct: 1
            }
        ]
    }
};

// Initialize the app
function init() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showPage('home');
    } else {
        showPage('login');
    }
    
    // Load quiz history
    const savedHistory = localStorage.getItem('quizHistory');
    if (savedHistory) {
        quizHistory = JSON.parse(savedHistory);
    }
}

// Show different pages
function showPage(page) {
    // Hide all pages
    const pages = ['loginPage', 'signupPage', 'homePage', 'quizzesPage', 'quizPage', 'resultsPage', 'reviewPage', 'profilePage'];
    pages.forEach(pageId => {
        document.getElementById(pageId).classList.add('hidden');
    });
    
    // Show navbar for authenticated pages
    const navbar = document.getElementById('navbar');
    if (page === 'login' || page === 'signup') {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    // Show selected page
    switch(page) {
        case 'login':
            document.getElementById('loginPage').classList.remove('hidden');
            break;
        case 'signup':
            document.getElementById('signupPage').classList.remove('hidden');
            break;
        case 'home':
            document.getElementById('homePage').classList.remove('hidden');
            break;
        case 'quizzes':
            document.getElementById('quizzesPage').classList.remove('hidden');
            break;
        case 'quiz':
            document.getElementById('quizPage').classList.remove('hidden');
            break;
        case 'results':
            document.getElementById('resultsPage').classList.remove('hidden');
            break;
        case 'review':
            document.getElementById('reviewPage').classList.remove('hidden');
            break;
        case 'profile':
            document.getElementById('profilePage').classList.remove('hidden');
            updateProfileDisplay();
            break;
    }
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in real app, this would be server-side)
    if (email && password) {
        currentUser = {
            name: "Sophia Bennett",
            email: email,
            joinDate: "2023"
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showPage('home');
    } else {
        alert('Please enter valid credentials');
    }
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (name && email && password) {
        currentUser = {
            name: name,
            email: email,
            joinDate: new Date().getFullYear().toString()
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showPage('home');
    } else {
        alert('Please fill in all fields');
    }
}

// Start a quiz
function startQuiz(quizType) {
    currentQuiz = quizData[quizType];
    currentQuestionIndex = 0;
    userAnswers = [];
    userScore = 0;
    timeLeft = 60;
    
    showPage('quiz');
    displayQuestion();
    startTimer();
}

// Display current question
function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Display answer options
    const optionsContainer = document.getElementById('answerOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50';
        label.innerHTML = `
            <input type="radio" name="answer" value="${index}" class="mr-4">
            <span>${option}</span>
        `;
        optionsContainer.appendChild(label);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish' : 'Next';
    
    // Reset timer
    timeLeft = 60;
    updateTimerDisplay();
}

// Start timer
function startTimer() {
    if (quizTimer) clearInterval(quizTimer);
    
    quizTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            // Time's up, move to next question
            nextQuestion();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    document.getElementById('timer').textContent = timeLeft;
}

// Next question
function nextQuestion() {
    // Save current answer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const answerValue = selectedAnswer ? parseInt(selectedAnswer.value) : -1;
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        userAnswer: answerValue,
        correct: currentQuiz.questions[currentQuestionIndex].correct,
        isCorrect: answerValue === currentQuiz.questions[currentQuestionIndex].correct
    });
    
    if (answerValue === currentQuiz.questions[currentQuestionIndex].correct) {
        userScore++;
    }
    
    // Update score display
    document.getElementById('score').textContent = userScore;
    
    // Move to next question or finish quiz
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        timeLeft = 60;
    } else {
        finishQuiz();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        
        // Restore previous answer if exists
        const previousAnswer = userAnswers[currentQuestionIndex];
        if (previousAnswer && previousAnswer.userAnswer !== -1) {
            const radio = document.querySelector(`input[name="answer"][value="${previousAnswer.userAnswer}"]`);
            if (radio) radio.checked = true;
        }
    }
}

// Finish quiz
function finishQuiz() {
    clearInterval(quizTimer);
    
    // Save quiz result to history
    const quizResult = {
        name: currentQuiz.name,
        score: userScore,
        total: currentQuiz.questions.length,
        date: new Date().toISOString().split('T')[0],
        answers: userAnswers
    };
    
    quizHistory.unshift(quizResult);
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
    
    // Display results
    document.getElementById('finalScore').textContent = `${userScore}/${currentQuiz.questions.length}`;
    showPage('results');
}

// Show review of incorrect answers
function showReview() {
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';
    
    const incorrectAnswers = userAnswers.filter(answer => !answer.isCorrect);
    
    if (incorrectAnswers.length === 0) {
        reviewContent.innerHTML = '<p class="text-center text-gray-600">Great job! You got all answers correct!</p>';
    } else {
        incorrectAnswers.forEach((answer, index) => {
            const question = currentQuiz.questions[answer.questionIndex];
            const reviewItem = document.createElement('div');
            reviewItem.className = 'bg-white p-6 rounded-lg border border-gray-200';
            reviewItem.innerHTML = `
                <h3 class="font-semibold text-gray-900 mb-4">Question ${answer.questionIndex + 1}</h3>
                <p class="text-gray-700 mb-4">${question.question}</p>
                <div class="space-y-2">
                    <p><span class="font-medium text-red-600">Your answer:</span> ${answer.userAnswer === -1 ? 'No answer' : question.options[answer.userAnswer]}</p>
                    <p><span class="font-medium text-green-600">Correct answer:</span> ${question.options[question.correct]}</p>
                </div>
            `;
            reviewContent.appendChild(reviewItem);
        });
    }
    
    showPage('review');
}

// Update profile display
function updateProfileDisplay() {
    if (currentUser) {
        document.getElementById('profileName').textContent = currentUser.name;
        document.getElementById('profileDisplayName').textContent = currentUser.name;
        document.getElementById('profileDisplayEmail').textContent = currentUser.email;
        
        // Update quiz history table
        const historyTable = document.getElementById('quizHistoryTable');
        historyTable.innerHTML = '';
        
        quizHistory.forEach(quiz => {
            const row = document.createElement('tr');
            row.className = 'hover:bg-gray-50';
            row.innerHTML = `
                <td class="py-4 px-4 text-gray-900">${quiz.name}</td>
                <td class="py-4 px-4 text-blue-600 font-medium">${quiz.score}/${quiz.total}</td>
                <td class="py-4 px-4 text-gray-600">${quiz.date}</td>
            `;
            historyTable.appendChild(row);
        });
        
        // Update activity feed
        const activityFeed = document.getElementById('activityFeed');
        activityFeed.innerHTML = '';
        
        quizHistory.slice(0, 5).forEach((quiz, index) => {
            const activity = document.createElement('div');
            activity.className = 'flex items-center space-x-3 p-3 bg-gray-50 rounded-lg';
            const daysAgo = index === 0 ? '2 days ago' : `${(index + 1) * 3} days ago`;
            activity.innerHTML = `
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p class="text-gray-700">Completed <span class="font-medium">${quiz.name}</span> quiz with a score of ${quiz.score}/${quiz.total}</p>
                <span class="text-gray-500 text-sm ml-auto">${daysAgo}</span>
            `;
            activityFeed.appendChild(activity);
        });
    }
}

// Switch profile tabs
function switchProfileTab(tabName) {
    // Hide all content
    document.getElementById('profile-content').classList.add('hidden');
    document.getElementById('activity-content').classList.add('hidden');
    
    // Remove active styles from all tabs
    document.getElementById('profile-tab').classList.remove('border-blue-500', 'text-blue-600');
    document.getElementById('profile-tab').classList.add('border-transparent', 'text-gray-500');
    document.getElementById('activity-tab').classList.remove('border-blue-500', 'text-blue-600');
    document.getElementById('activity-tab').classList.add('border-transparent', 'text-gray-500');
    
    // Show selected content and activate tab
    if (tabName === 'profile') {
        document.getElementById('profile-content').classList.remove('hidden');
        document.getElementById('profile-tab').classList.add('border-blue-500', 'text-blue-600');
        document.getElementById('profile-tab').classList.remove('border-transparent', 'text-gray-500');
    } else if (tabName === 'activity') {
        document.getElementById('activity-content').classList.remove('hidden');
        document.getElementById('activity-tab').classList.add('border-blue-500', 'text-blue-600');
        document.getElementById('activity-tab').classList.remove('border-transparent', 'text-gray-500');
    }
}


// Theme and UI functions
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        themeIcon.className = 'fas fa-moon text-lg';
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        themeIcon.className = 'fas fa-sun text-lg';
        localStorage.setItem('theme', 'dark');
    }
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('hidden');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!e.target.closest('.relative')) {
            dropdown.classList.add('hidden');
            document.removeEventListener('click', closeDropdown);
        }
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('quizHistory');
    currentUser = null;
    quizHistory = [];
    showPage('login');
}

// Update the init function to include theme initialization
function init() {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun text-lg';
    }
    
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showPage('home');
    } else {
        showPage('login');
    }
    
    // Load quiz history
    const savedHistory = localStorage.getItem('quizHistory');
    if (savedHistory) {
        quizHistory = JSON.parse(savedHistory);
    }
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', init);