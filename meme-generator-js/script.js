function showMeme() {
    // Value is a string representing image URL
    const randomMemeUrl = getRandomData('memes');
    const contentBar = document.querySelector('.content');

    if (contentBar.children.length > 0) {clearAll();}

    const imageElement = document.createElement('img');
    addAttribute('src', randomMemeUrl, imageElement);

    contentBar.appendChild(imageElement);
}

function showJoke() {
    // Value is a string representing the joke
    const randomJokeText = getRandomData('jokes');
    const contentBar = document.querySelector('.content');

    if (contentBar.children.length > 0) {clearAll();}

    contentBar.appendChild(newTextNode(randomJokeText, 'p'));
  }

function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData('quotes');
    const contentBar = document.querySelector('.content');

    if (contentBar.children.length > 0) {clearAll();}

    contentBar.appendChild(newTextNode(randomQuote.quote, 'h4'));
    contentBar.appendChild(newTextNode(randomQuote.author, 'p'));

}

function newTextNode(text, elementType) {
    const textElement = document.createElement(elementType);
    const textNode = document.createTextNode(text);
    textElement.appendChild(textNode);
    return textElement;
}

function addAttribute(name, value, element) {
    const newAttribute = document.createAttribute(name);
    newAttribute.value = value;
    element.setAttributeNode(newAttribute);
}

function clearAll() {
    const contentBar = document.querySelector('.content');
    contentBar.replaceChildren();
}
  

function getRandomData(type) {
    return data[type][rn(data[type].length)];
}

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];

// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, \"Can I get you anything?\" \"Yeah,\" reply the bytes.  \"Make us a double.\"', 'There are only 10 kinds of people in this world: those who know binary and those who don\'t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It\'s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '\"Debugging\" is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
  { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
  { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
  { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
  { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
  { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
  { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
  { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
  { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
  { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
  { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
];

const data = {
    memes,
    jokes,
    quotes
  };

  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  