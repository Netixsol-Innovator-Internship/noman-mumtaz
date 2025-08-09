// Global variables
let currentUser = null
let currentQuiz = null
let currentQuestionIndex = 0
let userAnswers = []
let quizTimer = null
let timeLeft = 60
let userScore = 0
let quizHistory = []
let registeredUsers = [] // Store all registered users

// Sample quiz data
const quizData = {
  general: {
    name: "General Knowledge",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        correct: 1,
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2,
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
      },
      {
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1,
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2,
      },
      {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1,
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1,
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2,
      },
      {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 1,
      },
    ],
  },
  science: {
    name: "Science",
    questions: [
      {
        question: "What is the speed of light?",
        options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
        correct: 0,
      },
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        correct: 0,
      },
      {
        question: "Which organ produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: 2,
      },
      {
        question: "What is the atomic number of carbon?",
        options: ["4", "6", "8", "12"],
        correct: 1,
      },
      {
        question: "Which scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correct: 1,
      },
      {
        question: "What is the largest bone in the human body?",
        options: ["Tibia", "Femur", "Humerus", "Radius"],
        correct: 1,
      },
      {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
      },
      {
        question: "What is the pH of pure water?",
        options: ["6", "7", "8", "9"],
        correct: 1,
      },
      {
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        correct: 3,
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        correct: 1,
      },
    ],
  },
  history: {
    name: "History",
    questions: [
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correct: 1,
      },
      {
        question: "In which year did the Berlin Wall fall?",
        options: ["1987", "1988", "1989", "1990"],
        correct: 2,
      },
      {
        question: "Which ancient wonder of the world was located in Alexandria?",
        options: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"],
        correct: 1,
      },
      {
        question: "Who was known as the 'Iron Lady'?",
        options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
        correct: 1,
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
        correct: 1,
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1911", "1912", "1913"],
        correct: 2,
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        correct: 2,
      },
      {
        question: "Which war was fought between the North and South in America?",
        options: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"],
        correct: 1,
      },
      {
        question: "Who was the last Pharaoh of Egypt?",
        options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ankhesenamun"],
        correct: 1,
      },
      {
        question: "Which city was the capital of the Byzantine Empire?",
        options: ["Rome", "Athens", "Constantinople", "Alexandria"],
        correct: 2,
      },
    ],
  },
  literature: {
    name: "Literature",
    questions: [
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "George Eliot"],
        correct: 2,
      },
      {
        question: "Which novel begins with 'It was the best of times, it was the worst of times'?",
        options: ["Great Expectations", "A Tale of Two Cities", "Oliver Twist", "David Copperfield"],
        correct: 1,
      },
      {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        correct: 1,
      },
      {
        question: "Which Shakespeare play features the character Hamlet?",
        options: ["Macbeth", "Othello", "King Lear", "Hamlet"],
        correct: 3,
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Toni Morrison", "Maya Angelou", "Zora Neale Hurston"],
        correct: 0,
      },
      {
        question: "Which epic poem was written by Homer?",
        options: ["The Aeneid", "The Iliad", "Beowulf", "The Divine Comedy"],
        correct: 1,
      },
      {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        correct: 1,
      },
      {
        question: "Which novel features the character Atticus Finch?",
        options: ["To Kill a Mockingbird", "Of Mice and Men", "The Grapes of Wrath", "East of Eden"],
        correct: 0,
      },
      {
        question: "Who wrote 'Wuthering Heights'?",
        options: ["Charlotte Brontë", "Emily Brontë", "Anne Brontë", "Jane Austen"],
        correct: 1,
      },
      {
        question: "Which play contains the line 'To be or not to be, that is the question'?",
        options: ["Macbeth", "Romeo and Juliet", "Hamlet", "Othello"],
        correct: 2,
      },
    ],
  },
  mathematics: {
    name: "Mathematics",
    questions: [
      {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.15", "3.16", "3.13"],
        correct: 0,
      },
      {
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        correct: 1,
      },
      {
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        correct: 1,
      },
      {
        question: "If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?",
        options: ["Right triangle", "Isosceles triangle", "Equilateral triangle", "Scalene triangle"],
        correct: 2,
      },
      {
        question: "What is 7 × 8?",
        options: ["54", "56", "58", "60"],
        correct: 1,
      },
      {
        question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: ["24", "28", "32", "36"],
        correct: 2,
      },
      {
        question: "What is the area of a circle with radius 5?",
        options: ["25π", "10π", "15π", "20π"],
        correct: 0,
      },
      {
        question: "What is 144 ÷ 12?",
        options: ["11", "12", "13", "14"],
        correct: 1,
      },
      {
        question: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
      },
      {
        question: "What is 2³ (2 to the power of 3)?",
        options: ["6", "8", "9", "12"],
        correct: 1,
      },
    ],
  },
  ancient: {
    name: "Ancient Civilizations",
    questions: [
      {
        question: "Which ancient wonder of the world was located in Alexandria?",
        options: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"],
        correct: 1,
      },
      {
        question: "Who was the last Pharaoh of Egypt?",
        options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ankhesenamun"],
        correct: 1,
      },
      {
        question: "Which city was the capital of the Byzantine Empire?",
        options: ["Rome", "Athens", "Constantinople", "Alexandria"],
        correct: 2,
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
        correct: 1,
      },
      {
        question: "What was the primary building material of the pyramids?",
        options: ["Marble", "Limestone", "Granite", "Sandstone"],
        correct: 1,
      },
      {
        question: "Which ancient civilization invented the wheel?",
        options: ["Egyptians", "Greeks", "Mesopotamians", "Romans"],
        correct: 2,
      },
      {
        question: "Who was the famous queen of the Iceni tribe?",
        options: ["Cleopatra", "Boudica", "Nefertiti", "Hatshepsut"],
        correct: 1,
      },
      {
        question: "Which ancient city was destroyed by Mount Vesuvius?",
        options: ["Rome", "Athens", "Pompeii", "Troy"],
        correct: 2,
      },
      {
        question: "What was the name of the ancient Greek marketplace?",
        options: ["Forum", "Agora", "Acropolis", "Amphitheater"],
        correct: 1,
      },
      {
        question: "Which ancient wonder was located in Babylon?",
        options: ["Lighthouse", "Hanging Gardens", "Colossus", "Mausoleum"],
        correct: 1,
      },
    ],
  },
  shakespeare: {
    name: "Shakespearean Plays",
    questions: [
      {
        question: "Which play contains the line 'To be or not to be, that is the question'?",
        options: ["Macbeth", "Romeo and Juliet", "Hamlet", "Othello"],
        correct: 2,
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1,
      },
      {
        question: "In which play does the character Lady Macbeth appear?",
        options: ["Hamlet", "Macbeth", "Othello", "King Lear"],
        correct: 1,
      },
      {
        question: "What is the setting of 'Romeo and Juliet'?",
        options: ["Venice", "Verona", "Rome", "Florence"],
        correct: 1,
      },
      {
        question: "Which character says 'All the world's a stage'?",
        options: ["Hamlet", "Jacques", "Prospero", "Iago"],
        correct: 1,
      },
      {
        question: "In 'Othello', who is the villain?",
        options: ["Cassio", "Roderigo", "Iago", "Brabantio"],
        correct: 2,
      },
      {
        question: "Which play features the characters Goneril and Regan?",
        options: ["King Lear", "Macbeth", "Hamlet", "Othello"],
        correct: 0,
      },
      {
        question: "What is Hamlet's famous soliloquy about?",
        options: ["Love", "Death", "Revenge", "Life and death"],
        correct: 3,
      },
      {
        question: "In 'Macbeth', what do the witches predict?",
        options: ["Death", "Kingship", "War", "Love"],
        correct: 1,
      },
      {
        question: "Which play is known as 'The Scottish Play'?",
        options: ["Hamlet", "King Lear", "Macbeth", "Othello"],
        correct: 2,
      },
    ],
  },
}

