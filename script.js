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
    stimulateCatch(70, 10, 5)
  } else if (character === "alex") {
    stimulateCatch(70, 400, 5)
  } else if (character === "villager") {
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
  // calculates the puffer value rather than takes it in order to preven tthe chance fo numbers equaling greater than 100%
  let puffer = 1 - cod - salmon - tropical
  // lists the values into a array and sorts them
  let order = [{name:'puffer', quantity:puffer}, {name:'salmon', quantity:salmon}, {name:'tropical', quantity:tropical}, {name:'cod', quantity:cod}];
  r = Math.random();
  console.log(order.quantity)
  for(i)
  if (order.name === "cod") {
    numCod++;
    codSpanEl.innerHTML = numCod;
    resultImgEl.src = "img/Raw-Cod.png";
  } else if (order.name === "salmon") {
    numSalmon++;
    salmonSpanEl.innerHTML = numSalmon;
    resultImgEl.src = "img/Raw-Salmon.png";
  } else if (order.name === "tropical") {
    numTropical++;
    tropicalSpanEl.innerHTML = numTropical;
    resultImgEl.src = "img/Tropical-Fish.png";
  } else {
    numPuffer++;
    pufferSpanEl.innerHTML = numPuffer;
    resultImgEl.src = "img/Pufferfish.png";
  } 
}

// function catchFish() {
//   if (character === "steve") {
//     // STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)
//     let randNum = Math.random();
//     if (randNum < 0.7) {
//       numCod++;
//       codSpanEl.innerHTML = numCod;
//       resultImgEl.src = "img/Raw-Cod.png";
//     } else if (randNum < 0.9) {
//       numSalmon++;
//       salmonSpanEl.innerHTML = numSalmon;
//       resultImgEl.src = "img/Raw-Salmon.png";
//     } else if (randNum < 0.95) {
//       numTropical++;
//       tropicalSpanEl.innerHTML = numTropical;
//       resultImgEl.src = "img/Tropical-Fish.png";
//     } else {
//       numPuffer++;
//       pufferSpanEl.innerHTML = numPuffer;
//       resultImgEl.src = "img/Pufferfish.png";
//     }
//   } else if (character === "alex") {
//     // ALEX PROBABILITIES: cod (10%), salmon (10%), tropical (30%), puffer (50%)
//     let randNum = Math.random();
//     if (randNum < 0.1) {
//       numCod++;
//       codSpanEl.innerHTML = numCod;
//       resultImgEl.src = "img/Raw-Cod.png";
//     } else if (randNum < 0.2) {
//       numSalmon++;
//       salmonSpanEl.innerHTML = numSalmon;
//       resultImgEl.src = "img/Raw-Salmon.png";
//     } else if (randNum < 0.5) {
//       numTropical++;
//       tropicalSpanEl.innerHTML = numTropical;
//       resultImgEl.src = "img/Tropical-Fish.png";
//     } else {
//       numPuffer++;
//       pufferSpanEl.innerHTML = numPuffer;
//       resultImgEl.src = "img/Pufferfish.png";
//     }
//   } else if (character === "villager") {
//     // VILLAGER PROBABILITIES: cod (25%), salmon (25%), tropical (25%), puffer (25%)
//     let randNum = Math.random();
//     if (randNum < 0.25) {
//       numCod++;
//       codSpanEl.innerHTML = numCod;
//       resultImgEl.src = "img/Raw-Cod.png";
//     } else if (randNum < 0.5) {
//       numSalmon++;
//       salmonSpanEl.innerHTML = numSalmon;
//       resultImgEl.src = "img/Raw-Salmon.png";
//     } else if (randNum < 0.75) {
//       numTropical++;
//       tropicalSpanEl.innerHTML = numTropical;
//       resultImgEl.src = "img/Tropical-Fish.png";
//     } else {
//       numPuffer++;
//       pufferSpanEl.innerHTML = numPuffer;
//       resultImgEl.src = "img/Pufferfish.png";
//     }
//   }
// }

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