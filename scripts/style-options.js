export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles");
    const styles = await response.json();

    let optionsHTML = `<h2>Styles</h2>`;

    const divStringArray = styles.map(
        (style) => {
            return `<div>
                <input type='radio' name='style' value='${style.id}' /> ${style.style}
            </div>`;
        }
    )

    optionsHTML += divStringArray.join("");

    return optionsHTML;
}