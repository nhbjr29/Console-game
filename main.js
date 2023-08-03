const prompt = require("prompt-sync")();

function startGame() {
    console.log("Welcome to Dragon Fable!");

    let charName = prompt("Enter Name: ");
    console.log("Hi " + charName + ", welcome to Dragon Fable!");

    let enterGame;
    while (true) {
        enterGame = prompt("Do you want to enter the Beginner's Path? (YES/NO) ");
        if (enterGame.toUpperCase() === "YES") {
            console.log("Let's begin the game!");
            break;
        } else if (enterGame.toUpperCase() === "NO") {
            console.log("Thank you for coming!");
            return;
        } else {
            console.log("Invalid response. Please enter YES or NO.");
        }
    }

    const intro1 = "In the first stage, Beginner's Path, you will face Lvl1 Shadowfang in the right path.";
    console.log(intro1);

    let choosePath;
    while (true) {
        choosePath = prompt("Do you want to go to the right or left path? (RIGHT/LEFT) ");
        if (choosePath.toUpperCase() === "LEFT") {
            console.log("You see a chest with a Rusty Sword!");
            break;
        } else if (choosePath.toUpperCase() === "RIGHT") {
            console.log("You have been killed! Please play again.");
            return;
        } else {
            console.log("Invalid response. Please enter RIGHT or LEFT.");
        }
    }

    const equipItem = "The Rusty Sword will give you great damage to monsters.";
    console.log(equipItem);

    let equipItem1;
    while (true) {
        equipItem1 = prompt("Do you want to equip it? (YES/NO) ");
        if (equipItem1.toUpperCase() === "YES") {
            console.log("You have gained a massive amount of Physical damage!");
            break;
        } else if (equipItem1.toUpperCase() === "NO") {
            console.log("Lvl1 Shadowfang appeared, and you have no damage. You got defeated in battle. Please try again!");
            return;
        } else {
            console.log("Invalid response. Please enter YES or NO.");
        }
    }

    console.log("Lvl1 Shadowfang appeared, and you defeated the monster! You are now level 2!");
    
// Summary based on player's choices
console.log("==============================");
console.log("        Stage Summary         ");
console.log("==============================");
console.log("Player Name: " + charName);
console.log("Stage Result: Completed");

console.log("Congratulations, " + charName + "!");
console.log("You have successfully completed the first stage, Beginner's Path.");
console.log("By defeating Lvl1 Shadowfang and equipping the Rusty Sword, you have proven your valor.");

console.log("Your journey continues, and greater challenges await you in the next stage.");

console.log("==============================");
}

// Call the function to start the game
startGame();