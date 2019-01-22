$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var blanks = ["fruits", "vegetables", "meat", "dairy", "carbs"];

    var caps = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val().toUpperCase();
    

      caps.push(userInput);
    });

    caps.sort();
    caps.forEach(function(cap) {
      $("ul").append("<li>" + cap + "</li>");
    });

    console.log(caps);
    $("#list").show();

// $("." + blank).text(userInput).val();
  });
});
