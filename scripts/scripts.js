"use strict";

$('#hamburger-menu').on("click", function () {
    $('#openBgrMenu').removeClass("hidden");
    $('main').addClass("hidden");
    $('footer').addClass("hidden");
});

$('#closeBgr').on("click", function () {
    $('#openBgrMenu').addClass("hidden");
    $('main').removeClass("hidden");
    $('footer').removeClass("hidden");
});

$('#hamburger-menu-desktop').on("click", function () {
    $('#openBgrMenuDesktop').removeClass("hidden");
    $('main').addClass("hidden");
    $('footer').addClass("hidden");
});

$('#closeBgrDesktop').on("click", function () {
    $('#openBgrMenuDesktop').addClass("hidden");
    $('main').removeClass("hidden");
    $('footer').removeClass("hidden");
});


$('#searchIcon').on("click", function () {
    $('#searchBar').toggleClass("hidden");
});

$('#searchIconDT').on("click", function () {
    $('#searchBarDT').toggleClass("hidden");
});

