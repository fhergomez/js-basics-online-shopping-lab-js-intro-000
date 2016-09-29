var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({ price:item });

  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
  }
  var itemAndPrices = [];

  for (var i = 0;i > cart.length;i++) {
    var items =
    var prices =
  }
  return console.log();
}
