// DOM Elements
const landingPage = document.getElementById('landing-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const tipsPage = document.getElementById('tips-page');
const aboutPage = document.getElementById('about-page');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const gotoTipsBtn = document.getElementById('goto-tips-btn');
const backHomeBtn = document.getElementById('back-home-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');

const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

const tipsContent = document.getElementById('tips-content');
const videoContainer = document.getElementById('video-container');
const songsContainer = document.getElementById('songs-container');

// Calendar Elements
const calendarPage = document.getElementById('calendar-page');
const calendarGrid = document.getElementById('calendar-grid');
const monthYearText = document.getElementById('calendar-month-year');
const streakCount = document.getElementById('streak-count');
const thoughtText = document.getElementById('thought-of-the-day');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

// FeelChat Elements
const feelChatPage = document.getElementById('feelchat-page');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat-btn');

// Fresh Up Elements
const freshUpPage = document.getElementById('freshup-page');
const memoryGrid = document.getElementById('memory-grid');
const gameStartScreen = document.getElementById('game-start-screen');
const gameBoardContainer = document.getElementById('game-board-container');
const gameWinScreen = document.getElementById('game-win-screen');
const gameMovesText = document.getElementById('game-moves');
const gameTimerText = document.getElementById('game-timer');
const startGameBtn = document.getElementById('start-game-btn');
const resetGameBtn = document.getElementById('reset-game-btn');
const playAgainBtns = document.querySelectorAll('.play-again-btn');
const finalTimeText = document.getElementById('final-time');
const finalMovesText = document.getElementById('final-moves');

// Nav Links
const navHome = document.getElementById('nav-home');
const navTips = document.getElementById('nav-tips');
const navCalendar = document.getElementById('nav-calendar');
const navFeelChat = document.getElementById('nav-feelchat');
const navFreshUp = document.getElementById('nav-freshup');
const navAbout = document.getElementById('nav-about');

// Questions Data (Simple & Daily Life)
const questions = [
    {
        question: "👋 Hi there! How was your sleep last night?",
        options: [
            { text: "😴 I barely slept at all.", mood: "tired" },
            { text: "🛌 It was okay, but I need more.", mood: "bored" },
            { text: "🔥 I couldn't sleep, mind was racing!", mood: "angry" },
            { text: "✨ Slept like a baby!", mood: "happy" }
        ]
    },
    {
        question: "🥘 What do you feel like eating right now?",
        options: [
            { text: "🥗 Something fresh and healthy.", mood: "happy" },
            { text: "🍔 Comfort food, lots of it.", mood: "sad" },
            { text: "☕ Just coffee. Strong coffee.", mood: "tired" },
            { text: "😐 I don't even have an appetite.", mood: "bored" }
        ]
    },
    {
        question: "💢 Someone cuts you off in traffic (or walking). You feel...",
        options: [
            { text: "🤬 EXTREMELY annoyed!", mood: "angry" },
            { text: "😢 Why does this happen to me...", mood: "sad" },
            { text: "🥱 Whatever, I don't care.", mood: "bored" },
            { text: "🚶‍♂️ I just let it slide.", mood: "happy" }
        ]
    },
    {
        question: "📅 Look at your to-do list for today. Thoughts?",
        options: [
            { text: "😫 I can't do this right now.", mood: "tired" },
            { text: "😤 Just looking at it makes me mad.", mood: "angry" },
            { text: "😑 It's just the same old thing.", mood: "bored" },
            { text: "💪 Let's get it done!", mood: "happy" }
        ]
    },
    {
        question: "🌧️ It starts raining heavily outside...",
        options: [
            { text: "😭 Great, now my day is ruined.", mood: "sad" },
            { text: "💤 Perfect weather for a nap.", mood: "tired" },
            { text: "😒 Just another inconvenience.", mood: "angry" },
            { text: "🏡 Cozy! I love the rain.", mood: "happy" }
        ]
    },
    {
        question: "📺 You have 1 hour of free time. You choose to...",
        options: [
            { text: "😐 Stare at the ceiling.", mood: "bored" },
            { text: "📺 Rewatch a show I've seen 100 times.", mood: "sad" },
            { text: "🎮 Play a game to vent active energy.", mood: "angry" },
            { text: "🎬 Watch something fun or interesting!", mood: "happy" }
        ]
    },
    {
        question: "🙃 In one word, how is your energy level?",
        options: [
            { text: "⚡ High!", mood: "happy" },
            { text: "📉 Low...", mood: "tired" },
            { text: "🌪️ Chaotic.", mood: "angry" },
            { text: "🧊 Flat.", mood: "bored" }
        ]
    }
];

// Mood Results Data
const moodResults = {
    happy: {
        title: "✨ Happy & Content ✨",
        icon: "🥰",
        desc: "You're doing great! You have a positive vibe today. Keep smiling!"
    },
    sad: {
        title: "💙 Feeling Sad 💙",
        icon: "🥺",
        desc: "It seems like a tough day. Be kind to yourself, it's okay to let it out."
    },
    angry: {
        title: "🔥 Frustrated / Angry 🔥",
        icon: "😤",
        desc: "You seem a bit heated. Take a deep breath, maybe go for a walk or vent it out safely."
    },
    bored: {
        title: "😑 Bored / Indifferent 😑",
        icon: "😶",
        desc: "Feeling a bit 'blah'? Maybe try something new today just for fun."
    },
    tired: {
        title: "😴 Tired / Exhausted 😴",
        icon: "💤",
        desc: "You are running low on battery. Prioritize rest today. You deserve it."
    }
};

// Tips Data
const moodTips = {
    happy: {
        points: [
            "Keep the <b>momentum going</b> by doing something creative! 🎨",
            "Share your <span class='highlight'>positive energy</span> with a friend today. 📞",
            "Practice <b>gratitude</b>: list 3 things that made you smile. 📝",
            "<b>Task:</b> Draw a quick smiley face doodle version of yourself! ✏️",
            "<b>Task:</b> Send a completely random 'Thank You' text to someone. 📱"
        ],
        videos: [
            { title: "Watch this to feel better", id: "_1OfB3DGwpA" },
            { title: "Power of Humanity (Animated)", id: "domCDwp5u3I" }
        ],
        songs: [
            { title: "Buddhu Sa Mann - Aesthetic", id: "i0AUEswUayo" },
            { title: "Liggi - Ritviz", id: "6BYIKEH0RCQ" }
        ]
    },
    sad: {
        points: [
            "Allow yourself to <b>feel the emotion</b>; it's okay. 💙",
            "Drink some <span class='highlight'>warm tea</span> and wrap in a blanket. ☕",
            "Listen to <b>comforting music</b> that feels like a hug. 🎵",
            "<b>Task:</b> Write down 5 things you are excited about for the future. 🌈",
            "<b>Task:</b> Clean/Organize one tiny drawer or shelf right now. 🧹"
        ],
        videos: [
            { title: "BE FEARLESS - Sandeep Maheshwari", id: "Zf2RzRgD3t8" },
            { title: "Power of Humanity (Animated)", id: "domCDwp5u3I" }
        ],
        songs: [
            { title: "Pick Myself Up Again", id: "OeNxqdCeV9A" },
            { title: "Relaxing Vibe", id: "F77v41jbOYs" }
        ]
    },
    angry: {
        points: [
            "Take <b>5 deep breaths</b>: inhale peace, exhale fire. 🌬️",
            "Try some <span class='highlight'>physical movement</span>, like a quick walk. 🚶‍♂️",
            "Listen to <b>calming waves</b> to cool down. 🌊",
            "<b>Task:</b> Scribble as hard as you can on a piece of paper for 1 minute! 🖍️",
            "<b>Task:</b> Do 20 jumping jacks as fast as possible to vent! ⚡"
        ],
        videos: [
            { title: "10-Min Pilates for Core Strength", id: "iYjmXxlcm4U" },
            { title: "Sufjan Stevens - Chicago", id: "Pfbnc-u8Ta4" }
        ],
        songs: [
            { title: "Love You Zindagi - Dear Zindagi", id: "bw7bVpI5VcM" },
            { title: "Aal Izz Well - 3 Idiots", id: "7PzwOiW8-n0" }
        ]
    },
    bored: {
        points: [
            "Switch up your <b>environment</b>; move to a different room. 🚪",
            "Try a <span class='highlight'>mini-adventure</span> at a new bookstore. ☕",
            "Learn one <b>new random fact</b> online today. 🧠",
            "<b>Task:</b> Find 3 objects nearby and find 3 unique things about them. 🔍",
            "<b>Task:</b> Try to make an origami crane with 5 mins tutorial. 🦢"
        ],
        videos: [
            { title: "Amazing Facts About Space", id: "xS87v_OLeTM" },
            { title: "Eating Ultimate Indian Street Food", id: "rvJPQam-NYM" }
        ],
        songs: [
            { title: "Gallan Goodiyaan - Dil Dhadakne Do", id: "jCEdTq3j-0U" },
            { title: "London Thumakda - Queen", id: "nvgT2P5fM6U" }
        ]
    },
    tired: {
        points: [
            "Give yourself <b>permission to rest</b> without guilt. 💤",
            "Try a <span class='highlight'>15-minute power nap</span> to refresh. ⏰",
            "Stay <b>hydrated</b> and eat a small, nourishing snack. 🍎",
            "<b>Task:</b> Splash ice-cold water on your face 3 times. 🧊",
            "<b>Task:</b> Set a timer for 10 mins and sit in complete silence. 10 mins silence. 10 mins silence. 📵"
        ],
        videos: [
            { title: "BE FEARLESS - Sandeep Maheshwari", id: "Zf2RzRgD3t8" },
            { title: "Power of Humanity (Animated)", id: "domCDwp5u3I" }
        ],
        songs: [
            { title: "Pick Myself Up Again", id: "OeNxqdCeV9A" },
            { title: "Relaxing Vibe", id: "F77v41jbOYs" }
        ]
    }
};

// Motivational Thoughts
const motivationalThoughts = [
    "Your limiting believe is the only thing that holds you back. 🌟",
    "Small progress is still progress. Keep going! 🚀",
    "You don't have to be perfect to be amazing. ✨",
    "Breathe. It's just a bad day, not a bad life. 🌬️",
    "The way you speak to yourself matters. Be kind. 🌸",
    "Your potential is endless. Do what you love. 🎨",
    "Believe in the person you are becoming. 🦋",
    "Don't stop until you're proud. 💪",
    "One day at a time, one step at a time. 👣",
    "Your mental health is a priority. Your happiness is an essential. 🧠"
];

// State
let currentQuestionIndex = 0;
let userScores = {};
let detectedMood = null;
let calendarDate = new Date(); // Current month being viewed
let moodHistory = JSON.parse(localStorage.getItem('motionMoodHistory')) || {};

// Memory Game State
const memoryEmojis = ['😊', '😂', '🥳', '😎', '🥺', '😭', '😡', '🥱'];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;
let canFlip = true;

// Functions
function initGame() {
    currentQuestionIndex = 0;
    userScores = {};
    detectedMood = null;
    showSection(landingPage);
    updateNavActive('nav-home');
}

function startGame() {
    showSection(quizPage);
}

function showSection(section) {
    [landingPage, quizPage, resultPage, tipsPage, calendarPage, feelChatPage, freshUpPage, aboutPage].forEach(sec => {
        if (sec) {
            sec.classList.remove('active-section');
            sec.classList.add('hidden-section');
        }
    });
    section.classList.remove('hidden-section');
    section.classList.add('active-section');
}

function updateNavActive(id) {
    [navHome, navTips, navCalendar, navFeelChat, navFreshUp, navAbout].forEach(link => {
        if (link) link.classList.remove('active');
    });
    const activeLink = document.getElementById(id);
    if (activeLink) activeLink.classList.add('active');
}

// Memory Game Logic
function startMemoryGame() {
    gameStartScreen.classList.add('hidden-section');
    gameWinScreen.classList.add('hidden-section');
    gameBoardContainer.classList.remove('hidden-section');

    resetGame();
}

function resetGame() {
    clearInterval(timerInterval);
    memoryGrid.innerHTML = '';
    cards = [...memoryEmojis, ...memoryEmojis];
    cards.sort(() => Math.random() - 0.5);

    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    timer = 0;
    canFlip = true;

    gameMovesText.textContent = moves;
    gameTimerText.textContent = '00:00';

    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.emoji = emoji;
        card.dataset.index = index;

        card.innerHTML = `
            <div class="card-face card-back"></div>
            <div class="card-face card-front">${emoji}</div>
        `;

        card.addEventListener('click', () => flipCard(card));
        memoryGrid.appendChild(card);
    });

    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        const mins = String(Math.floor(timer / 60)).padStart(2, '0');
        const secs = String(timer % 60).padStart(2, '0');
        gameTimerText.textContent = `${mins}:${secs}`;
    }, 1000);
}

