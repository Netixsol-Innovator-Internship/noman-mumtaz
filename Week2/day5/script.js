// Array to store user accounts
let users = [
  {
    fullName: "user1",
    email: "user1@gmail.com",
    password: "ali@123",
    bio: "Avid quiz taker and trivia lover. Always up for a challenge!",
    quiz: [
      { name: "General Knowledge", score: 85, date: "2023-08-15" },
      { name: "Science Trivia", score: 70, date: "2023-08-10" },
      { name: "History Buff", score: 92, date: "2023-08-05" }
    ] 
  },
  {
    fullName: "user2",
    email: "user2@gmail.com",
    password: "ali@111",
    bio: "Avid quiz taker and trivia lover. Always up for a challenge!",
    quiz: [
      { name: "Movie Trivia", score: 78, date: "2023-07-22" },
      { name: "Geography Challenge", score: 88, date: "2023-07-15" }
    ]
  }
];

// Load users from localStorage
const loadUsers = () => {
  const storedUsers = localStorage.getItem('quizmasterUsers');
  if (storedUsers) {
    try {
      const parsedUsers = JSON.parse(storedUsers);
      users = [...users, ...parsedUsers.filter(newUser => 
        !users.some(existingUser => existingUser.email === newUser.email)
      )];
    } catch (e) {
      console.error("Failed to parse stored users", e);
    }
  }
};
loadUsers();

// Utility functions
function showSection(sectionId) {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'block';
    if (sectionId === 'profile') {
      displayUserProfile();
    }
  }
}

function showAuthedSection(sectionId) {
  if (!getCurrentUser()) {
    showSection('login');
    return;
  }
  showSection(sectionId);
}

function updateNavAuthState(isLoggedIn) {
  const profileNavItem = document.getElementById('profileNavItem');
  const logoutBtn = document.getElementById('logoutBtn');
  if (profileNavItem) profileNavItem.style.display = isLoggedIn ? 'block' : 'none';
  if (logoutBtn) logoutBtn.style.display = isLoggedIn ? 'block' : 'none';
}

function getCurrentUser() {
  const user = localStorage.getItem('quizmasterCurrentUser');
  return user ? JSON.parse(user) : null;
}

function logout() {
  localStorage.removeItem('quizmasterCurrentUser');
  showSection('login');
  updateNavAuthState(false);
}

// Sign Up Function
function handleSignUp(event) {
  event.preventDefault();
  
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate inputs
  if (!fullName || !email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  // Check if user exists
  if (users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
    alert('An account with this email already exists');
    return;
  }

  // Create new user
  const newUser = {
    fullName,
    email,
    password,
    bio: "Avid quiz taker and trivia lover. Always up for a challenge!",
    quiz: []
  };

  users.push(newUser);
  localStorage.setItem('quizmasterUsers', JSON.stringify(users));
  
  alert('Account created successfully! Please login.');
  showSection('login');
}

// Login Function
function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = users.find(user => user.email.toLowerCase() === email.toLowerCase());
  
  if (!user) {
    alert('No account found with this email');
    return;
  }

  if (user.password !== password) {
    alert('Incorrect password');
    return;
  }

  localStorage.setItem('quizmasterCurrentUser', JSON.stringify(user));
  showSection('home');
  updateNavAuthState(true);
}

// Profile display function
function displayUserProfile() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showSection('login');
    return;
  }

  const user = users.find(u => u.email === currentUser.email);
  if (!user) {
    alert('User not found');
    return;
  }

  // Update profile elements
  const nameElement = document.querySelector('#profile h2');
  const bioElement = document.querySelector('#profile .text-gray-500');
  const fullNameElement = document.querySelector('#profile .grid div:nth-child(1) p.font-medium');
  const emailElement = document.querySelector('#profile .grid div:nth-child(2) p.font-medium');
  const aboutBioElement = document.querySelector('#profile .space-y-6 p.font-medium');

  if (nameElement) nameElement.textContent = user.fullName;
  if (bioElement) bioElement.textContent = user.bio;
  if (fullNameElement) fullNameElement.textContent = user.fullName;
  if (emailElement) emailElement.textContent = user.email;
  if (aboutBioElement) aboutBioElement.textContent = user.bio;

  // Update quiz history
  const tbody = document.querySelector('#profile tbody');
  if (tbody) {
    tbody.innerHTML = '';
    
    if (user.quiz && user.quiz.length > 0) {
      user.quiz.forEach(quiz => {
        const row = document.createElement('tr');
        row.className = 'border-b hover:bg-gray-50';
        row.innerHTML = `
          <td class="py-3 px-6">${quiz.name || 'Quiz'}</td>
          <td class="py-3 px-6">${quiz.score || '0'}/100</td>
          <td class="py-3 px-6">${quiz.date || new Date().toISOString().split('T')[0]}</td>
        `;
        tbody.appendChild(row);
      });
    } else {
      const row = document.createElement('tr');
      row.className = 'border-b hover:bg-gray-50';
      row.innerHTML = `
        <td colspan="3" class="py-3 px-6 text-center text-gray-500">No quiz history yet</td>
      `;
      tbody.appendChild(row);
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Event listeners
  document.getElementById('signupForm')?.addEventListener('submit', handleSignUp);
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);

  // Check auth state
  if (getCurrentUser()) {
    showSection('home');
    updateNavAuthState(true);
  } else {
    showSection('login');
    updateNavAuthState(false);
  }
});

