export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes");
    const sizes = await response.json();

    let html = `
        <select id="size">
            <option value="" disabled selected>Choose a size</option>
    `;

    for(const size of sizes) {
        html += `<option value"${size.id}">${size.carets}</option>`;
    }

    html += `</select>`;

    return html;
}