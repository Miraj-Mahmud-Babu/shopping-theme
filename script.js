// new function

document.querySelectorAll(".filter_icon").forEach(function (el) {
  el.addEventListener("click", function () {
    console.log("miraj");
    var element = el.closest(".filter_bar");
    element.classList.add("filter-visible");
  });
});

document.querySelectorAll(".cross-btn").forEach(function (el) {
  el.addEventListener("click", function () {
    var element = el.closest(".filter_bar");
    element.classList.remove("filter-visible");
  });
});

// search bar design

document.querySelectorAll(".search_icon").forEach(function (ev) {
  ev.addEventListener("click", function (ev) {
    console.log("miraj");
    var ele = ev.closest(".search-input-box-design");
    ele.classList.add("filter-visible");
  });
});

document.querySelectorAll(".search-icon").forEach(function (el) {
  el.addEventListener("click", function () {
    el.closest(".main-search-icon").classList.toggle("search-active");
  });
});

document.querySelectorAll(".search-icon-header").forEach(function (ev) {
  ev.addEventListener("click", function () {
    ev.closest(".main-search-icon-header").classList.toggle(
      "search-active-header"
    );
  });
});

// moduls item body search bar
const modalsListItemsBody = document.querySelector(".search-input");
console.log(modalsListItemsBody, this);

document.querySelectorAll(".search-input").forEach(function (bev) {
  document.addEventListener("click", function () {
    if (!bev.target.closest(".main-search-icon")) {
      modalsListItemsBody.style.visibility = "hidden";
    } else {
      modalsListItemsBody.style.visibility = "visible";
    }
  });
});

// moduls item header search bar
const modalsListItems = document.querySelector(".search-input-header");
// console.log(modalsListItems);

document.querySelectorAll(".search-input").forEach(function () {
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".main-search-icon-header")) {
      modalsListItems.style.visibility = "hidden";
    } else {
      modalsListItems.style.visibility = "visible";
    }
  });
});