const q = [
  {
    category: "General Knowledge",
    questions: [
      {
        question: "Which is the largest ocean in the world?",
        options: [
          "Atlantic Ocean",
          "Pacific Ocean",
          "Indian Ocean",
          "Arctic Ocean",
        ],
        answer: "Pacific Ocean",
      },
      {
        question: "Who is known as the Father of Computers?",
        options: [
          "Alan Turing",
          "Charles Babbage",
          "Bill Gates",
          "John von Neumann",
        ],
        answer: "Charles Babbage",
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1944", "1939", "1950"],
        answer: "1945",
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
      },
      {
        question: "Which currency is used in Japan?",
        options: ["Yuan", "Dollar", "Yen", "Won"],
        answer: "Yen",
      },
      {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City",
      },
      {
        question: "Which language has the most native speakers?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        answer: "Mandarin",
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile",
      },
      {
        question: "Which is the tallest mountain in the world?",
        options: ["K2", "Everest", "Kangchenjunga", "Makalu"],
        answer: "Everest",
      },
      {
        question: "What is the national flower of Pakistan?",
        options: ["Rose", "Tulip", "Jasmine", "Lily"],
        answer: "Jasmine",
      },
    ],
  },
  {
    category: "Science",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        options: ["H", "O2", "H2O", "HO2"],
        answer: "H2O",
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"],
        answer: "300,000 km/s",
      },
      {
        question: "Which part of the cell contains genetic material?",
        options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        answer: "Nucleus",
      },
      {
        question: "Which is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "Skin",
      },
      {
        question: "What is HCl commonly known as?",
        options: [
          "Sulfuric Acid",
          "Hydrochloric Acid",
          "Nitric Acid",
          "Acetic Acid",
        ],
        answer: "Hydrochloric Acid",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: "Mercury",
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["100°C", "90°C", "80°C", "120°C"],
        answer: "100°C",
      },
      {
        question: "What type of blood cells fight infection?",
        options: [
          "Red Blood Cells",
          "White Blood Cells",
          "Platelets",
          "Plasma",
        ],
        answer: "White Blood Cells",
      },
    ],
  },
  {
    category: "History",
    questions: [
      {
        question: "Who was the first President of the United States?",
        options: [
          "Thomas Jefferson",
          "George Washington",
          "Abraham Lincoln",
          "John Adams",
        ],
        answer: "George Washington",
      },
      {
        question: "When did the First World War begin?",
        options: ["1914", "1918", "1939", "1920"],
        answer: "1914",
      },
      {
        question: "Who discovered America?",
        options: [
          "Christopher Columbus",
          "Vasco da Gama",
          "Ferdinand Magellan",
          "Marco Polo",
        ],
        answer: "Christopher Columbus",
      },
      {
        question: "In which year was Pakistan founded?",
        options: ["1945", "1947", "1950", "1939"],
        answer: "1947",
      },
      {
        question: "Who was the founder of the Mughal Empire?",
        options: ["Akbar", "Babur", "Aurangzeb", "Humayun"],
        answer: "Babur",
      },
      {
        question: "Where did the Industrial Revolution begin?",
        options: ["USA", "France", "Germany", "Britain"],
        answer: "Britain",
      },
      {
        question: "Which wall divided Berlin from 1961 to 1989?",
        options: ["Great Wall", "Berlin Wall", "Iron Curtain", "Cold War Wall"],
        answer: "Berlin Wall",
      },
      {
        question: "Who was known as the Iron Lady?",
        options: [
          "Indira Gandhi",
          "Margaret Thatcher",
          "Angela Merkel",
          "Golda Meir",
        ],
        answer: "Margaret Thatcher",
      },
      {
        question: "Which empire built the Colosseum?",
        options: [
          "Roman Empire",
          "Greek Empire",
          "Ottoman Empire",
          "Persian Empire",
        ],
        answer: "Roman Empire",
      },
      {
        question: "When did the Titanic sink?",
        options: ["1912", "1915", "1905", "1920"],
        answer: "1912",
      },
    ],
  },
  {
    category: "Literature",
    questions: [
      {
        question: "Who wrote 'Hamlet'?",
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Jane Austen",
          "Mark Twain",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "What is the first book of the Bible?",
        options: ["Exodus", "Genesis", "Psalms", "Matthew"],
        answer: "Genesis",
      },
      {
        question: "Who is the author of 'Pride and Prejudice'?",
        options: [
          "Charlotte Brontë",
          "Jane Austen",
          "Emily Brontë",
          "George Eliot",
        ],
        answer: "Jane Austen",
      },
      {
        question: "What is the longest novel ever written?",
        options: [
          "War and Peace",
          "In Search of Lost Time",
          "Les Misérables",
          "Don Quixote",
        ],
        answer: "In Search of Lost Time",
      },
      {
        question: "Who created Sherlock Holmes?",
        options: [
          "Agatha Christie",
          "Arthur Conan Doyle",
          "Jules Verne",
          "Ian Fleming",
        ],
        answer: "Arthur Conan Doyle",
      },
      {
        question: "What is the main language of the 'Harry Potter' series?",
        options: ["Spanish", "English", "French", "German"],
        answer: "English",
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles", "Plato"],
        answer: "Homer",
      },
      {
        question: "Which novel starts with 'Call me Ishmael'?",
        options: [
          "Moby Dick",
          "The Old Man and the Sea",
          "The Great Gatsby",
          "Robinson Crusoe",
        ],
        answer: "Moby Dick",
      },
      {
        question: "What is the genre of 'The Hobbit'?",
        options: ["Science Fiction", "Fantasy", "Romance", "Drama"],
        answer: "Fantasy",
      },
      {
        question: "Who wrote 'Animal Farm'?",
        options: [
          "George Orwell",
          "Aldous Huxley",
          "Ernest Hemingway",
          "F. Scott Fitzgerald",S
        ],
        answer: "George Orwell",
      },
    ],
  },
  {
    category: "Mathematics",
    questions: [
      {
        question: "What is 7 × 8?",
        options: ["54", "56", "58", "60"],
        answer: "56",
      },
      {
        question: "What is the square root of 81?",
        options: ["8", "9", "10", "7"],
        answer: "9",
      },
      {
        question: "What is 12 ÷ 4?",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
      {
        question: "What is 5²?",
        options: ["10", "20", "25", "30"],
        answer: "25",
      },
      {
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        answer: "30",
      },
      {
        question: "What is 0.5 × 0.2?",
        options: ["0.01", "0.1", "0.5", "1"],
        answer: "0.1",
      },
      {
        question: "What is the value of π (approx)?",
        options: ["2.14", "3.14", "4.14", "5.14"],
        answer: "3.14",
      },
      {
        question: "What is 100 ÷ 5?",
        options: ["15", "20", "25", "30"],
        answer: "20",
      },
      {
        question: "What is 45 + 55?",
        options: ["90", "100", "110", "120"],
        answer: "100",
      },
      {
        question: "What is 144 ÷ 12?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
    ],
  },
  {
    category: "Geography",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Rome", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa",
      },
      {
        question: "What is the largest country by area?",
        options: ["USA", "China", "Russia", "Canada"],
        answer: "Russia",
      },
      {
        question: "Which country has the most population?",
        options: ["India", "China", "USA", "Indonesia"],
        answer: "China",
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa",
      },
      {
        question: "Which river flows through Egypt?",
        options: ["Amazon", "Nile", "Danube", "Ganges"],
        answer: "Nile",
      },
      {
        question: "Which is the smallest continent?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        answer: "Australia",
      },
      {
        question: "Which ocean is to the east of Africa?",
        options: ["Atlantic", "Indian", "Pacific", "Southern"],
        answer: "Indian",
      },
      {
        question: "What is the capital of Italy?",
        options: ["Milan", "Rome", "Venice", "Florence"],
        answer: "Rome",
      },
      {
        question: "Which country is called the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        answer: "Japan",
      },
    ],
  },
  {
    category: "Sports",
    questions: [
      {
        question: "How many players are on a football (soccer) team?",
        options: ["9", "10", "11", "12"],
        answer: "11",
      },
      {
        question: "Which sport uses a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
        answer: "Badminton",
      },
      {
        question: "How many rings are there in the Olympic logo?",
        options: ["4", "5", "6", "7"],
        answer: "5",
      },
      {
        question: "In which sport would you perform a slam dunk?",
        options: ["Football", "Basketball", "Volleyball", "Rugby"],
        answer: "Basketball",
      },
      {
        question: "What is the national sport of Pakistan?",
        options: ["Cricket", "Hockey", "Football", "Squash"],
        answer: "Hockey",
      },
      {
        question: "How many players are on a cricket team?",
        options: ["10", "11", "12", "13"],
        answer: "11",
      },
      {
        question: "Which country hosts Wimbledon?",
        options: ["USA", "Australia", "France", "UK"],
        answer: "UK",
      },
      {
        question: "Which sport is known as 'The Gentleman's Game'?",
        options: ["Football", "Cricket", "Tennis", "Golf"],
        answer: "Cricket",
      },
      {
        question: "How long is an Olympic swimming pool?",
        options: ["25m", "50m", "75m", "100m"],
        answer: "50m",
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "France", "Germany", "Argentina"],
        answer: "France",
      },
    ],
  },
  {
    category: "Technology",
    questions: [
      {
        question: "What does CPU stand for?",
        options: [
          "Central Process Unit",
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Peripheral Unit",
        ],
        answer: "Central Processing Unit",
      },
      {
        question: "Which company developed the iPhone?",
        options: ["Google", "Apple", "Microsoft", "Samsung"],
        answer: "Apple",
      },
      {
        question: "What does HTTP stand for?",
        options: [
          "Hyper Transfer Text Protocol",
          "Hypertext Transfer Protocol",
          "High Transfer Text Protocol",
          "Hyper Transfer Tech Protocol",
        ],
        answer: "Hypertext Transfer Protocol",
      },
      {
        question: "Which programming language is used for Android apps?",
        options: ["Java", "Swift", "C#", "Kotlin"],
        answer: "Java",
      },
      {
        question: "Who founded Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        answer: "Bill Gates",
      },
      {
        question: "What does AI stand for?",
        options: [
          "Automatic Input",
          "Artificial Intelligence",
          "Applied Intelligence",
          "Advanced Interface",
        ],
        answer: "Artificial Intelligence",
      },
      {
        question: "Which company created Windows OS?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        answer: "Microsoft",
      },
      {
        question: "What does USB stand for?",
        options: [
          "Universal Serial Bus",
          "Universal System Board",
          "United Serial Bus",
          "Uniform System Bus",
        ],
        answer: "Universal Serial Bus",
      },
      {
        question: "What is the full form of HTML?",
        options: [
          "Hyper Transfer Markup Language",
          "Hypertext Markup Language",
          "High Text Markup Language",
          "Hyper Tool Markup Language",
        ],
        answer: "Hypertext Markup Language",
      },
      {
        question: "Which social media platform is owned by Meta?",
        options: ["Twitter", "Instagram", "Snapchat", "TikTok"],
        answer: "Instagram",
      },
    ],
  },
];


