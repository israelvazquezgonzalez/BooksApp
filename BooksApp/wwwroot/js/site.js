

$(document).on("submit", "#search-form", (e) => {

    e.preventDefault();

    const $form = $(e.target);
    const searchString = $form.serialize();
    const searchQuery = buildQuery(searchString);
    const url = `/Search/Search?${searchQuery}`
    const $search = $form.find("input");

    if ($search.val() === "") {
        $search.addClass("is-invalid")
            .removeClass("is-valid");
        return false;
    } else {
        $search.addClass("is-valid")
            .removeClass("is-invalid");
    }

    $form.addClass("was-validated");

    const onSucess = (data) => {

        $("#search-results").html(data);
        $(".query-string").html($search.val());
        $("#search-hero").addClass("display-fixed shadow");

    }

    const onFailure = (data) => alert(data);

    const hideLoader = () => {
        $("#loader").hide();
        $(".overlay").hide();
    }

    const onComplete = () => {
        $search.val("");
        $form.removeClass("was-validated");
        $search.removeClass("is-valid");
        hideLoader();
    }

    getRequest(url, onSucess, onFailure, onComplete);
})

$(document).on("click", ".show-more-button", function (e) {

    const $button = $(e.target);
    const target = $button.data("descriptionTarget");
    const contentShort = $button.data("descriptionShort")
    const contentLong = $button.data("descriptionLong")


    if ($button.hasClass("show-less")) {
        $button.html("Show more");
        $(target).html(contentShort);
    } else {
        $button.html("Show less");
        $(target).html(contentLong);
    }

    $button.toggleClass("show-less");

})

$(document).on("click", ".author-link", function (e) {

    e.preventDefault();

    const $link = $(e.target);
    const searchString = $link.data("author");
    const searchQuery = buildQuery(searchString);
    const url = `/Search/Search?inauthor:${searchQuery}`

    const onSucess = (data) => $("#search-results").html(data);

    const onFailure = (data) => alert(data);

    const hideLoader = () => {
        $("#loader").hide();
        $(".overlay").hide();
    }
 
    getRequest(url, onSucess, onFailure, hideLoader)
})

function buildQuery(value) {

    if (value.indexOf(" ") > -1) 
        return value.split(" ").join("+");
    else if (value.indexOf("%20") > -1)
        return value.split("%20").join("+");
    else
        return value;
}

function getRequest(url, onSucess, onFailure, onComplete) {

    const showLoader = () => {
        $("#loader").show();
        $(".overlay").show();
    }

    $.ajax({
        url: url,
        type: "GET",
        contentType: "json",
        beforeSend: showLoader,
        success: onSucess,
        failure: onFailure
    }).done(onComplete);
}
