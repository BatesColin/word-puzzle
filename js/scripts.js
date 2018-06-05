$(document).ready(function(){
  $("#Sentence-form").submit(function(event) {
    event.preventDefault();
    var inputtedSentence = $("input#sentence").val();

    var characters = [];
    for (i = 0; i < inputtedSentence.length; i++){
      characters.push(inputtedSentence.substring(i,i+1));
      if (characters[i] === "a" || characters[i] === "e" || characters[i] === "i" || characters[i] === "o" || characters[i] === "u") {
        characters.pop();
        characters.push("-");
      }
    }
    var puzzle = characters.join("");
    $("#Puzzle-here").prepend("<p>" + puzzle + "</p>");
  });
});
