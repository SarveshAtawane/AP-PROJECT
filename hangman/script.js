//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const GameContainer = document.getElementById("game-container");
const newGameButton = document.getElementById("new-game-button");
const GameButton = document.getElementById("game-button");
let opt = ""
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const resultTextg = document.getElementById("result-textg");
const guess = document.getElementById("guess");
const level = document.getElementById("level");
const hin = document.getElementById("hint");
let crt = 0;
let str = [];
let word = ""
//Options values for buttons
let options = {
  fruits: [
    "APPLE",
    "BANANA",
    "KIWI",
    "ORANGE",
    "GRAPES",
    "STRAWBERRY",
    "MANGO",
    "CHERRY",
    "PAPAYA",
    "GUAVA",
    "RASPBERRY",
    "BLUEBERRY",
    "LYCHEE",
    "DRAGONFRUIT",
    "PEACH",
    "AVOCADO",
    "FIG",
    "PEAR",
  ],
  animals: ["CAT", "DOG", "LION", "TIGER", "MONKEY", "RABBIT", "ZEBRA", "SNAKE", "SPIDER", "PANTHER", "BEAR", "SQUIRREL", "KANGAROO", "PENGUIN", "SCORPION", "CHIMPANZEE", "HIPPOPOTAMUS", "RHINOCEOROS"],
  countries: [
    "AMERICA",
    "CHINA",
    "INDIA",
    "BRAZIL",
    "RUSSIA",
    "JAPAN",
    "CANADA",
    "AUSTRALIA",
    "SOUTH KOREA",
    "SPAIN",
    "ITALY",
    "INDONESIA",
    "SWITZERLAND",
    "SWEDEN",
    "BELGIUM",
    "AUSTRIA",
    "NORWAY",
    "DENMARK",
  ]
};
//count
let winCount = 0;
let count = 0;
let random_word = ""
let chosenWord = "";
function hint() {
  console.log(random_word)
  hin.classList.remove("hide");
  if (random_word === "CAT") {
    hin.innerHTML = "<h2>HINT: Independent, curious, popular pet</h2>";
  } else if (random_word === "DOG") {
    hin.innerHTML = "<h2>HINT: Loyal, playful, man's best friend</h2>";
  } else if (random_word === "LION") {
    hin.innerHTML = "<h2>HINT: Majestic, king of the jungle</h2>";
  } else if (random_word === "TIGER") {
    hin.innerHTML = "<h2>HINT: Powerful, striped big cat</h2>";
  } else if (random_word === "MONKEY") {
    hin.innerHTML = "<h2>HINT: Agile, intelligent, playful tree-dweller</h2>";
  } else if (random_word === "RABBIT") {
    hin.innerHTML = "<h2>HINT: Hops, fluffy, eats carrots</h2>";
  } else if (random_word === "ZEBRA") {
    hin.innerHTML = "<h2>HINT: Black and white</h2>";
  } else if (random_word === "SNAKE") {
    hin.innerHTML = "<h2>HINT: Legless reptile, slithers</h2>";
  } else if (random_word === "SPIDER") {
    hin.innerHTML = "<h2>HINT: Eight-legged, spins webs</h2>";
  } else if (random_word === "PANTHER") {
    hin.innerHTML = "<h2>HINT: Sleek, powerful, agile wildcat</h2>";
  } else if (random_word === "BEAR") {
    hin.innerHTML = "<h2>HINT: Strong, hibernates, large mammal</h2>";
  } else if (random_word === "SQUIRREL") {
    hin.innerHTML = "<h2>HINT: Bushy-tailed, acrobatic tree-dweller</h2>";
  } else if (random_word === "KANGAROO") {
    hin.innerHTML = "<h2>HINT: Hops, carries young in pouch</h2>";
  } else if (random_word === "PENGUIN") {
    hin.innerHTML = "<h2>HINT: Black and white, flightless bird</h2>";
  } else if (random_word === "SCORPION") {
    hin.innerHTML = "<h2>HINT: Venomous, arachnid, found worldwide</h2>";
  } else if (random_word === "CHIMPANZEE") {
    hin.innerHTML = "<h2>HINT: Intelligent primate, close to humans</h2>";
  } else if (random_word === "HIPPOPOTAMUS") {
    hin.innerHTML = "<h2>HINT: Large water-dwelling mammal, powerful</h2>";
  } else if (random_word === "RHINOCEROS") {
    hin.innerHTML = "<h2>HINT: Large, horned mammal, Africa/Asia</h2>";
  }
  // Assuming random_word contains the randomly selected fruit
  // Generate hints based on the randomly selected fruit
  else if (random_word === "APPLE") {
    hin.innerHTML = "<h2>HINT: Common, healthy, red or green</h2>";
  } else if (random_word === "BANANA") {
    hin.innerHTML = "<h2>HINT: Yellow, tropical, potassium-rich</h2>";
  } else if (random_word === "KIWI") {
    hin.innerHTML = "<h2>HINT: Small, fuzzy, green interior</h2>";
  } else if (random_word === "ORANGE") {
    hin.innerHTML = "<h2>HINT: Citrus, juicy, high in vitamin C</h2>";
  } else if (random_word === "GRAPES") {
    hin.innerHTML = "<h2>HINT: Small, round, come in clusters</h2>";
  } else if (random_word === "STRAWBERRY") {
    hin.innerHTML = "<h2>HINT: Red, sweet, used in desserts</h2>";
  } else if (random_word === "MANGO") {
    hin.innerHTML = "<h2>HINT: Tropical, juicy, 'king of fruits'</h2>";
  } else if (random_word === "PEACH") {
    hin.innerHTML = "<h2>HINT: Fuzzy, sweet, pleasant aroma</h2>";
  } else if (random_word === "PAPAYA") {
    hin.innerHTML = "<h2>HINT: Tropical, orange flesh, sweet taste</h2>";
  } else if (random_word === "CHERRY") {
    hin.innerHTML = "<h2>HINT: Small, red, sweet or tart</h2>";
  } else if (random_word === "RASPBERRY") {
    hin.innerHTML = "<h2>HINT: Small, red, sweet-tart taste</h2>";
  } else if (random_word === "BLUEBERRY") {
    hin.innerHTML = "<h2>HINT: Small, blue, antioxidant-rich fruit</h2>";
  } else if (random_word === "LYCHEE") {
    hin.innerHTML = "<h2>HINT: Tropical, rough skin, sweet flesh</h2>";
  } else if (random_word === "DRAGONFRUIT") {
    hin.innerHTML = "<h2>HINT: Exotic, pink or yellow skin</h2>";
  } else if (random_word === "GUAVA") {
    hin.innerHTML = "<h2>HINT: Fragrant, tropical, sweet flesh</h2>";
  } else if (random_word === "AVOCADO") {
    hin.innerHTML = "<h2>HINT: Creamy, green or black skin</h2>";
  } else if (random_word === "FIG") {
    hin.innerHTML = "<h2>HINT: Pear-shaped, soft, sweet flesh</h2>";
  } else if (random_word === "PEAR") {
    hin.innerHTML = "<h2>HINT: Juicy, sweet, thin-skinned fruit</h2>";
  }
  else if (random_word === "AMERICA") {
    hin.innerHTML = "<h2>HINT: Land of liberty, diversity, opportunities</h2>";
  } else if (random_word === "CHINA") {
    hin.innerHTML = "<h2>HINT: Vast, ancient, influential, diverse culture</h2>";
  } else if (random_word === "INDIA") {
    hin.innerHTML = "<h2>HINT: Colorful, diverse, rich cultural heritage</h2>";
  } else if (random_word === "BRAZIL") {
    hin.innerHTML = "<h2>HINT: Carnival, samba, Amazon rainforest</h2>";
  } else if (random_word === "RUSSIA") {
    hin.innerHTML = "<h2>HINT: Largest country, rich history, vast landscapes</h2>";
  } else if (random_word === "JAPAN") {
    hin.innerHTML = "<h2>HINT: Traditional, modern, cherry blossoms, sushi</h2>";
  } else if (random_word === "CANADA") {
    hin.innerHTML = "<h2>HINT: Beautiful landscapes, maple syrup, friendly</h2>";
  } else if (random_word === "AUSTRALIA") {
    hin.innerHTML = "<h2>HINT: Kangaroos, Great Barrier Reef, Outback</h2>";
  } else if (random_word === "SOUTH KOREA") {
    hin.innerHTML = "<h2>HINT: K-pop, technology, delicious cuisine</h2>";
  } else if (random_word === "SPAIN") {
    hin.innerHTML = "<h2>HINT: Flamenco, paella, vibrant festivals, siestas</h2>";
  } else if (random_word === "ITALY") {
    hin.innerHTML = "<h2>HINT: Pizza, pasta, art, ancient ruins</h2>";
  } else if (random_word === "INDONESIA") {
    hin.innerHTML = "<h2>HINT: Tropical paradise, diverse culture, islands</h2>";
  } else if (random_word === "SWITZERLAND") {
    hin.innerHTML = "<h2>HINT: Alpine beauty, chocolate, precision watches</h2>";
  } else if (random_word === "SWEDEN") {
    hin.innerHTML = "<h2>HINT: Scenic landscapes, ABBA, IKEA</h2>";
  } else if (random_word === "BELGIUM") {
    hin.innerHTML = "<h2>HINT: Chocolate, waffles, beer, medieval architecture</h2>";
  } else if (random_word === "AUSTRIA") {
    hin.innerHTML = "<h2>HINT: Music, Alps, Vienna, Sachertorte</h2>";
  } else if (random_word === "NORWAY") {
    hin.innerHTML = "<h2>HINT: Fjords, northern lights, Viking heritage</h2>";
  } else if (random_word === "DENMARK") {
    hin.innerHTML = "<h2>HINT: Hygge, fairy tales, cycling culture</h2>";
  }

}
function lose() {
  level.innerHTML = `<h2></h2>`;
  str = [];
  resultText.innerHTML = `<CENTER><h2 class='lose-msg'>Game Over!!</h2><p>The word was <span>${chosenWord}</span></p></CENTER><CENTER><h2 class='lose-msg'>Your could guess only ${crt} words</h2>  </CENTER><br>`;
  // resultText.innerHTML = `<h2 class='lose-msg'>Your Final Score</h2><p><span>${crt}</span></p>`;
  crt = 0;
  blocker();
}
function deleteAnimal(animal) {
  const animalIndex = options.animals.indexOf(animal);

  if (animalIndex !== -1) {
    options.animals.splice(animalIndex, 1);
    // console.log(`Deleted ${animal} from the animals array.`);
  } else {
    // console.log(`${animal} is not found in the animals array.`);
  }
}
function win() {
  console.log("crt is " + crt)
  if (crt <= 1) {
    level.innerHTML = `<h2>EASY</h2>`;

  }
  else if (crt > 1 && crt <= 3) {
    level.innerHTML = `<h2>MEDIUM</h2>`;

  }
  else {
    level.innerHTML = `<h2>HARD</h2>`;
  }
  if (options.animals.length == 3) {
    console.log(options.animals);
    // console.log(opt);
    console.log(word)
    str = [];
    crt++;
    resultText.innerHTML = `<h2 class='win-msg'>Congratulations<br> you won the game!!</h2><br>`;

    blocker();
  }
  else {
    options.animals.splice(0, 3);
    options.fruits.splice(0, 3);
    options.countries.splice(0, 3);
    // Example usage
    // deleteAnimal(word);
    console.log(options.fruits);
    // console.log(opt);
    console.log(word)
    str = [];
    crt++;
    resultTextg.innerHTML = `<h2 class='win-msg'>You guessed it right!!</h2>`;

    blocker2();
  }
}
//Display option buttons
const displayOptions = () => {
  // guess.innerHTML = `${crt}`;
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);

};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};
const blocker2 = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  GameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  level.innerHTML = `<h2>EASY</h2>`;

  let optionsButtons = document.querySelectorAll(".options");
  // console.log(optionValue)
  opt = optionValue;
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  // console.log(optionArray.length)

  chosenWord = optionArray[Math.floor(Math.random() * 3)];
  chosenWord = chosenWord.toUpperCase();
  random_word = chosenWord
  word = chosenWord
  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};
