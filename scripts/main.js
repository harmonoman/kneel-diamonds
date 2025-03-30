import { MetalOptions } from "./metal-options.js";
import { saveOrder } from "./save-order.js";
import { SizeOptions } from "./size-options.js";
import { StyleOptions } from "./style-options.js";

const container = document.querySelector("#container");

const render = async () => {
    const metalOptionsHTML = await MetalOptions();
    const sizeOptionsHTML = await SizeOptions();
    const styleOptionsHTML = await StyleOptions();
    const placeOrderButton = saveOrder();

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices_metals options">
                ${metalOptionsHTML}
            </section>

            <section class="choices_sizes options">
                ${sizeOptionsHTML}
            </section>

            <section class="choices_styles options">
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrderButton}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
    container.innerHTML = composedHTML;
}

render();