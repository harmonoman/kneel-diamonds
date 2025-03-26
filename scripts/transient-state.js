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