// Authentication Helper Functions
function hashPassword(password) {
  // Simple hash function for demo purposes
  // In production, use proper hashing like bcrypt
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return hash.toString()
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePassword(password) {
  // Password must be at least 6 characters
  return password.length >= 6
}

function findUserByEmail(email) {
  return registeredUsers.find((user) => user.email.toLowerCase() === email.toLowerCase())
}

function showMessage(message, type = "error") {
  // Remove any existing messages
  const existingMessage = document.querySelector(".auth-message")
  if (existingMessage) {
    existingMessage.remove()
  }

  // Create new message element
  const messageDiv = document.createElement("div")
  messageDiv.className = `auth-message p-3 rounded-lg mb-4 text-sm ${
    type === "success"
      ? "bg-green-100 text-green-700 border border-green-300"
      : "bg-red-100 text-red-700 border border-red-300"
  }`
  messageDiv.textContent = message

  // Insert message at the top of the current form
  const currentPage = document.querySelector(".min-h-screen:not(.hidden)")
  if (currentPage) {
    const form = currentPage.querySelector("form")
    if (form) {
      form.parentNode.insertBefore(messageDiv, form)
    }
  }

  // Auto-remove message after 5 seconds
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove()
    }
  }, 5000)
}

// Initialize the app
function init() {
  // Initialize theme
  const savedTheme = localStorage.getItem("theme")
  const themeIcon = document.getElementById("themeIcon")

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark")
    if (themeIcon) themeIcon.className = "fas fa-sun text-lg"
  }

  // Load registered users
  const savedUsers = localStorage.getItem("registeredUsers")
  if (savedUsers) {
    registeredUsers = JSON.parse(savedUsers)
  }

  // Check if user is logged in
  const savedUser = localStorage.getItem("currentUser")
  if (savedUser) {
    const userData = JSON.parse(savedUser)
    // Verify user still exists in registered users
    const userExists = findUserByEmail(userData.email)
    if (userExists) {
      currentUser = userData
      showPage("home")
    } else {
      // User was deleted, clear session
      localStorage.removeItem("currentUser")
      showPage("login")
    }
  } else {
    showPage("login")
  }

  // Load quiz history
  const savedHistory = localStorage.getItem("quizHistory")
  if (savedHistory) {
    quizHistory = JSON.parse(savedHistory)
  }
}

