$(document).ready(function(){
    $("button").click(function(){
      $.getJSON("data/USPop.json", function(result){
        $.each(result, function(i, field){
          $("div").append(field + "<br> ");
        });
      });
    });
  });