function flipCard(card) {
    if (!canFlip || flippedCards.includes(card) || card.classList.contains('matched') || flippedCards.length >= 2) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        gameMovesText.textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    canFlip = false;
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.emoji === card2.dataset.emoji;

    if (isMatch) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        flippedCards = [];
        canFlip = true;

        if (matchedPairs === memoryEmojis.length) {
            setTimeout(winGame, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            canFlip = true;
        }, 1000);
    }
}

function winGame() {
    clearInterval(timerInterval);
    finalTimeText.textContent = gameTimerText.textContent;
    finalMovesText.textContent = moves;

    gameBoardContainer.classList.add('hidden-section');
    gameWinScreen.classList.remove('hidden-section');
}

// FeelChat Logic
function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(isUser ? 'user-message' : 'ai-message');
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(userText) {
    const input = userText.toLowerCase();

    const responses = [
        { keywords: ['happy', 'good', 'great', 'awesome'], reply: "That makes me so happy to hear! Keep that beautiful energy glowing. 🌟" },
        { keywords: ['sad', 'bad', 'upset', 'low'], reply: "I'm so sorry you're feeling this way. I'm right here with you. It's okay to feel this way. 🫂" },
        { keywords: ['angry', 'mad', 'frustrated'], reply: "I can feel your frustration. Take a deep breath with me. I'm listening to everything you want to vent. 🌬️" },
        { keywords: ['tired', 'exhausted', 'sleepy'], reply: "You've worked so hard today. You deserve a soft, peaceful rest. 🏠💤" },
        { keywords: ['bored', 'nothing to do'], reply: "Sometimes doing nothing is exactly what our soul needs. Or we could find a tiny spark of joy together? ✨" },
        { keywords: ['hello', 'hi', 'hey'], reply: "Hey friend! I was just waiting to hear from you. How has your heart been today? 😊" },
        { keywords: ['love', 'thank'], reply: "Aww, you're so sweet! I'm just happy I can be here for you. ❤️" }
    ];

    const matched = responses.find(r => r.keywords.some(k => input.includes(k)));

    const defaultReplies = [
        "I hear you. Tell me more about that. I'm listening peacefully... 🌸",
        "Thank you for sharing that with me. It takes courage to speak up. ✨",
        "I'm here for you. You don't have to carry it all alone. 🫂",
        "That's interesting... how does that make you feel deep down? 🍃"
    ];

    return matched ? matched.reply : defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, true);
    chatInput.value = '';

    // AI thinks for a small bit
    setTimeout(() => {
        const reply = getAIResponse(text);
        addMessage(reply, false);
    }, 1000);
}

