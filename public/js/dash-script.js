$(document).ready(function () {
    console.log("hi");

    $.get("/api/user_data").then(function (data) {
        //console.log(data.id)
        $(".fulfill-btn").on("click", function (event) {
            //see button - grab data-id 
            const id = $(this).data("id");

            // console.log(userid);

            const fulfilledState = {
                fulfilled: true,
                fulfilledBy: data.id
            }

            // console.log(id);
            console.log(fulfilledState);


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

        $(".claim-btn").on("click", function (event) {
            //see button - grab data-id 
            const id = $(this).data("id");

            const claimedState = {
                claimed: true,
                claimedBy: data.id
            }

            console.log(id);
            console.log(claimedState);

            // Send the PUT request to update request to claimed when fulfill button is clicked
            $.ajax("/api/inventory/" + id, {
                type: "PUT",
                data: claimedState
            }).then(
                function () {
                    console.log("changed claimed to true");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });

        $(".donate-form").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            const newInv = {
                s_itemCat: $("#i-cat").val(),
                s_item: $("#i-food").val().trim(),
                s_amount: $("#i-amount").val().trim(),
                UserId: data.id
            };

            // Send the POST request to inventory
            $.ajax("/api/inventory", {
                type: "POST",
                data: newInv
            }).then(function () {
                console.log(`added new inventory: ${newInv}`);
                // Reload the page to get the updated list
                location.reload();
            });
        });

        $(".req-form").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            const newRequest = {
                r_itemCat: $("#r-cat").val(),
                r_item: $("#r-food").val().trim(),
                r_amount: $("#r-amount").val().trim(),
                UserId: data.id
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

})
