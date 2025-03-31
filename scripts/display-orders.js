export const FetchAndDisplayOrders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=style&_expand=size&_expand=metal")
    const orders = await response.json();

    let ordersHTML = orders.map((order) => {

        const stylePrice = order.style.price.toLocaleString("en-US", { style: "currency", currency: "USD" });
        const sizePrice = order.size.price.toLocaleString("en-US", { style: "currency", currency: "USD" });
        const metalPrice = order.metal.price.toLocaleString("en-US", { style: "currency", currency: "USD" });

        return `
        <div class="order">
            <p><strong>Order #${order.id}</strong></p>
            <p>Style:  ${order.style.style} (${stylePrice})</p>
            <p>Size: ${order.size.carets} (${sizePrice})</p>
            <p>Metal: ${order.metal.metal} (${metalPrice})</p>
        </div>`
    }).join("");

    return ordersHTML;
}
