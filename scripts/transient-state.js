const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

export const setMetalChoice = (metalChoice) => {
    transientState.metalId = metalChoice;
}

export const setSizeChoice = (sizeChoice) => {
    transientState.sizeId = sizeChoice;
}

export const setStyleChoice = (styleChoice) => {
    transientState.styleId = styleChoice;
}

export const resetTransientState = () => {
    transientState.metalId = 0;
    transientState.sizeId = 0;
    transientState.styleId = 0;
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions);

    resetTransientState();

    document.dispatchEvent(new CustomEvent("newOrderPlaced"));
}