// Calendar Logic
function saveMood(mood) {
    const today = new Date().toISOString().split('T')[0];
    const icon = moodResults[mood].icon;
    moodHistory[today] = icon;
    localStorage.setItem('motionMoodHistory', JSON.stringify(moodHistory));
    updateStreak();
}

function updateStreak() {
    let streak = 0;
    let checkDate = new Date();

    while (true) {
        const dateStr = checkDate.toISOString().split('T')[0];
        if (moodHistory[dateStr]) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    streakCount.textContent = streak;
}

function renderCalendar() {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();

    monthYearText.textContent = calendarDate.toLocaleDateString('default', { month: 'long', year: 'numeric' });
    calendarGrid.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Empty cells
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day', 'empty');
        calendarGrid.appendChild(emptyCell);
    }

    // Days cells
    const today = new Date().toISOString().split('T')[0];
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        if (dateStr === today) dayCell.classList.add('today');

        dayCell.innerHTML = `<span class="day-num">${day}</span>`;
        if (moodHistory[dateStr]) {
            dayCell.innerHTML += `<div class="day-mood">${moodHistory[dateStr]}</div>`;
        }

        calendarGrid.appendChild(dayCell);
    }

    // Show thought
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    thoughtText.textContent = `"${motivationalThoughts[dayOfYear % motivationalThoughts.length]}"`;
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;

    currentQuestion.options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option.text;
        btn.onclick = () => handleAnswer(option.mood);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(mood) {
    userScores[mood] = (userScores[mood] || 0) + 1;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let topMood = null;
    let maxScore = -1;

    for (const [mood, score] of Object.entries(userScores)) {
        if (score > maxScore) {
            maxScore = score;
            topMood = mood;
        }
    }

    detectedMood = topMood || "bored";
    const result = moodResults[detectedMood];

    resultIcon.textContent = result.icon;
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.desc;

    progressFill.style.width = '100%';
    saveMood(detectedMood);
    showSection(resultPage);
}

