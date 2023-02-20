(function () {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
  });
})();
//
(function () {
  document.querySelector(".menu_open").addEventListener("click", () => {
    document
      .querySelector(".menu-catalog_sub-menu")
      .classList.toggle("menu-catalog_sub-menu_active");
  });
})();

//

(function () {
  let elements = document.querySelectorAll(".filter-btn");
  console.log(elements);
  elements.forEach((item) => {
    item.addEventListener("click", function () {
      console.log(this);
      this.classList.toggle("filter-btn_open");
      this.closest(".filter-category").classList.toggle("active");
    });
  });
})();
