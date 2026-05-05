let total = 0;

function addToCart(item, price) {
    const cartItems = document.getElementById("cartItems");

    let li = document.createElement("li");
    li.textContent = item + " - $" + price;
    cartItems.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}