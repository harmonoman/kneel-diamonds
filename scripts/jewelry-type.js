import { setJewelryChoice } from "./transient-state.js";

export const JewelryType = async () => {
    const pieces = await fetch ("http://localhost:8088/jewelries").then(res => res.json());
    
    let optionsHTML = "<div>"
    
    const piecesArray = pieces.map((piece) => {
        return `<input type='radio' name='jewelry' value=${piece.id} /> ${piece.piece}`
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