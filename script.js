//elements references
const productsContainer = document.getElementById("ProductsContainer");
const cartContainer = document.getElementById("cartContainer");
// const sample = document.getElementById("sample");
const feedbackElement = document.getElementById("feedback");
const clearCartBtn = document.getElementById("clearCart");
const sortByPriceBtn = document.getElementById("sortByPrice");

//default products
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "phone",
    price: 20000,
  },
  {
    id: 3,
    name: "Tablet",
    price: 5000,
  },
  {
    id: 4,
    name: "smartwatch",
    price: 1000,
  },
  {
    id: 5,
    name: "Headphones",
    price: 500,
  },
];
//empty cart
const cart = [];
//used to reset the timer(user feedback)
let timerId;
// function clearCart() {
//   cart.length = 0;

//   renderCartDetails();
//   updateUserFeedack("Cart is cleared", "success");
// }
clearCartBtn.addEventListener("click", clearCart);
// console.log("clear cart button");
// cart = [];
// cart.length = 0;

// renderCartDetails();
// updateUserFeedack("Cart is cleared", "success");
// function sortByprice() {
//   cart.sort(function (item1, item2) {
//     return item1.price - item2.price;
//   });
//   renderCartDetails();
// }
sortByPriceBtn.addEventListener("click", sortByprice);
// cart.sort(function (item1, item2) {
//   return item1.price - item2.price;
// });
// renderCartDetails();
function clearCart() {
  cart.length = 0;

  renderCartDetails();
  updateUserFeedack("Cart is cleared", "success");
}
function sortByprice() {
  cart.sort(function (item1, item2) {
    return item1.price - item2.price;
  });
  renderCartDetails();
}
function renderProductDetails() {
  products.forEach(function (product) {
    //-------------------method1------------
    // <div class="product-row">
    //       <p>Laptop Rs.50000</p>
    //       <button>Add to cart</button>
    //     </div>

    /* const productRow = `
    <div class="product-row">
    <p>${product.name} - Rs.${product.price}</p>
     <button>Add to cart</button></div>

    `;
  productsContainer.insertAdjacentHTML("beforeend", productRow); */
    // -------------method2--------------------
    const { id, name, price } = product;
    const divElement = document.createElement("div");
    divElement.className = "product-row";
    divElement.innerHTML = `<p>${name} - Rs.${price}</p>
     <button onclick="addToCart(${id})">Add to cart</button>
  `;
    productsContainer.appendChild(divElement);
  });
}
// products.forEach(function (product) {
//   //-------------------method1------------
//   // <div class="product-row">
//   //       <p>Laptop Rs.50000</p>
//   //       <button>Add to cart</button>
//   //     </div>

//   /* const productRow = `
//     <div class="product-row">
//     <p>${product.name} - Rs.${product.price}</p>
//      <button>Add to cart</button></div>

//     `;
//   productsContainer.insertAdjacentHTML("beforeend", productRow); */
//   // -------------method2--------------------
//   const { id, name, price } = product;
//   const divElement = document.createElement("div");
//   divElement.className = "product-row";
//   divElement.innerHTML = `<p>${name} - Rs.${price}</p>
//      <button onclick="addToCart(${id})">Add to cart</button>
//   `;
//   productsContainer.appendChild(divElement);
// });

// function testingfn(value) {
//   console.log("clicked on testing button", value);
// }

// function addToCart(id) {
//   //console.log("add to cart", id);
//   //check if the product is already available in the cart.
//   const isProductAlreadyAddedInTheCart = cart.some(
//     (product) => product.id === id
//   );

//   if (isProductAlreadyAddedInTheCart) {
//     // feedbackElement.textContent = `${name} is already added to the cart`;
//     // const productToAdd = products.find(function (product) {
//     //   return product.id === id;
//     // });
//     // feedbackElement.textContent = /* ${productToAdd.name}  */ `Item already added to the cart`;
//     updateUserFeedack("Item already added to the cart", "error");
//     return;
//   }
//   const productToAdd = products.find(function (product) {
//     return product.id === id;
//   });

