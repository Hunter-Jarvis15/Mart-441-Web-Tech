var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8"/*, "image9", "image10"*/];
var blankImagePath = "images/Block.png";
var firstGuess = -1;
var secondGuess = -1;
var score = 0;
var allMatches = 0;
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

var actualImages = new Array();


function blocks() {
    createRandomImageArray();
    for (var i = 0; i < imageTags.length; i++) {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}

function createRandomImageArray() {
    var actualImagePath = ["images/Mario.png", "images/Luigi.png"/*, "images/Toad.png", "images/Peach.png", "images/Bowser.png"*/];
    // create another array to make sure the images only get added twice
    var count = [0,0];
    // create a while statement to check to see if our actual image array is full
    while (actualImages.length < 8) {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if (count[randomNumber] < 4) {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number) {

    if (firstGuess >= 0) {
        secondGuess = number;
        document.getElementById(imageTags[number]).src = actualImages[secondGuess];

    }
    else if (firstGuess < 0) 
    {
        firstGuess = number;
        document.getElementById(imageTags[firstGuess]).src = actualImages[firstGuess];

    }

    if (actualImages[secondGuess] != actualImages[firstGuess] && firstGuess >= 0 && secondGuess >= 0) {
        score++;
        setTimeout(wrongMatch, 1000); 
    }

    else if (actualImages[secondGuess] == actualImages[firstGuess] && firstGuess >= 0 && secondGuess >= 0) {
        score++;
        allMatches++;

        firstGuess = -1;
        secondGuess = -1;
        if (allMatches == actualImages.length / 2) {
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "FinalScreen.html";
        }
    }
}

function wrongMatch() {
    document.getElementById(imageTags[firstGuess]).src = blankImagePath;
    document.getElementById(imageTags[secondGuess]).src = blankImagePath;
    firstGuess = -1;
    secondGuess = -1;
}

function addToPlayer() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";
}

function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" + "Age: " + player.age + "<br>" + "Score: " + player.score;

    if (document.getElementById("endInformation") != null) {
        document.getElementById("endInformation").innerHTML = str;
    }

}