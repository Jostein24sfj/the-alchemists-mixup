/* let roseEssence;
let dragonTears;
let unicornDust;
let liquifiedPrincess;

let lovePotion = roseEssence + dragonTears + unicornDust + liquifiedPrincess;

let wizardName = "Merlin";
let wizardAge = 100;
let isWizardPowerful = true;
let apprenticeName = "You";
let numberOfSpells;
let canDoMagic = false;

console.log("The love potion contains: " + lovePotion);

console.log("The wizardName goes into the String Sack!");
console.log("The wizardName is of type: " + typeof wizardName);

console.log("The wizardAge goes into the Number Chest!");
console.log("The wizardAge is of type: " + typeof wizardAge);

console.log("The isWizardPowerful goes into the Boolean Box!");
console.log("The isWizardPowerful is of type: " + typeof isWizardPowerful);

console.log("The apprenticeName goes into the String Sack!");
console.log("The apprenticeName is of type: " + typeof apprenticeName);

console.log("The numberOfSpells goes into the Number Chest!");
console.log("The numberOfSpells is of type: " + typeof numberOfSpells);

console.log("The canDoMagic goes into the Boolean Box");
console.log("The canDoMagic is of type: " + typeof canDoMagic);

let magical = "You have completed this task!";

let magicPower = 7;
let strength = 5;
let wisdom = 6;

let lockMagicOpen = magicPower >= 5;
let lockStrengthOpen = strength >= 4;
let lockWisdomOpen = wisdom >= 6;
console.log(lockMagicOpen);
console.log(lockStrengthOpen);
console.log(lockWisdomOpen);

/* Magic Lock requires 5 magic power to unlock
Strength Lock requires 4 strength to unlock
Wisdom Lock requires 6 wisdom to unlock
Set each lock to true if the hero can open it.
If all locks are opened,  the hero can enter. */

/* if (lockMagicOpen && lockStrengthOpen && lockWisdomOpen) {
  console.log("All locks are open! You enter the magical chamber.");
} else if (magicPower === 4 || strength === 3 || wisdom === 5) {
  console.log("Could not open all locks. Lacking attribute");
} else {
  console.log("You couldn't open all the locks. Keep trying!");
} */

let hitTargets = 8; // Out of 10
let obstaclesCleared = 4; // Out of 5
let spellsCast = 2; // Out of 3
let questionsAnswered = 7; // Out of 10

let archeryPercentageScore = (hitTargets / 10) * 100;
console.log("Targets hit: " + archeryPercentageScore + "%");

if (archeryPercentageScore >= 90 && archeryPercentageScore <= 100) {
  console.log("Outstanding performance");
} else if (archeryPercentageScore >= 70 && archeryPercentageScore <= 89) {
  console.log("Great job, you passed with flying colors!");
} else if (archeryPercentageScore >= 50 && archeryPercentageScore <= 69) {
  console.log("Good effort, you passed the trials!");
} else if (archeryPercentageScore <= 50) {
  console.log("More training required. Don't give up!");
}

let obstaclePercentageScore = (obstaclesCleared / 5) * 100;
console.log("Obstacles cleared: " + obstaclePercentageScore + "%");

if (obstaclePercentageScore >= 90 && obstaclePercentageScore <= 100) {
  console.log("Outstanding performance");
} else if (obstaclePercentageScore >= 70 && obstaclePercentageScore <= 89) {
  console.log("Great job, you passed with flying colors!");
} else if (obstaclePercentageScore >= 50 && obstaclePercentageScore <= 69) {
  console.log("Good effort, you passed the trials!");
} else if (obstaclePercentageScore <= 50) {
  console.log("More training required. Don't give up!");
}

let spellsPercentageScore = ((spellsCast / 3) * 100).toFixed(2);
console.log("Spells cast: " + spellsPercentageScore + "%");

if (spellsPercentageScore >= 90 && spellsPercentageScore <= 100) {
  console.log("Outstanding performance");
} else if (spellsPercentageScore >= 70 && spellsPercentageScore <= 89) {
  console.log("Great job, you passed with flying colors!");
} else if (spellsPercentageScore >= 50 && spellsPercentageScore <= 69) {
  console.log("Good effort, you passed the trials!");
} else if (spellsPercentageScore <= 50) {
  console.log("More training required. Don't give up!");
}

let questionsPercentageScore = (questionsAnswered / 10) * 100;
console.log("Questions answered: " + questionsPercentageScore + "%");

if (questionsPercentageScore >= 90 && questionsPercentageScore <= 100) {
  console.log("Outstanding performance");
} else if (questionsPercentageScore >= 70 && questionsPercentageScore <= 89) {
  console.log("Great job, you passed with flying colors!");
} else if (questionsPercentageScore >= 50 && questionsPercentageScore <= 69) {
  console.log("Good effort, you passed the trials!");
} else if (questionsPercentageScore <= 50) {
  console.log("More training required. Don't give up!");
}
