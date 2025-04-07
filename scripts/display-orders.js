export const FetchAndDisplayOrders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=style&_expand=size&_expand=metal&_expand=jewelry")
    const orders = await response.json();

    let ordersHTML = orders.map((order) => {

        const jewelryMultiplier = order.jewelry.multiplier;

        let totalPrice = ((order.style.price + order.size.price + order.metal.price) * jewelryMultiplier).toLocaleString("en-US", { style: "currency", currency: "USD" });

        return `
        <div class="order">
            <p><strong>Order #${order.id} cost ${totalPrice}</strong></p>
        </div>`
    }).join("");

    return ordersHTML;
}