// Show different pages
function showPage(page) {
  // Hide all pages
  const pages = [
    "loginPage",
    "signupPage",
    "homePage",
    "quizzesPage",
    "quizPage",
    "resultsPage",
    "reviewPage",
    "profilePage",
  ]
  pages.forEach((pageId) => {
    const element = document.getElementById(pageId)
    if (element) {
      element.classList.add("hidden")
    }
  })

  // Clear any existing messages when changing pages
  const existingMessage = document.querySelector(".auth-message")
  if (existingMessage) {
    existingMessage.remove()
  }

  // Show navbar for authenticated pages
  const navbar = document.getElementById("navbar")
  if (page === "login" || page === "signup") {
    if (navbar) navbar.classList.add("hidden")
  } else {
    if (navbar) navbar.classList.remove("hidden")
  }

  // Show selected page
  switch (page) {
    case "login":
      const loginPage = document.getElementById("loginPage")
      if (loginPage) loginPage.classList.remove("hidden")
      break
    case "signup":
      const signupPage = document.getElementById("signupPage")
      if (signupPage) signupPage.classList.remove("hidden")
      break
    case "home":
      const homePage = document.getElementById("homePage")
      if (homePage) homePage.classList.remove("hidden")
      break
    case "quizzes":
      const quizzesPage = document.getElementById("quizzesPage")
      if (quizzesPage) quizzesPage.classList.remove("hidden")
      break
    case "quiz":
      const quizPage = document.getElementById("quizPage")
      if (quizPage) quizPage.classList.remove("hidden")
      break
    case "results":
      const resultsPage = document.getElementById("resultsPage")
      if (resultsPage) resultsPage.classList.remove("hidden")
      break
    case "review":
      const reviewPage = document.getElementById("reviewPage")
      if (reviewPage) reviewPage.classList.remove("hidden")
      break
    case "profile":
      const profilePage = document.getElementById("profilePage")
      if (profilePage) profilePage.classList.remove("hidden")
      updateProfileDisplay()
      break
  }
}

// Handle login - UPDATED WITH AUTHENTICATION
function handleLogin(event) {
  event.preventDefault()
  const email = document.getElementById("loginEmail").value.trim()
  const password = document.getElementById("loginPassword").value

  // Validate input
  if (!email || !password) {
    showMessage("Please enter both email and password.")
    return
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.")
    return
  }

  // Find user in registered users
  const user = findUserByEmail(email)
  if (!user) {
    showMessage("No account found with this email address. Please sign up first.")
    return
  }

  // Verify password
  const hashedPassword = hashPassword(password)
  if (user.password !== hashedPassword) {
    showMessage("Incorrect password. Please try again.")
    return
  }

  // Login successful
  currentUser = {
    name: user.name,
    email: user.email,
    joinDate: user.joinDate,
    id: user.id,
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser))
  showMessage("Login successful! Welcome back.", "success")

  // Redirect to home page after a short delay
  setTimeout(() => {
    showPage("home")
  }, 1000)
}

