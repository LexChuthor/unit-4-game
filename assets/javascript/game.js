
var scoreToWin = 0;
var currentScore = 0;
var win = 0;
var losses = 0;

function reset() {
    scoreToWin = Math.floor(50 + Math.random() * 50);
    $("#scoreReq").text(scoreToWin.toString());
     var crystalValue = [];
    currentScore = 0;
    $("#currentScore").text(currentScore);
    $(".crystalContainer").empty();
    for (var i = 0; i < 4; i++) {
        var n = Math.floor(1 + Math.random() * 9);
        crystalValue.push(n);  
    } 
    console.log(crystalValue);
    
    for (var i = 0; i < crystalValue.length; i++) {
        var crystalButton = $("<img>");
        crystalButton.addClass("crystal-Button");
        crystalButton.attr("src", "assets/images/crystal-1.jpg");
        crystalButton.attr("value", crystalValue[i]);
        $(".crystalContainer").append(crystalButton);
    }       
        $(".crystal-Button").css("width", "150");
        $(".crystal-Button").css("height", "150");
}

reset();

$(document).on("click", (".crystal-Button"), function () {
    var crystalValue = ($(this).attr("value"));
    currentScore += parseInt(crystalValue);
    $("#currentScore").text(currentScore);
    if (currentScore === scoreToWin) {
        alert("You win!");
        win++;
        $("#wins").text(win);
        reset();
    }
    if (currentScore > scoreToWin) {
        alert("You lose");
        losses++;
        $("#losses").text(losses);
        reset();
    }
})


