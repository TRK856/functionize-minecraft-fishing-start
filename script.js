// Minecraft Fishing Simulator by Mr. V

// HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let resultImgEl = document.getElementById("result-img");
let codSpanEl = document.getElementById("cod-span");
let salmonSpanEl = document.getElementById("salmon-span");
let tropicalSpanEl = document.getElementById("tropical-span");
let pufferSpanEl = document.getElementById("puffer-span");

// Global Variables
let character = "steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Event
fishBtnEl.addEventListener("click", catchFish);


function catchFish() {
  if (character === "steve") {
    // random numbers
    stimulateCatch(70, 10, 5)
  } else if (character === "alex") {
    // random numbers
    stimulateCatch(70, 400, 5)
  } else if (character === "villager") {
    // random numbers
    stimulateCatch(70, 400, 5)
  }
}

// stimulates the catch
function stimulateCatch (cod, salmon, tropical) {
  // checks the values if they are out of hundred, if true, makes them out of 1
  // also debugs mistakes - or potential mistkaes whn putting in values
  if (cod > 1){
    cod = cod/100
  } if (salmon > 1){
    salmon = salmon/100
  } if (tropical > 1){
    tropical = tropical/100
  } if((cod + tropical + salmon) > 1){
    // logs if one of the numbers cuases all of them to be larger then 100%
    console.log(`Error - Percentage > 100: ${(cod + tropical + salmon)*100}`)
  }

  // old code
  let randNum = Math.random();
  if (randNum < cod) {
    numCod++;
    codSpanEl.innerHTML = numCod;
    resultImgEl.src = "img/Raw-Cod.png";
  } else if (randNum < salmon) {
    numSalmon++;
    salmonSpanEl.innerHTML = numSalmon;
    resultImgEl.src = "img/Raw-Salmon.png";
  } else if (randNum < tropical) {
    numTropical++;
    tropicalSpanEl.innerHTML = numTropical;
    resultImgEl.src = "img/Tropical-Fish.png";
  } else {
    numPuffer++;
    pufferSpanEl.innerHTML = numPuffer;
    resultImgEl.src = "img/Pufferfish.png";
  }
}

// Character Select
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);

function selectSteve() {
  character = "steve"
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");
  villagerImgEl.classList.remove("active");
}

function selectAlex() {
  character = "alex";
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");
  villagerImgEl.classList.remove("active");
}

function selectVillager() {
  character = "villager";
  steveImgEl.classList.remove("active");
  alexImgEl.classList.remove("active");
  villagerImgEl.classList.add("active");
}