function generateTips() {
    const videoSuggestions = document.querySelectorAll('.video-suggestions');

    if (!detectedMood) {
        // If they come here without taking the quiz
        tipsContent.innerHTML = "<p style='text-align:center;'>Please complete the <span class='highlight'>Mood Quiz</span> first to see personalized tips! 😊</p>";
        videoContainer.innerHTML = "";
        songsContainer.innerHTML = "";

        // Hide sections
        videoSuggestions.forEach(sec => sec.style.display = 'none');
        return;
    }

    // Show sections if mood detected
    videoSuggestions.forEach(sec => sec.style.display = 'block');

    const tipsData = moodTips[detectedMood];

    // Generate Bullet Points
    let tipsHtml = "<ul class='tips-list'>";
    tipsData.points.forEach(point => {
        tipsHtml += `<li class='tip-item'>• ${point}</li>`;
    });
    tipsHtml += "</ul>";
    tipsContent.innerHTML = tipsHtml;

    // Generate Videos
    let videoHtml = "";
    tipsData.videos.forEach(vid => {
        videoHtml += `
            <a href="https://www.youtube.com/watch?v=${vid.id}" target="_blank" class="video-card">
                <div class="video-thumbnail" style="background-image: url('https://img.youtube.com/vi/${vid.id}/hqdefault.jpg')"></div>
                <div class="video-title">${vid.title}</div>
            </a>
        `;
    });
    videoContainer.innerHTML = videoHtml;

    // Generate Songs
    let songHtml = "";
    tipsData.songs.forEach(song => {
        songHtml += `
            <a href="https://www.youtube.com/watch?v=${song.id}" target="_blank" class="video-card">
                <div class="video-thumbnail" style="background-image: url('https://img.youtube.com/vi/${song.id}/hqdefault.jpg')"></div>
                <div class="video-title">${song.title}</div>
            </a>
        `;
    });
    songsContainer.innerHTML = songHtml;
}