const cont = () => {
  hin.classList.add("hide");
  random_word = ""
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  // optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  GameContainer.classList.add("hide");

  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          let chosen = button.innerText
          console.log(index);
          let charArray = chosenWord.split("");
          let arr = charArray.slice();
          let unique = [];
          for (i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) === -1) {
              unique.push(arr[i]);
            }
          }
          let e = chosen;
          console.log(str);
          //if character in array is same as clicked button
          if (char === chosen) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            if (!str.includes(e)) {
              winCount += 1;
              str.push(e);
            }
            console.log(str.length);
            //if winCount equals word lenfth
            if (str.length == unique.length) {
              win()
            }


            //replace dash with letter




          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          lose()
        }
      }
      //disable clicked button

      button.disabled = true;
    });
    letterContainer.append(button);
  }
  //displayOptions();

  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[opt];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * 3)];
  chosenWord = chosenWord.toUpperCase();
  word = chosenWord
  random_word = chosenWord
  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;


  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};
//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  random_word = ""
  hin.classList.add("hide");

  winCount = 0;
  count = 0;
  crt = 0;
  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          let chosen = button.innerText
          console.log(index);
          let charArray = chosenWord.split("");
          let arr = charArray.slice();
          let unique = [];
          for (i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) === -1) {
              unique.push(arr[i]);
            }
          }
          let e = chosen;
          console.log(str);
          //if character in array is same as clicked button
          if (char === chosen) {
            // //replace dash with letter
            // dashes[index].innerText = char;
            // //increment counter
            // winCount += 1;
            // //if winCount equals word lenfth

            dashes[index].innerText = char;
            //increment counter
            if (!str.includes(e)) {
              winCount += 1;
              str.push(e);
            }
            console.log(str.length);
            //if winCount equals word lenfth
            if (str.length == unique.length) {
              win()
            }




            // if (winCount == charArray.length) {
            //   win()
            // }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          lose()
        }
      }
      //disable clicked button

      button.disabled = true;
    });
    letterContainer.append(button);
  }
  displayOptions();

  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};
