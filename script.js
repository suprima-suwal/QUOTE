// Quote Data
const quotes = {
    Education: [
        "Education is the most powerful weapon which you can use to change the world. -Nelson Mandela",
        "A good education is a foundation for a better future. -Elizabeth Warren",
        "Education is not preparation for life, Education is life itself. -John Dewey"
    ],
    Happiness: [
        "Happiness is when what you think, what you say, and what you do are in harmony. -Mahatma Gandhi",
        "The most important thing is to enjoy your life to be happy -it's al that matters. -Aurdey", 
        "The best wat to cheer yourself up is to cheer someone else up. -Mark Twain"
    ],
    Time: [
        "Time and good friends are two thing that become more valuable the older you get. -Unknown",
        "Time is the wisest counselor of all. -Pericles",
        "All great achievements require time. -Alan Lakein"
    ]
};

let currentCategory = "Education";
let currentIndex = 0;
const quoteText = document.getElementById("quote");
const categorySelect = document.getElementById("category-select");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');

const increaseFontBtn = document.getElementById("increase-font");
const decreaseFontBtn = document.getElementById("decrease-font");

// Update Quote Display
function updateQuote() {
    quoteText.textContent = quotes[currentCategory][currentIndex];
}

// Next Quote
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes[currentCategory]?.length;
    updateQuote();
});

// Previous Quote
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + quotes[currentCategory]?.length) % quotes[currentCategory].length;
    updateQuote();
});

// Random Quote
randomBtn.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory]?.length);
    updateQuote();
});

// Category Change
categorySelect.addEventListener("change", () => {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    updateQuote();
});

// Font Size Adjustment
increaseFontBtn.addEventListener("click", () => {
    let currentFontSize = parseFloat(window.getComputedStyle(quoteText, null).getPropertyValue('font-size'));
    quoteText.style.fontSize = (currentFontSize + 2) + "px";
});

decreaseFontBtn.addEventListener("click", () => {
    let currentFontSize = parseFloat(window.getComputedStyle(quoteText, null).getPropertyValue('font-size'));
    quoteText.style.fontSize = (currentFontSize - 2) + "px";
});

// Dark Mode Toggle
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        // Enable dark mode
        document.body.classList.add('dark');
        themeLabel.textContent = 'Light Mode';  // Show 'Light Mode' when in dark mode
    } else {
        // Enable light mode
        document.body.classList.remove('dark');
        themeLabel.textContent = 'Dark Mode';  // Show 'Dark Mode' when in light mode
    }
});

// Initial quote load
updateQuote();
