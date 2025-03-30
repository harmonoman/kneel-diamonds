import { placeOrder } from "./transient-state.js"

const handlePlaceOrderClick = async (clickEvent) => {
    if(clickEvent.target.id === "order") {
         await placeOrder();
    }
}

export const saveOrder = () => {
    document.addEventListener("click", handlePlaceOrderClick)

    return `<div><button id="order">Place Order</button></div>`
}