// Handle signup - UPDATED WITH AUTHENTICATION
function handleSignup(event) {
  event.preventDefault()
  const name = document.getElementById("signupName").value.trim()
  const email = document.getElementById("signupEmail").value.trim()
  const password = document.getElementById("signupPassword").value
  const confirmPassword = document.getElementById("confirmPassword").value

  // Validate input
  if (!name || !email || !password || !confirmPassword) {
    showMessage("Please fill in all fields.")
    return
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.")
    return
  }

  if (!validatePassword(password)) {
    showMessage("Password must be at least 6 characters long.")
    return
  }

  if (password !== confirmPassword) {
    showMessage("Passwords do not match!")
    return
  }

  // Check if user already exists
  const existingUser = findUserByEmail(email)
  if (existingUser) {
    showMessage("An account with this email already exists. Please login instead.")
    return
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(), // Simple ID generation
    name: name,
    email: email.toLowerCase(),
    password: hashPassword(password),
    joinDate: new Date().getFullYear().toString(),
    createdAt: new Date().toISOString(),
  }

  // Add to registered users
  registeredUsers.push(newUser)
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))

  // Auto-login the new user
  currentUser = {
    name: newUser.name,
    email: newUser.email,
    joinDate: newUser.joinDate,
    id: newUser.id,
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser))
  showMessage("Account created successfully! Welcome to QuizMaster.", "success")

  // Redirect to home page after a short delay
  setTimeout(() => {
    showPage("home")
  }, 1500)
}

// Start a quiz - FIXED VERSION
function startQuiz(quizType) {
  console.log("Starting quiz:", quizType)

  // Clear any existing timer
  if (quizTimer) {
    clearInterval(quizTimer)
    quizTimer = null
  }

  // Check if quiz type exists
  if (!quizData[quizType]) {
    console.error("Quiz type not found:", quizType)
    alert("Quiz not available. Please try another quiz.")
    return
  }

  // Reset all quiz variables
  currentQuiz = quizData[quizType]
  currentQuestionIndex = 0
  userAnswers = []
  userScore = 0
  timeLeft = 60

  console.log("Quiz loaded:", currentQuiz.name, "Questions:", currentQuiz.questions.length)

  // Show quiz page and display first question
  showPage("quiz")

  // Small delay to ensure page is loaded
  setTimeout(() => {
    displayQuestion()
    startTimer()
  }, 100)
}

// Display current question - FIXED VERSION
function displayQuestion() {
  if (!currentQuiz || !currentQuiz.questions || currentQuestionIndex >= currentQuiz.questions.length) {
    console.error("Invalid quiz data or question index")
    return
  }

  const question = currentQuiz.questions[currentQuestionIndex]
  console.log("Displaying question:", currentQuestionIndex + 1, question.question)

  // Update question text
  const questionTextElement = document.getElementById("questionText")
  if (questionTextElement) {
    questionTextElement.textContent = question.question
  }

  // Update question counter
  const currentQuestionElement = document.getElementById("currentQuestion")
  if (currentQuestionElement) {
    currentQuestionElement.textContent = currentQuestionIndex + 1
  }

  // Update progress bar
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100
  const progressBar = document.getElementById("progressBar")
  if (progressBar) {
    progressBar.style.width = progress + "%"
  }

  // Display answer options
  const optionsContainer = document.getElementById("answerOptions")
  if (optionsContainer) {
    optionsContainer.innerHTML = ""

    question.options.forEach((option, index) => {
      const label = document.createElement("label")
      label.className =
        "flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
      label.innerHTML = `
                <input type="radio" name="answer" value="${index}" class="mr-4">
                <span class="dark:text-gray-300">${option}</span>
            `
      optionsContainer.appendChild(label)
    })
  }

  // Update navigation buttons
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  if (prevBtn) {
    prevBtn.disabled = currentQuestionIndex === 0
  }

  if (nextBtn) {
    nextBtn.textContent = currentQuestionIndex === currentQuiz.questions.length - 1 ? "Finish" : "Next"
    nextBtn.disabled = false
  }

  // Reset timer
  timeLeft = 60
  updateTimerDisplay()
}

