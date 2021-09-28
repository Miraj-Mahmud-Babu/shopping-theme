

// new function

document.querySelectorAll(".filter_icon").forEach(function (el) {
  el.addEventListener("click", function () {
      console.log("miraj")
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
      console.log("miraj")
    var ele = ev.closest(".search-input-box-design");
    ele.classList.add("filter-visible");
  });
});

// document.querySelector(".icon").addEventListener("click", function(){
//   document.querySelector(".search-input").classList.toggle("active");
// })


document.querySelectorAll(".icon").forEach(function(el){
  el.addEventListener("click", function(){
   el.closest(".main-search-icon").classList.toggle("active");
  })
})