const transientState = {
    metal: 0,
    size: 0,
    style: 0
}

export const setMetalChoice = (metalChoice) => {
    transientState.metal = metalChoice;
    console.log("transient state: ", transientState);
}

export const setSizeChoice = (sizeChoice) => {
    transientState.size = sizeChoice;
    console.log("transient state: ", transientState);

}

export const setStyleChoice = (styleChoice) => {
    transientState.style = styleChoice;
    console.log("transient state: ", transientState);

}

export const resetTransientState = () => {
    transientState.metal = 0;
    transientState.size = 0;
    transientState.style = 0;
}

export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions);
    console.log("response: ", response)

    resetTransientState();
}