//   console.log(productToAdd);
//   cart.push(productToAdd);
//   console.log(cart);
//   renderCartDetails();

//   // const { id: productId, name, price } = productToAdd;
//   // const carItemRow = ` <div class="product-row">
//   //         <p>${name} - Rs.${price}</p>
//   //         <button onclick="removeFromCart(${id})">Remove</button>
//   //       </div>
//   // `;
//   // cartContainer.insertAdjacentHTML("beforeend", carItemRow);
//   //feedbackElement.textContent = `${name} is added to the cart`;
//   updateUserFeedack(`${name} is added to the cart`, "success");
// }

function renderCartDetails() {
  cartContainer.innerHTML = "";
  cart.forEach(function (product) {
    const { id, name, price } = product;

    const carItemRow = ` <div class="product-row">
          <p>${name} - Rs.${price}</p>
          <button onclick="removeFromCart(${id})">Remove</button>
        </div>
  `;
    cartContainer.insertAdjacentHTML("beforeend", carItemRow);
  });
  //   const { id: productId, name, price } = productToAdd;
  // const carItemRow = ` <div class="product-row">
  //         <p>${name} - Rs.${price}</p>
  //         <button onclick="removeFromCart(${id})">Remove</button>
  //       </div>
  // `;
  // cartContainer.insertAdjacentHTML("beforeend", carItemRow);

  // let totalPrice = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   totalPrice += cart[i].price;
  // }
  const totalPrice = cart.reduce(function (acc, curProd) {
    return acc + curProd.price;
  }, 0);
  document.getElementById("totalPrice").textContent = `Rs.${totalPrice}`;
}
//------add to cart function
function addToCart(id) {
  //console.log("add to cart", id);
  //check if the product is already available in the cart.
  const isProductAlreadyAddedInTheCart = cart.some(
    (product) => product.id === id
  );

  if (isProductAlreadyAddedInTheCart) {
    // feedbackElement.textContent = `${name} is already added to the cart`;
    // const productToAdd = products.find(function (product) {
    //   return product.id === id;
    // });
    // feedbackElement.textContent = /* ${productToAdd.name}  */ `Item already added to the cart`;
    updateUserFeedack("Item already added to the cart", "error");
    return;
  }
  const productToAdd = products.find(function (product) {
    return product.id === id;
  });

  console.log(productToAdd);
  cart.push(productToAdd);
  console.log(cart);
  renderCartDetails();

  // const { id: productId, name, price } = productToAdd;
  // const carItemRow = ` <div class="product-row">
  //         <p>${name} - Rs.${price}</p>
  //         <button onclick="removeFromCart(${id})">Remove</button>
  //       </div>
  // `;
  // cartContainer.insertAdjacentHTML("beforeend", carItemRow);
  //feedbackElement.textContent = `${name} is added to the cart`;
  updateUserFeedack(`${productToAdd.name} is added to the cart`, "success");
}
function removeFromCart(id) {
  console.log(id);
  const product = cart.find((product) => product.id === id);
  // const updatedCart = cart.filter(function (product) {
  //   return product.id !== id;
  // });
  const productIndex = cart.findIndex((product) => product.id === id);
  cart.splice(productIndex, 1);
  // console.log(updatedCart);
  // cart = updatedCart;
  //const product = cart.find((product) => product.id === id);
  updateUserFeedack(`${product.name} is removed from the cart`, "error");
  renderCartDetails();
}

// let timerId;
function updateUserFeedack(msg, type) {
  clearTimeout(timerId);
  //type-success(green),error(red)
  feedbackElement.style.display = "block";
  if (type === "success") {
    feedbackElement.style.backgroundColor = "green";
  }
  if (type === "error") {
    feedbackElement.style.backgroundColor = "red";
  }
  feedbackElement.textContent = msg;
  timerId = setTimeout(function () {
    feedbackElement.style.display = "none";
  }, 3000);
}
//console.log(clearCartBtn);

//rendering products
renderProductDetails();
