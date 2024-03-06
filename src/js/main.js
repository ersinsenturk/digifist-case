const items = document.querySelectorAll(".product-slider-item");

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    const selectedColor = event.target;
    if (selectedColor.classList.contains("color")) {
      event.preventDefault();
      item.querySelectorAll(".color").forEach((color) => {
        color.classList.remove("selected");
      });
      selectedColor.classList.add("selected");
    }
  });
});

const formatCurrency = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const prices = document.querySelectorAll(".product-price");
prices.forEach((price) => {
  price.innerHTML = formatCurrency(price.dataset.price);
});
