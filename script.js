const navLinks = document.querySelector(".nav_links");

function openNav() {
  navLinks.style.width = "100%";
}

function closeNav() {
  navLinks.style.width = "0%";
}

// Portfolio Filtering Functionality

var $galleryContainer = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});

$(".button-group .button").on("click", function () {
  $(".button-group .button").removeClass("active");
  $(this).addClass("active");

  var value = $(this).attr("data-filter");
  $galleryContainer.isotope({
    filter: value,
  });
});
