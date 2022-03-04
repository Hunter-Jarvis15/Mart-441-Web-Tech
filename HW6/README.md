For HW6 I took what you said about how both the actualImagePath and count arrays both needing to be the same for it to work. 

The code below was responsible for filling both of my arrays to this case being 8 instead of my original 10.

By changing what the actualImages array to be less than allowed for 8 images to be passed into the array, then I had to change the count array to be less than 4 because it is half the number of images that were being passed in to create an equal number of images. 

while (actualImages.length < 8) {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

if (count[randomNumber] < 4) {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