// Start timer - FIXED VERSION
function startTimer() {
  // Clear any existing timer
  if (quizTimer) {
    clearInterval(quizTimer)
  }

  quizTimer = setInterval(() => {
    timeLeft--
    updateTimerDisplay()

    if (timeLeft <= 0) {
      nextQuestion()
    }
  }, 1000)
}

// Update timer display
function updateTimerDisplay() {
  const timerElement = document.getElementById("timer")
  if (timerElement) {
    timerElement.textContent = timeLeft
  }
}

// Next question - FIXED VERSION
function nextQuestion() {
  if (!currentQuiz || !currentQuiz.questions) {
    console.error("No quiz data available")
    return
  }

  // Save current answer
  const selectedAnswer = document.querySelector('input[name="answer"]:checked')
  const answerValue = selectedAnswer ? Number.parseInt(selectedAnswer.value) : -1

  // Store answer
  userAnswers[currentQuestionIndex] = {
    questionIndex: currentQuestionIndex,
    userAnswer: answerValue,
    correct: currentQuiz.questions[currentQuestionIndex].correct,
    isCorrect: answerValue === currentQuiz.questions[currentQuestionIndex].correct,
  }

  // Update score
  if (answerValue === currentQuiz.questions[currentQuestionIndex].correct) {
    userScore++
  }

  // Update score display
  const scoreElement = document.getElementById("score")
  if (scoreElement) {
    scoreElement.textContent = userScore
  }

  // Move to next question or finish quiz
  if (currentQuestionIndex < currentQuiz.questions.length - 1) {
    currentQuestionIndex++
    displayQuestion()
  } else {
    finishQuiz()
  }
}

// Previous question - FIXED VERSION
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--
    displayQuestion()

    // Restore previous answer if exists
    const previousAnswer = userAnswers[currentQuestionIndex]
    if (previousAnswer && previousAnswer.userAnswer !== -1) {
      setTimeout(() => {
        const radio = document.querySelector(`input[name="answer"][value="${previousAnswer.userAnswer}"]`)
        if (radio) radio.checked = true
      }, 50)
    }
  }
}

// Finish quiz
function finishQuiz() {
  if (quizTimer) {
    clearInterval(quizTimer)
    quizTimer = null
  }

  // Save quiz result to history
  const quizResult = {
    name: currentQuiz.name,
    score: userScore,
    total: currentQuiz.questions.length,
    date: new Date().toISOString().split("T")[0],
    answers: userAnswers,
    userId: currentUser.id,
  }

  quizHistory.unshift(quizResult)
  localStorage.setItem("quizHistory", JSON.stringify(quizHistory))

  // Display results
  const finalScoreElement = document.getElementById("finalScore")
  if (finalScoreElement) {
    finalScoreElement.textContent = `${userScore}/${currentQuiz.questions.length}`
  }

  showPage("results")
}

// Show review of incorrect answers
function showReview() {
  const reviewContent = document.getElementById("reviewContent")
  if (!reviewContent) return

  reviewContent.innerHTML = ""

  const incorrectAnswers = userAnswers.filter((answer) => !answer.isCorrect)

  if (incorrectAnswers.length === 0) {
    reviewContent.innerHTML =
      '<p class="text-center text-gray-600 dark:text-gray-400">Great job! You got all answers correct!</p>'
  } else {
    incorrectAnswers.forEach((answer, index) => {
      const question = currentQuiz.questions[answer.questionIndex]
      const reviewItem = document.createElement("div")
      reviewItem.className = "bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
      reviewItem.innerHTML = `
                <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Question ${answer.questionIndex + 1}</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">${question.question}</p>
                <div class="space-y-2">
                    <p><span class="font-medium text-red-600">Your answer:</span> <span class="dark:text-gray-300">${answer.userAnswer === -1 ? "No answer" : question.options[answer.userAnswer]}</span></p>
                    <p><span class="font-medium text-green-600">Correct answer:</span> <span class="dark:text-gray-300">${question.options[question.correct]}</span></p>
                </div>
            `
      reviewContent.appendChild(reviewItem)
    })
  }

  showPage("review")
}