function clk(e) {
  // str.push(e);
  let button = document.createElement("button");
  // button.classList.add("letters");
  //Number to ASCII[A-Z]
  // button.innerText = String.fromCharCode(i);
  //character button click
  let charArray = chosenWord.split("");
  let arr = charArray.slice();
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  let dashes = document.getElementsByClassName("dashes");
  // console.log(e)
  // console.log(charArray)
  //if array contains clciked value replace the matched dash with letter else dram on canvas
  if (charArray.includes(e)) {
    charArray.forEach((char, index) => {
      let chosen = e
      console.log(str);
      // console.log(chosen);
      // console.log(char)
      //if character in array is same as clicked button
      if (char === chosen) {
        //replace dash with letter
        dashes[index].innerText = char;
        //increment counter
        if (!str.includes(e)) {
          winCount += 1;
          str.push(e);
        }
        console.log(str.length);
        //if winCount equals word lenfth
        if (str.length == unique.length) {
          win()
        }
      }
    });
  } else {
    //lose count
    count += 1;
    //for drawing man
    drawMan(count);
    //Count==6 because head,body,left arm, right arm,left leg,right leg
    if (count == 6) {
      lose()
    }
  }
  //disable clicked button
  button.disabled = true;
  // letterContainer.append(button);
}
window.addEventListener('keypress', e => {
  if (e.key >= 'a' || e.key <= 'z')
    clk(e.key.toUpperCase());
});
//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;
  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };
  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  console.log("count " + count)
  if (count == 4) {
    hint();
  }
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();

      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
