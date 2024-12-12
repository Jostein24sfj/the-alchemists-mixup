let roseEssence;
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

if (lockMagicOpen && lockStrengthOpen && lockWisdomOpen) {
  console.log("All locks are open! You enter the magical chamber.");
} else if (magicPower === 4 || strength === 3 || wisdom === 5) {
  console.log("Could not open all locks. Lacking attribute");
} else {
  console.log("You couldn't open all the locks. Keep trying!");
}
