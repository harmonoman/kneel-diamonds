import { getTransientState, setJewelryChoice } from "./transient-state.js";

export const JewelryType = async () => {
    const pieces = await fetch ("http://localhost:8088/jewelries").then(res => res.json());

    const state = getTransientState();
    
    let optionsHTML = "<div>"
    
    const piecesArray = pieces.map((piece) => {
        const isChecked = state.jewelryId === piece.id ? "checked" : "";
        return `<input type='radio' name='jewelry' value=${piece.id} ${isChecked} /> ${piece.piece}`
    }).join("");

    optionsHTML += piecesArray + "</div>"

    return optionsHTML;
}

const handlePieceChoice = (event) => {
    if (event.target.name === "jewelry") {
        setJewelryChoice(parseInt(event.target.value));
    }
}

document.addEventListener("change", handlePieceChoice);