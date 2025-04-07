import { getTransientState, setStyleChoice } from "./transient-state.js";

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles");
    const styles = await response.json();

    const state = getTransientState();

    let optionsHTML = `<h2>Styles</h2>`;

    const divStringArray = styles.map(
        (style) => {
            const isChecked = state.styleId === style.id ? "checked" : "";
            return `<div>
                <input type='radio' name='style' value='${style.id}' ${isChecked} /> ${style.style}
            </div>`;
        }
    )

    optionsHTML += divStringArray.join("");

    return optionsHTML;
}

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value));
    }
}

document.addEventListener("change", handleStyleChoice);