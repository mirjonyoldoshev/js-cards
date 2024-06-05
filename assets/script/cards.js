const $cards = document.querySelector(".product-cards");

fetch("https://api.escuelajs.co/api/v1/products")
  .then((response) => response.json())
  .then((products) => renderproduct(products));

const renderproduct = (products) => {
  products.forEach((product) => {
    console.log(product);
    const $div = document.createElement("div");

    $div.className = "product-card";
    $div.innerHTML = `
            <img class="product-img "  src="${product.images[0]}">
            <h2 class="product-title">${product.title}</h2>         
            <p class="product-description">${product.description}</p>
            <div class="product-card-footer">
                <strong class="product-price">${product.price} $</strong>
                <div class="btn-item">
                    <div class="bascet-item">   
                        <button class="basket-btn"><i class="bi bi-cart"></i></button>
                        <button class="basket-check-btn hidden"><i class="bi bi-cart-check"></i></button>
                    </div>
                    <button class="delete-btn"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        `;
    $cards.append($div);

    const $itemBtn = $div.querySelectorAll(".bascet-item");
    const $productPrice = $div.querySelector(".product-price")
    const $deleteBtn = $div.querySelector(".delete-btn")



    $deleteBtn.addEventListener("click", () => {
        $productPrice.classList.toggle("price-delete-color");
    });

    $itemBtn.forEach(($itemBtn) => {
      $itemBtn.addEventListener("click", (event) => {
        const $btnItem = event.currentTarget;
        $btnItem.firstElementChild.classList.toggle("hidden");
        $btnItem.lastElementChild.classList.toggle("hidden");
        $productPrice.classList.toggle("price-check-color")
        
      });
    });


   
  });
};


