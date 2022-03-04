This weeks homework was a bit more challenging than previous weeks. I was struggling with switching my "blank images" with actual images when the user clicked the image. I looked at your code and it made a lot of sense, so I tried using your code to see if I could solve my problem, but I couldn't. I have 2 images appearing twice in my table, but can't get more images to fill the other 6 spots in the table. The blank images all work and fill up every spot in the table.  

This was the funtion that was giving me the most struggles I believe.


var actualImages = new Array();

function createRandomImageArray()
{
    var actualImagePath = ["images/Mario.png", "images/Luigi.png", "images/Toad.png", "images/Peach.png", "images/Bowser.png"];
    
    var count = [0,0];
    
    while(actualImages.length < 4)
    {
        
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }    
}

I've tried changing the 4 in this 'while(actualImages.length < 4)' and it crashes. What I've thought is that this is allowing for more images to be put into the actualImages array variable, but it crashes. 

I understand everything that is going on inside the code except for this.  