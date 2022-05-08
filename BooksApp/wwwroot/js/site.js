// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).on("submit", "#search-form", (e) => {

    e.preventDefault();

    const $form = $(e.target);
    const query = $form.serialize();
    const $searchString = $form.find("input");

    if ($searchString.val() === "") {
        $searchString.addClass("is-invalid")
            .removeClass("is-valid");
        return false;
    } else {
        $searchString.addClass("is-valid")
            .removeClass("is-invalid");
    }

    $form.addClass("was-validated");

    const url = `/Search?${query}`
    const successFunction = (data) => {

        $("#books-details").html(data);
        $form.find("input").val("");
        $("#search-results").show();
        $("#search-results span").text(searchString)

    };

    $.get(url, successFunction);

})