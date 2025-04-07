import { getTransientState, setSizeChoice } from "./transient-state.js";

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes");
    const sizes = await response.json();

    const state = getTransientState();

    let optionsHTML = `<h2>Sizes</h2>`;

    const divStringArray = sizes.map(
        (size) => {
            const isChecked = state.sizeId === size.id ? "checked" : "";
            return `<div>
                <input type='radio' name='size' value='${size.id}' ${isChecked} /> ${size.carets}
            </div>`;
        }
    )

    optionsHTML += divStringArray.join("");

    return optionsHTML;
}

export const handleSizeChoice = (event) => {
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value));
    }
}

document.addEventListener("change", handleSizeChoice);