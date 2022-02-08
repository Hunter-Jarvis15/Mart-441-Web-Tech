function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    // Weapon choices
    if (choice == 1 && answer1 == "Mage") {
        document.getElementById("story").innerHTML = "Good choice. What is you're main weapon?";
        document.getElementById("choice1").innerHTML = "Magic Staff";
        document.getElementById("choice2").innerHTML = "Magic Book";
    } else if (choice == 2 && answer2 == "Summoner") {
        document.getElementById("story").innerHTML = "Good Choice. What is you're main weapon?";
        document.getElementById("choice1").innerHTML = "Summoning Staff";
        document.getElementById("choice2").innerHTML = "Whip";
    } else if (choice == 1 && answer1 == "Magic Staff") {
        document.getElementById("story").innerHTML = "Excellent choice. Now to pick your secondary weapon.";
        document.getElementById("choice1").innerHTML = "Sky Fracture Sword";
        document.getElementById("choice2").innerHTML = "Razorpine Staff";
    } else if (choice == 2 && answer2 == "Magic Book") {
        document.getElementById("story").innerHTML = "Excellent choice. Time to pick your secondary weapon.";
        document.getElementById("choice1").innerHTML = "Laser Machinegun";
        document.getElementById("choice2").innerHTML = "Betsy's Wrath Staff";
    } else if (choice == 1 && answer1 == "Summoning Staff") {
        document.getElementById("story").innerHTML = "Excellent choice. Time to pick your secondary weapon.";
        document.getElementById("choice1").innerHTML = "Terraprisma Sword";
        document.getElementById("choice2").innerHTML = "Dark Harvest Whip";
    } else if (choice == 2 && answer2 == "Whip") {
        document.getElementById("story").innerHTML = "Excellent choice. Time to pick your secondary weapon.";
        document.getElementById("choice1").innerHTML = "Lightning Aura Staff";
        document.getElementById("choice2").innerHTML = "Staff of the Frost Hydra";
    }
    // Accesory choices
    else if (choice == 1 && answer1 == "Sky Fracture Sword") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Sorcerer Emblem";
        document.getElementById("choice2").innerHTML = "Celestial Magnet";
    } else if (choice == 2 && answer2 == "Razorpine Staff") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Celestial Cuffs";
        document.getElementById("choice2").innerHTML = "Celestial Flower";
    } else if (choice == 1 && answer1 == "Laser Machinegun") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Celestial Boots";
        document.getElementById("choice2").innerHTML = "Mana Star Magnet";
    } else if (choice == 2 && answer2 == "Betsy's Wrath Staff") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Sorcerer Emblem";
        document.getElementById("choice2").innerHTML = "Celestial Boots";
    } else if (choice == 1 && answer1 == "Terraprisma Sword") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Summoner Emblem";
        document.getElementById("choice2").innerHTML = "Necromantic Scroll";
    } else if (choice == 2 && answer2 == "Dark Harvest Whip") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Pygmy Necklace";
        document.getElementById("choice2").innerHTML = "Hercules Beetle";
    } else if (choice == 1 && answer1 == "Lightning Aura Staff") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Necromantic Scroll";
        document.getElementById("choice2").innerHTML = "Papyrus Scarab";
    } else if (choice == 2 && answer2 == "Staff of the Frost Hydra") {
        document.getElementById("story").innerHTML = "With your weapons picked, What accessory will you bring into battle?";
        document.getElementById("choice1").innerHTML = "Summoner Emblem";
        document.getElementById("choice2").innerHTML = "Hercules Beetle";
    } 
    // Armour choices
    else if (choice == 1 && answer1 == "Sorcerer Emblem") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spectre Armor";
        document.getElementById("choice2").innerHTML = "Dragon Armor";
    } else if (choice == 2 && answer2 == "Celestial Magnet") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spectre Armor";
        document.getElementById("choice2").innerHTML = "Dragon Armor";
    }else if (choice == 1 && answer1 == "Celestial Cuffs") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spectre Armor";
        document.getElementById("choice2").innerHTML = "Dragon Armor";
    } else if (choice == 2 && answer2 == "Celestial Flower") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spectre Armor";
        document.getElementById("choice2").innerHTML = "Dragon Armor";
    }else if (choice == 1 && answer1 == "Celestial Boots") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spectre Armor";
        document.getElementById("choice2").innerHTML = "Dragon Armor";
    } else if (choice == 2 && answer2 == "Mana Star Magnet") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spectre Armor";
        document.getElementById("choice2").innerHTML = "Dragon Armor";
    }else if (choice == 1 && answer1 == "Summoner Emblem") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spooky Armor";
        document.getElementById("choice2").innerHTML = "Stardust Armor";
    } else if (choice == 2 && answer2 == "Necromantic Scroll") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spooky Armor";
        document.getElementById("choice2").innerHTML = "Stardust Armor";
    }else if (choice == 1 && answer1 == "Pygmy Necklace") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spooky Armor";
        document.getElementById("choice2").innerHTML = "Stardust Armor";
    } else if (choice == 2 && answer2 == "Hercules Beetle") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spooky Armor";
        document.getElementById("choice2").innerHTML = "Stardust Armor";
    }else if (choice == 1 && answer1 == "Necromantic Scroll") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spooky Armor";
        document.getElementById("choice2").innerHTML = "Stardust Armor";
    } else if (choice == 2 && answer2 == "Papyrus Scarab") {
        document.getElementById("story").innerHTML = "Now that all your weapons and accessories are chosen, What armor will you wear?";
        document.getElementById("choice1").innerHTML = "Spooky Armor";
        document.getElementById("choice2").innerHTML = "Stardust Armor";
    }
    // Restart 
    else if (choice == 1 && answer1 == "Spectre Armor") {
        document.getElementById("story").innerHTML = "You are ready for the battle. Are you having second thoughts about your items or character?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Mage";
        document.getElementById("choice2").innerHTML = "Summoner";
    } else if (choice == 2 && answer2 == "Dragon Armor") {
        document.getElementById("story").innerHTML = "You are ready for the battle. Are you having second thoughts about your items or character?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Mage";
        document.getElementById("choice2").innerHTML = "Summoner";
    }else if (choice == 1 && answer1 == "Spooky Armor") {
        document.getElementById("story").innerHTML = "You are ready for the battle. Are you having second thoughts about your items or character?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Mage";
        document.getElementById("choice2").innerHTML = "Summoner";
    } else if (choice == 2 && answer2 == "Stardust Armor") {
        document.getElementById("story").innerHTML = "You are ready for the battle. Are you having second thoughts about your items or character?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Mage";
        document.getElementById("choice2").innerHTML = "Summoner";
    }

}