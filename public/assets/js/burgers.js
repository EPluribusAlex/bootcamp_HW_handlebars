$(function() {
  
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    var newDevouredState = {
      eaten: newDevoured
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured", newDevoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#ca").val().trim(),
      eaten: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

});