// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");

// Button Event Listener for searching
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("search-in").value;

  // If Statement - Test the Input

  // Po
  if (name === "Po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  }

  // Tigress
  else if (name === "Tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImgEl.src = "img/tigress.png";
  }

  // Mantis
  else if (name === "Mantis" || name === "master Mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImgEl.src = "img/mantis.png";
  }

  // Monkey
  else if (name === "Monkey" || name === "master Monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImgEl.src = "img/monkey.png";
  }

  // Boss wolf
  else if (
    name === "boss wilf" ||
    name === "Boss Wilf" ||
    name === "boss Wilf"
  ) {
    charNameEl.innerHTML = "boss Wilf";
    charQuoteEl.innerHTML = "Spread out! Search everywhere!";
    charImgEl.src = "img/boss-wolf.png";
  }

  // Crane
  else if (name === "Crane" || name === "master Crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Don't mention it";
    charImgEl.src = "img/crane.png";
  }

  // Croc
  else if (name === "Croc" || name === "master Croc" || name === "Crocodile") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "Your friend knows how to convince!";
    charImgEl.src = "img/croc.png";
  }

  // Kai
  else if (name === "Kai" || name === "master Kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "I will capture the chi of every kung fu warrior and become invincible!";
    charImgEl.src = "img/kai.png";
  }

  // Mr Ping
  else if (name === "Ping" || name === "mr Ping" || name === "Po's father") {
    charNameEl.innerHTML = "Mr. Ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    charImgEl.src = "img/mr-ping.png";
  }

  // Oogway
  else if (
    name === "Oogway" ||
    name === "master Oogway" ||
    name === "master Turtle"
  ) {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "Well done. I see you found a battle worth fighting for.";
    charImgEl.src = "img/oogway.png";
  }

  // Shen
  else if (
    name === "Shen" ||
    name === "master Peacock" ||
    name === "lord Shen"
  ) {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML = "Happiness... must be taken. And I will take mine.";
    charImgEl.src = "img/shen.png";
  }

  // Shifu
  else if (
    name === "Shifu" ||
    name === "master Shifu" ||
    name === "Po's mentor"
  ) {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML =
      "Well done, students—if you were trying to disappoint me.";
    charImgEl.src = "img/shifu.png";
  }

  // Soothsayer
  else if (name === "Soothsayer" || name === "old Goat" || name === "healer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML =
      "Even with his poor eyesight, he can see the truth. Why is it that you cannot?";
    charImgEl.src = "img/soothsayer.png";
  }

  // Soothsayer
  else if (name === "Stormong Ox" || name === "master Ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "You can't defeat us, Shen!";
    charImgEl.src = "img/storming-ox.png";
  }

  // Tai Lung
  else if (name === "Tai Lung" || name === "Shifu's former student") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "Tell everyone that a real dragon warrior is coming home!";
    charImgEl.src = "img/tai-lung.png";
  }

  // Vipper
  else if (name === "Vipper" || name === "master Vipper") {
    charNameEl.innerHTML = "Vipper";
    charQuoteEl.innerHTML = "The poor guy is just gonna get himself killed!";
    ("Tell everyone that a real dragon warrior is coming home!");
    charImgEl.src = "img/viper.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "--------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

// Button event Listener for changing theme

var btnTheme = document
  .getElementById("theme-btn")
  .addEventListener("click", showNewTheme);

// Variables
let body = document.getElementById("the-body");
function showNewTheme() {
  let inpTheme = document.getElementById("theme-in").value;

  if (inpTheme === "dark" || inpTheme === "black") {
    body.style.background = "rgba(0, 0, 0, 0.7)";
    body.style.color = "white";
  }

  else if (inpTheme === "light" || inpTheme === "white") {
    body.style.background = "rgba(255, 255, 255, 0.7)";
    body.style.color = "black";
  }

  else if (inpTheme === "random") {
    let r = Math.random() * 255;
    r = r.toFixed(3);

    let g = Math.random() * 255;
    g = g.toFixed(3);

    let b = Math.random() * 255;
    b = b.toFixed(3);

    let a = Math.random();

    body.style.background = `rgba(${r}, ${g}, ${b}, ${a})`;

  }
}
