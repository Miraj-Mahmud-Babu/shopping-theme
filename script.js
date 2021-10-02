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

window.addEventListener("click", function (e) {
  if (!e.target.closest(".main-search-icon")) {
    document.querySelectorAll(".main-search-icon").forEach(function (el) {
      el.classList.remove("search-active");
    });
  }

  if (!e.target.closest(".main-search-icon-header")) {
    document
      .querySelectorAll(".main-search-icon-header")
      .forEach(function (el) {
        el.classList.remove("search-active-header");
        // el.classList.remove("search-icon-header");
      });
  }

  if (
    !e.target.closest(".position-filter-section") &&
    !e.target.closest(".filter_icon")
  ) {
    document.querySelectorAll(".filter_bar").forEach(function (el) {
      el.classList.remove("filter-visible");
    });
  }


// mobile hamburger 

  if (!e.target.closest(".main-search-icon")) {
    document.querySelectorAll(".main-search-icon").forEach(function (el) {
      el.classList.remove("refClass");
    });
  }
});

// mobile dropdown header design



const modalsListItemsMobile = document.querySelector(".modals-list-items-mobile");
const mainParentMobile = document.querySelector(".only-hamburger");

document.addEventListener("click", function (event2) {

    if (!event2.target.closest(".only-hamburger") && !event2.target.closest(".modals-list-items-mobile")) {
        mainParentMobile.classList.remove("refClassMobile");
        modalsListItemsMobile.style.visibility = "hidden";
       
    }

    else if (event2.target.closest(".modals-list-items-mobile")) {
        modalsListItemsMobile.style.visibility = "visible";
        mainParentMobile.classList.add("refClassMobile");
       
    }

    else {
        if (modalsListItemsMobile.style.visibility === "visible") {
            modalsListItemsMobile.style.visibility = "hidden";
            mainParentMobile.classList.remove("refClassMobile");
        }

        else {
            modalsListItemsMobile.style.visibility = "visible";
            mainParentMobile.classList.add("refClassMobile");
        }
    }


});

