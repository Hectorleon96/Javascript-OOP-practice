class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" />
          <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}<p/>
              <button>Add to Cart</button>
          </div>
      </div>
    `;

    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://www.ikea.com/mx/en/images/products/skogsfraeken-pillow-low__0970237_ph172412_s5.jpg?f=s",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://carpetcentre.com/cdn/shop/files/AR109398copy.webp?v=1752214521",
      "A soft pillow",
      19.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      prodList.append(productItem.render());
    }

    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
