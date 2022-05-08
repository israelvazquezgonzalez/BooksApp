// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).on("submit", "#search-form", (e) => {

    e.preventDefault();

    const $form = $(e.target);
    const query = $form.serialize();
    const url = `Search/Search?${query}`
    const $searchString = $form.find("input");

    const closeLoader = () => {
        $("#loader").hide();
        $(".overlay").hide();
    };

    const openLoader = () => {
        $("#loader").show();
        $(".overlay").show();
    };

    const success = (response) => {

        $("#books-details").html(response);
        $form.find("input").val("");
        $("#search-results").show();
        $("#search-results span").text(searchString)
    };

    const errorHandler = (result, status, xhr) => {
        $("#no-results Message").html("Result: " + status + " " + result + " " + xhr.status + " " + xhr.statusText)
    }

    if ($searchString.val() === "") {
        $searchString.addClass("is-invalid")
            .removeClass("is-valid");
        return false;
    } else {
        $searchString.addClass("is-valid")
            .removeClass("is-invalid");
    }

    $form.addClass("was-validated");

    openLoader();

    $.get(url, success).fail(errorHandler).done(closeLoader());

})