var dogSelector = "#empress";
var allEmpress = new Array();
class Empress{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var empress = new Empress("#empress", "images/empress.webp");
    allEmpress.push(empress);

}
$(document).ready(function () {
    initializeArray();

    $(allEmpress[0].theSelector).attr("src", allEmpress[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $(".stuff2").fadeOut().fadeIn();

        $("#third").toggle();

        setInterval(moveSquare, 1000);
        
        
    });
    
});

function moveSquare()
{
    $("button").click(function(){

        $("#square").animate({left:400}).animate({top:400}).animate({left:0}).animate({top:350});
        $("#rect").toggle().animate({left:600}).animate({top:450}).animate({left:25}).animate({top:875});
       
        $(allEmpress[0].theSelector).fadeOut().fadeIn();
               
    });


}