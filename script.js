const products = [
    { name: 'Camiseta', price: 50, quantity: 10 },
    { name: 'Calça', price: 100, quantity: 5 },
    { name: 'Tênis', price: 200, quantity: 3 },
    { name: 'Jaqueta', price: 150, quantity: 2 },
    { name: 'Boné', price: 30, quantity: 15 },
  ];
  
  
  let cart = [];
  
  
  function displayProducts() {
    const productList = document.getElementById('lista-produtos');
    productList.innerHTML = '';
    products.forEach((product, index) => {
      productList.innerHTML += `<li>${product.name} - R$${product.price} (Estoque: ${product.quantity}) <button onclick="addToCart(${index})">Adicionar ao Carrinho</button></li>`;
    });
  }
  

function searchProduct() {
    const searchInput = document.getElementById('barra-pesquisa').value.trim().toLowerCase();
    const result = products.find(product => product.name.toLowerCase() === searchInput);
    const productList = document.getElementById('lista-produtos');
    const searchResult = document.getElementById('resultado-pesquisa');
  
  
    productList.innerHTML = '';
  
    if (result) {
  
      productList.innerHTML = `<li>${result.name} - R$${result.price} (Estoque: ${result.quantity}) <button onclick="addToCart(${products.indexOf(result)})">Adicionar ao Carrinho</button></li>`;
      searchResult.innerHTML = ''; 
    } else {
  
      searchResult.innerHTML = 'Produto não encontrado';
    }
  }
  
  
  function addToCart(index) {
    const product = products[index];
    if (product.quantity > 0) {
      cart.push({ ...product, quantity: 1 });
      product.quantity -= 1;
      displayProducts();
      displayCart();
    } else {
      alert('Produto fora de estoque!');
    }
  }
  

  function removeFromCart(index) {
    const productInCart = cart[index];
    const originalProduct = products.find(p => p.name === productInCart.name);
    originalProduct.quantity += 1;
    cart.splice(index, 1);
    displayProducts();
    displayCart();
  }
  

  function displayCart() {
    const cartList = document.getElementById('carrinho');
    const cartTotal = document.getElementById('preço-total');
    cartList.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      cartList.innerHTML += `<li>${item.name} - R$${item.price} <button onclick="removeFromCart(${index})">Remover</button></li>`;
      total += item.price;
    });
  
    cartTotal.innerHTML = `Total: R$${total}`;
  }
  
  
  function sortCart() {
    cart.sort((a, b) => a.price - b.price);
    displayCart();
  }
  

  displayProducts();
  