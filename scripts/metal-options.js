export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals");
    const metals = await response.json();

    let html = `
        <select id="metal">
            <option value="" disabled selected>Choose a metal</option>
    `;

    for(const metal of metals) {
        html += `<option value="${metal.id}">${metal.metal}</option>`;
    }
    
    html += `</select>`;

    return html;
}