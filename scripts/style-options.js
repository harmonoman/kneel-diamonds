export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles");
    const styles = await response.json();

    let html = `
        <select value="style">
            <option value"" disabled selected>Choose a style</option>
    `;

    for(const style of styles) {
        html += `<option value"${style.id}">${style.style}`;
    }

    html += `</select>`;

    return html;
}