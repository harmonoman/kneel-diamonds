import { setMetalChoice, getTransientState } from "./transient-state.js";

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals");
    const metals = await response.json();

    const state = getTransientState();

    let optionsHTML = "<h2>Metals</h2>"

    // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
            const isChecked = state.metalId === metal.id ? "checked" : "";
            return `<div>
                <input type='radio' name='metal' value='${metal.id}' ${isChecked} /> ${metal.metal}
            <div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("");

    return optionsHTML;
}

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value));
    }
}

document.addEventListener("change", handleMetalChoice);