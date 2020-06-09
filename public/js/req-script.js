$(document).ready(function () {


    $(".fulfill-btn").on("click", function (event) {
        //see button - grab data-id 
        const id = $(this).data("id");

        const fulfilledState = {
            fulfilled: true
        }

        // Send the PUT request to update request to fulfilled when fulfill button is clicked
        $.ajax("/api/requests/" + id, {
            type: "PUT",
            data: fulfilledState
        }).then(
            function () {
                console.log("changed fulfilled to true");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".req-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newRequest = {
            r_itemCat: $("#r-cat").val(),
            r_item: $("r-food").val().trim(),
            r_amount: $("#r-amount").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/requests", {
            type: "POST",
            data: newRequest
        }).then(function () {
            console.log(`added new request: ${newRequest}`);
            // Reload the page to get the updated list
            location.reload();
        });
    });

});