//New Game
GameButton.addEventListener("click", cont);
newGameButton.addEventListener('click', () => {
  initializer;
  options.fruits = [
    "APPLE",
    "BANANA",
    "KIWI",
    "ORANGE",
    "GRAPES",
    "STRAWBERRY",
    "MANGO",
    "CHERRY",
    "PAPAYA",
    "GUAVA",
    "RASPBERRY",
    "BLUEBERRY",
    "LYCHEE",
    "DRAGONFRUIT",
    "PEACH",
    "AVOCADO",
    "FIG",
    "PEAR",
  ];
  options.animals = ["CAT", "DOG", "LION", "TIGER", "MONKEY", "RABBIT", "ZEBRA", "SNAKE", "SPIDER", "PANTHER", "BEAR", "SQUIRREL", "KANGAROO", "PENGUIN", "SCORPION", "CHIMPANZEE", "HIPPOPOTAMUS", "RHINOCEOROS"],
    options.countries = [
      "AMERICA",
      "CHINA",
      "INDIA",
      "BRAZIL",
      "RUSSIA",
      "JAPAN",
      "CANADA",
      "AUSTRALIA",
      "SOUTHKOREA",
      "SPAIN",
      "ITALY",
      "INDONESIA",
      "SWITZERLAND",
      "SWEDEN",
      "BELGIUM",
      "AUSTRIA",
      "NORWAY",
      "DENMARK",
    ]
  location.reload();
});
// newGameButton.addEventListener("click", initializer);
window.onload = initializer;