//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "Your device is not connected.",
  "Make sure '[—]' is turned on and in range.",
  "Now discoverable as '[—]'.",
  "Connection unsuccessful.",
  "Your connection is unstable.",
  "Out of range.",
  "Unexpected device.",
  "Bad connection.",
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFunction() {
  var x = document.getElementById("subject").value;
  if (x === "flighty") {
    addEval("🛩️🐦🦅🦋🌪️💭");
  } else if (x === "vague") {
    addEval("🥱👽🐙🪼🌘");
  } else if (x === "joyful") {
    addEval("😀😍😸👾👻🕺");
  } else if (x === "cloudy") {
    addEval("🌦️🌨️🫧🌫️☔⚡🥶");
  } else if (x === "hangry") {
    addEval("🍟🥨🌮🥗🍱");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "how are you doing?",
  "Sleep rest pray eat drink",
  "i just want to eat",
  "where is you apple?",
  "go get it broski",
  "constant hunger cues",
];
const sevenSyllables = [
  "cheese makes everything better",
  "the noodles must be wavey",
  "nothing left to do but sleep",
  "thinking about lasagne",
  "yuk, no i don't want salad",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "art of war free download",
  "ask izzy",
  "australian family law issues in the news",

  "barrister vs lawyer australia",
  "barrister vs solicitor",
  "bulk billed therapy",

  "can i seek to vary my family court order",
  "ccs has no cctv",
  "childcare how expensive",

  "delete search history",
  "delusional jealousy",
  "dv stats australia",

  "earliest memories as a child",
  "emotional manipulation signs",

  "fridge magnets",
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for email
//email function content (edit the const values)
function emailToPerson() {
  //text for opening paragraph of email (replace all of the sentences in red font with your own sentences)
  const openingSent = [
    "I finally caught up on some sleep and can tell you about the circus",
    "Can't wait to see my Mama Bird",
    "What are you doing in the midst of all the family chaos",
    "If I get into circus school, it starts end of January",
    "No word from circus school yet",
  ];
  //text for second paragraph of email - sentence 1
  const secondSent1 = [
    "Missy is like my child and I will miss her",
    "Missy is so fluffy and happy living with the girls this week",
    "Missy is under the covers again",
    "Well at first Missy stared at me like I was an apparition",
    "It was so hard to say goodbye to Missy",
  ];
  //text for second paragraph of email - sentence 2
  const secondSent2 = [
    "I took a shower with her and made her sit in the sun to dry",
    "She is like my shadow",
    "She is pure joy",
    "She stays on the bed while I pack",
    "She's fluffy and SO HAPPY to be with the girls",
  ];
  //text for third paragraph of email - sentence 1
  const thirdSent1 = [
    "G had a gambling relapse",
    "G is finally taking a little responsibility for his role in the breakdown of the relationship",
    "G is finally starting to accept that I am leaving",
    "G left all these tearful messages saying, What have you done to us",
    "I moved out for good just under two weeks ago",
  ];
  //text for third paragraph of email - sentence 2
  const thirdSent2 = [
    "He says, You don't love me, You don't want to see me, blah blah blah",
    "He gets tearful and hopeful but I'm not going back",
    "He lets me come visit Missy",
    "He's got tenants so I'm no longer paying rent there",
    "I filed his taxes for him",
  ];
  //text for closing paragraph of email
  const closingSent = [
    "I keep having weird dreams about packing up my stuff from my father's house",
    "I'm so much happier not being in a dysfunctional relationship",
    "One month left here to sort everything out",
    "Much is going good in my world, but I am also devastated",
    "Meow",
  ];
  //body of email (edit the salutation and closing address)
  const emailGenerated = [
    "Dear Name of addressee,",
    getRandomFromList(openingSent) + ".",
    getRandomFromList(secondSent1) +
      ". " +
      getRandomFromList(secondSent2) +
      ". ",
    getRandomFromList(thirdSent1) + ". " + getRandomFromList(thirdSent2) + ". ",
    getRandomFromList(closingSent) + ". ",
    "Replace this text with your sign off" + "                ",
  ];
  return emailGenerated;
}
//function to regenerate email text when 'send email' button is pressed (do not edit)
let text = emailToPerson();
let refresh = false;
buttonEmail.addEventListener("click", function () {
  refresh = true;
  text = emailToPerson();
});
let paraCounter = 0;
let charCounter = 0;
let typeWriterInterval;
function addLetter() {
  if (paraCounter < text.length && refresh == false) {
    const para = document.getElementById("emailParagraph" + paraCounter);
    para.innerHTML = text[paraCounter].slice(0, charCounter + 1);
    charCounter++;
    if (charCounter >= text[paraCounter].length) {
      paraCounter++;
      charCounter = 0;
    }
  } else {
    for (let i = 0; i < text.length; i++) {
      const para = document.getElementById("emailParagraph" + i);
      para.innerHTML = "";
    }
    paraCounter = 0;
    charCounter = 0;
    refresh = false;
  }
}
//speed of the typewriter function
typeWriterInterval = setInterval(addLetter, 100);
//end of code for email to person

//start of code for poem

const subjects =
    "flowers, grass, roses, sprinkles, slayers, mini-fridge, lights, lamps, foreigner".split(
      ","
    ),
  verbs =
    "wander,search, cross, kneel to pray in, avoid, survey, sneak across, hide in".split(
      ","
    ),
  objects =
    "the barren plains,the wilted grasslands, vast wastelands,wildernesses unknown,languishing caravan parks, arid deserts, military bunkers, valleys of ash and bone".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 1000);
