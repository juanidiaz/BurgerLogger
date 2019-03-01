// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-status").on("click", function (event) {
    var id = $(this).data("id");
    var newStatus = $(this).text().trim();
    console.log('newStatus: ' + newStatus);

    if (newStatus === "DEVOUR BURGER") {
      var newStatusState = {
        devoured: 1
      }
    } else if (newStatus === "REGURGITATE") {
      var newStatusState = {
        devoured: 0
      }
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newStatusState
    }).then(
      function () {
        console.log("Burger ", newStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgerName: $("#order").val().trim(),
    };

    console.log("CREATING NEW BURGER");
    console.log("    The burger is " + newBurger.burgerName);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Your new " + newBurger + " has been prepared for you");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});