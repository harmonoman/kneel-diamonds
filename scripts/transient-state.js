const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0,
    jewelryId: 0
}

export const setMetalChoice = (metalChoice) => {
    transientState.metalId = metalChoice;
    document.dispatchEvent(new CustomEvent("newOrderPlaced"));
}

export const setSizeChoice = (sizeChoice) => {
    transientState.sizeId = sizeChoice;
    document.dispatchEvent(new CustomEvent("newOrderPlaced"));
}

export const setStyleChoice = (styleChoice) => {
    transientState.styleId = styleChoice;
    document.dispatchEvent(new CustomEvent("newOrderPlaced"));
}

export const setJewelryChoice = (jewelryChoice) => {
    transientState.jewelryId = jewelryChoice;
    document.dispatchEvent(new CustomEvent("newOrderPlaced"));
}

export const getTransientState = () => {
    return structuredClone(transientState);
}

export const resetTransientState = () => {
    transientState.metalId = 0;
    transientState.sizeId = 0;
    transientState.styleId = 0;
    transientState.jewelryId = 0;
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