// Update profile display
function updateProfileDisplay() {
  if (currentUser) {
    const profileName = document.getElementById("profileName")
    const profileDisplayName = document.getElementById("profileDisplayName")
    const profileDisplayEmail = document.getElementById("profileDisplayEmail")

    if (profileName) profileName.textContent = currentUser.name
    if (profileDisplayName) profileDisplayName.textContent = currentUser.name
    if (profileDisplayEmail) profileDisplayEmail.textContent = currentUser.email

    // Filter quiz history for current user
    const userQuizHistory = quizHistory.filter((quiz) => quiz.userId === currentUser.id)

    // Update quiz history table
    const historyTable = document.getElementById("quizHistoryTable")
    if (historyTable) {
      historyTable.innerHTML = ""

      userQuizHistory.forEach((quiz) => {
        const row = document.createElement("tr")
        row.className = "hover:bg-gray-50 dark:hover:bg-gray-700"
        row.innerHTML = `
                    <td class="py-4 px-4 text-gray-900 dark:text-white">${quiz.name}</td>
                    <td class="py-4 px-4 text-blue-600 font-medium">${quiz.score}/${quiz.total}</td>
                    <td class="py-4 px-4 text-gray-600 dark:text-gray-400">${quiz.date}</td>
                `
        historyTable.appendChild(row)
      })
    }

    // Update activity feed
    const activityFeed = document.getElementById("activityFeed")
    if (activityFeed) {
      activityFeed.innerHTML = ""

      userQuizHistory.slice(0, 5).forEach((quiz, index) => {
        const activity = document.createElement("div")
        activity.className = "flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
        const daysAgo = index === 0 ? "2 days ago" : `${(index + 1) * 3} days ago`
        activity.innerHTML = `
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p class="text-gray-700 dark:text-gray-300">Completed <span class="font-medium">${quiz.name}</span> quiz with a score of ${quiz.score}/${quiz.total}</p>
                    <span class="text-gray-500 dark:text-gray-400 text-sm ml-auto">${daysAgo}</span>
                `
        activityFeed.appendChild(activity)
      })
    }
  }
}

// Switch profile tabs
function switchProfileTab(tabName) {
  const profileContent = document.getElementById("profile-content")
  const activityContent = document.getElementById("activity-content")
  const profileTab = document.getElementById("profile-tab")
  const activityTab = document.getElementById("activity-tab")

  if (!profileContent || !activityContent || !profileTab || !activityTab) return

  // Hide all content
  profileContent.classList.add("hidden")
  activityContent.classList.add("hidden")

  // Remove active styles from all tabs
  profileTab.classList.remove("border-blue-500", "text-blue-600")
  profileTab.classList.add("border-transparent", "text-gray-500")
  activityTab.classList.remove("border-blue-500", "text-blue-600")
  activityTab.classList.add("border-transparent", "text-gray-500")

  // Show selected content and activate tab
  if (tabName === "profile") {
    profileContent.classList.remove("hidden")
    profileTab.classList.add("border-blue-500", "text-blue-600")
    profileTab.classList.remove("border-transparent", "text-gray-500")
  } else if (tabName === "activity") {
    activityContent.classList.remove("hidden")
    activityTab.classList.add("border-blue-500", "text-blue-600")
    activityTab.classList.remove("border-transparent", "text-gray-500")
  }
}

// Theme and UI functions
function toggleTheme() {
  const html = document.documentElement
  const themeIcon = document.getElementById("themeIcon")

  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    if (themeIcon) themeIcon.className = "fas fa-moon text-lg"
    localStorage.setItem("theme", "light")
  } else {
    html.classList.add("dark")
    if (themeIcon) themeIcon.className = "fas fa-sun text-lg"
    localStorage.setItem("theme", "dark")
  }
}

function toggleProfileDropdown() {
  const dropdown = document.getElementById("profileDropdown")
  if (!dropdown) return

  dropdown.classList.toggle("hidden")

  // Close dropdown when clicking outside
  document.addEventListener("click", function closeDropdown(e) {
    if (!e.target.closest(".relative")) {
      dropdown.classList.add("hidden")
      document.removeEventListener("click", closeDropdown)
    }
  })
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden")
  }
}

function logout() {
  // Clear user session
  localStorage.removeItem("currentUser")
  currentUser = null

  // Clear any running timers
  if (quizTimer) {
    clearInterval(quizTimer)
    quizTimer = null
  }

  // Reset quiz variables
  currentQuiz = null
  currentQuestionIndex = 0
  userAnswers = []
  userScore = 0
  timeLeft = 60

  showMessage("You have been logged out successfully.", "success")

  // Redirect to login page after a short delay
  setTimeout(() => {
    showPage("login")
  }, 1000)
}

// Initialize app when page loads
document.addEventListener("DOMContentLoaded", init)
