document.addEventListener('DOMContentLoaded', () => main ())

function fetchData() {
    fetch('http://localhost:3000/colors')
    .then(response => response.json())
    .then(colors =>
        Object.keys(colors).forEach(colorName => {
            const hexContainer = document.querySelector('#hex-container')
            const colorData = colors[colorName];

            const card = document.createElement('div');
            card.classList.add('card');

            const h3 = document.createElement('h3');
            h3.textContent = colorName.charAt(0).toUpperCase() + colorName.slice(1);

            const p1 = document.createElement('p');
            p1.textContent = `Base: ${colorData.base.hex}`

            const p2 = document.createElement('p');
            p2.textContent = `Complementary: ${colorData.complementary.hex}`

            const p3 = document.createElement('p');
            p3.textContent = `Grayscale: ${colorData.grayscale.hex}`

            card.append(h3, p1, p2, p3);

            hexContainer.appendChild(card);
        })
    )
}

const redColorIcon = document.getElementById('red-color-icon');
const orangeColorIcon = document.getElementById('orange-color-icon');
const yellowColorIcon = document.getElementById('yellow-color-icon');
const greenColorIcon = document.getElementById('green-color-icon');
const blueColorIcon = document.getElementById('blue-color-icon');

redColorIcon.addEventListener('click', (event) => {
    fetch('http://localhost:3000/colors')
    .then(response => response.json())
    .then(data => {
        const redBaseColor = data.colors.red.base.hex;
        const redContrastedTextColor = data.colors.red.base_without_alpha_contrasted_text.hex;

        const h1 = document.getElementsByClassName('h1');

        h1.style.color = redBaseColor;
        h1.textContent = redContrastedTextColor;
    })
})

orangeColorIcon.addEventListener('click', (event) => {

})

yellowColorIcon.addEventListener('click', (event) => {

})

greenColorIcon.addEventListener('click', (event) => {

})

blueColorIcon.addEventListener('click', (event) => {

})


function main() {
    fetchData();
}