// Event Listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', initGame);

gotoTipsBtn.addEventListener('click', () => {
    generateTips();
    showSection(tipsPage);
    updateNavActive('nav-tips');
});

backHomeBtn.addEventListener('click', initGame);

// Navigation Listeners
navHome.addEventListener('click', (e) => {
    e.preventDefault();
    initGame();
});

navTips.addEventListener('click', (e) => {
    e.preventDefault();
    generateTips();
    showSection(tipsPage);
    updateNavActive('nav-tips');
});

navCalendar.addEventListener('click', (e) => {
    e.preventDefault();
    renderCalendar();
    updateStreak();
    showSection(calendarPage);
    updateNavActive('nav-calendar');
});

prevMonthBtn.addEventListener('click', () => {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    renderCalendar();
});

navFeelChat.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(feelChatPage);
    updateNavActive('nav-feelchat');
});

sendChatBtn.addEventListener('click', handleSendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

navFreshUp.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(freshUpPage);
    updateNavActive('nav-freshup');

    // Reset to start screen when navigating
    gameStartScreen.classList.remove('hidden-section');
    gameBoardContainer.classList.add('hidden-section');
    gameWinScreen.classList.add('hidden-section');
});

startGameBtn.addEventListener('click', startMemoryGame);
resetGameBtn.addEventListener('click', resetGame);
playAgainBtns.forEach(btn => btn.addEventListener('click', startMemoryGame));

navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(aboutPage);
    updateNavActive('nav-about');
});

// For back-to-home buttons in placeholder pages
document.querySelectorAll('.back-to-home').forEach(btn => {
    btn.addEventListener('click', initGame);
});

// Init
initGame();
loadQuestion();
updateStreak();
