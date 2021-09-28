document.querySelectorAll(".responsive_product .product_wishlist").forEach(function (el) {
    el.addEventListener("click", function () {
        el.classList.toggle("product-wished");
    })
})


// last update

document.querySelectorAll(".responsive_product").forEach(function(el){
    el.addEventListener("click",function(el1){
        if(!(el1.target.closest(".product_wishlist")) &&  !(el1.target.closest(".product_quick_view")) &&  !(el1.target.closest(".product_add_cart")) ){
        // if(!(el1.target.closest(".product_wishlist")) && !(el1.target.closest(".product_add_cart")) ){
          alert(this.querySelector(".ptoduct_title").innerText)
        }
    })
})





// document.querySelectorAll(".search_icon .search_icon").forEach(function (el) {
//     el.addEventListener("click", function () {
//         el.classList.toggle("icon-toggle");
//         console.log('miraj');
//     })
// })




// document.querySelectorAll(".search_icon").forEach(function (el) {
//     el.addEventListener("click", function () {
//         console.log("miraj vai")
//       var element = el.closest(".filter_bar");
//       element.classList.add("filter-visible");
//     });
//   });
  
//   document.querySelectorAll(".cross-btn").forEach(function (el) {
//     el.addEventListener("click", function () {
//       var element = el.closest(".filter_bar");
//       element.classList.remove("filter-visible");
//     });
//   });
  