// Your quiz data (q array) goes here...

let currentQuestionIndex = 0;
let selectedAnswers = [];

function renderQuestion(category) {
  const container = document.getElementById("boxContainer");
  const question = category.questions[currentQuestionIndex];

  container.innerHTML = `
    <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 class="text-xl font-semibold">${question.question}</h2>
      <form id="quizForm" class="space-y-3">
        ${question.options.map((opt, i) => `
          <label class="flex items-center border rounded-md p-3 cursor-pointer hover:bg-gray-50">
            <input type="radio" name="answer" value="${opt}" class="mr-3" ${selectedAnswers[currentQuestionIndex] === opt ? 'checked' : ''} />
            ${opt}
          </label>
        `).join('')}
      </form>

      <div class="flex justify-between pt-4">
        <button onclick="prevQuestion()" class="px-4 py-2 bg-gray-200 rounded">Previous</button>
        <button onclick="nextQuestion()" class="px-4 py-2 bg-indigo-600 text-white rounded">Next</button>
      </div>
    </div>
  `;
}

// Handle next and previous
function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < q[0].questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(q[0]);
  } else {
    alert("Quiz finished!");
    console.log("Selected answers:", selectedAnswers);
    // Optionally: show results here
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(q[0]);
  }
}

// Save the selected radio button answer
function saveAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    selectedAnswers[currentQuestionIndex] = selectedOption.value;
  }
}

// Start the quiz
renderQuestion(q[0]); // assuming you're passing one category at a time
