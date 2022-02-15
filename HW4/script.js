function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "Left")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice2").style.display="block";
                document.getElementById("btnSubmit2").style.display="block";
                document.getElementById("mainImage").src = "river.jpg"
                myQuestion.innerHTML = "You head left for what seems like forever and come across a river. Do you follow the river right or go straight?";
            }
            else if(myChoice === "Right")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice3").style.display="block";
                document.getElementById("btnSubmit3").style.display="block";
                document.getElementById("mainImage").src = "canyon.jpg"
                myQuestion.innerHTML = "You head right for a short time and come across a canyon. Do you follow the canyon left or go right";
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Enter Left or Right.";
            }
        
        }
        function getChoice2()
        {
            var answer = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("question");
            if(answer === "straight")
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";
                
                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block";
                document.getElementById("mainImage").src = "bear.png"
                myQuestion.innerHTML = "You travel across the river to be met by a bear. You put up a good fight, but no one beats a bear.";
            }
            else if(answer === "right")
            {
                document.getElementById("choice2").style.display="none";
                document.getElementById("btnSubmit2").style.display="none";

                document.getElementById("choice4").style.display="block";
                document.getElementById("btnSubmit4").style.display="block";
                document.getElementById("mainImage").src = "gatorhunters.jpeg"
                myQuestion.innerHTML = "You continue following the river and meet gator hunters that rescue you.";
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Enter straight or right.";
            }
        }

        function getChoice3()
        {
            var answer = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("question");
            if(answer === "left")
            {
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";

                document.getElementById("choice5").style.display="block";
                document.getElementById("btnSubmit5").style.display="block";
                document.getElementById("mainImage").src = "nightforest.jpg"
                myQuestion.innerHTML = "You head left for hours and end up getting lost as night comes around. ";
            }
            else if(answer === "right")
            {
                document.getElementById("choice3").style.display="none";
                document.getElementById("btnSubmit3").style.display="none";

                document.getElementById("choice5").style.display="block";
                document.getElementById("btnSubmit5").style.display="block";
                document.getElementById("mainImage").src = "mountainclimber.jpg"
                myQuestion.innerHTML = "As you follow the canyon to the right, you come across mountain climbers that rescue you."
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Enter left or right.";
            }
        }

        function getChoice4()
        {
            var answer = document.getElementById("choice4").value;
            var myQuestion = document.getElementById("question");
            if(answer === "restart")
            {
                document.getElementById("choice4").style.display="none";
                document.getElementById("btnSubmit4").style.display="none";
                
                document.getElementById("choice").style.display="block";
                document.getElementById("btnSubmit").style.display="block";
                document.getElementById("mainImage").src = "forest.jpeg"
                myQuestion.innerHTML = "You are stranded out in the middle of the forest. As you look around you see moss on trees to your left and yellow mushrooms on your right. Which way do you head, Left or Right?";
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Enter left or right.";
            }
        }

        function getChoice5()
        {
            var answer = document.getElementById("choice5").value;
            var myQuestion = document.getElementById("question");
            if(answer === "restart")
            {
                document.getElementById("choice5").style.display="none";
                document.getElementById("btnSubmit5").style.display="none";
                
                document.getElementById("choice").style.display="block";
                document.getElementById("btnSubmit").style.display="block";
                document.getElementById("mainImage").src = "forest.jpeg"
                myQuestion.innerHTML = "You are stranded out in the middle of the forest. As you look around you see moss on trees to your left and yellow mushrooms on your right. Which way do you head, Left or Right?";
            }
            else
            {
                myQuestion.innerHTML = "Invalid answer. Enter left or right.";
            }
        }
