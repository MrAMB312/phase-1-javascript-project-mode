document.addEventListener('DOMContentLoaded', () => main ())

function fetchData() {
    fetch('http://localhost:3000/colors')
    .then(response => response.json())
    .then(colors => {
        loadDefaultColors(colors);

        loadSelectedHexData(colors);
    })
}

function loadDefaultColors(colors) {
    const h1 = document.getElementById('header');

    const nav = document.getElementById('nav');

    const section1 = document.getElementById('section-1');
    const section1subtitle = document.getElementById('section-1-subtitle');

    const section2 = document.getElementById('section-2');
    const section2subtitle = document.getElementById('section-2-subtitle');

    const section3 = document.getElementById('section-3');
    const section3subtitle = document.getElementById('section-3-subtitle');

    const section4 = document.getElementById('section-4');
    const section4subtitle = document.getElementById('section-4-subtitle');

    const hexCodesDiv = document.getElementById('hex-codes-div');

    h1.style.backgroundColor = colors.red.base.hex;
    h1.style.color = colors.red.base_without_alpha_contrasted_text.hex;

    nav.style.backgroundColor = colors.red.grayscale.hex;

    section1.style.backgroundColor = colors.red.base.hex;
    section1.style.color = colors.red.base_without_alpha_contrasted_text.hex;
    section1subtitle.style.backgroundColor = colors.red.complementary.hex;
    section1subtitle.style.color = colors.red.complementary_without_alpha_contrasted_text.hex;

    section2.style.backgroundColor = colors.red.complementary.hex;
    section2.style.color = colors.red.complementary_without_alpha_contrasted_text.hex; 
    section2subtitle.style.backgroundColor = colors.red.base.hex;
    section2subtitle.style.color = colors.red.base_without_alpha_contrasted_text.hex;

    section3.style.backgroundColor = colors.red.base.hex;
    section3.style.color = colors.red.base_without_alpha_contrasted_text.hex; 
    section3subtitle.style.backgroundColor = colors.red.grayscale.hex;
    section3subtitle.style.color = colors.red.grayscale_without_alpha_contrasted_text.hex;

    section4.style.backgroundColor = colors.red.complementary.hex;
    section4.style.color = colors.red.complementary_without_alpha_contrasted_text.hex; 
    section4subtitle.style.backgroundColor = colors.red.grayscale.hex;
    section4subtitle.style.color = colors.red.grayscale_without_alpha_contrasted_text.hex;

    hexCodesDiv.style.backgroundColor = colors.red.grayscale.hex;
    hexCodesDiv.style.color = colors.red.grayscale_without_alpha_contrasted_text.hex;
}

function loadHexData(colors) {
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
}

function main() {
    fetchData();

    document.querySelectorAll('.color-icon').forEach(icon => { 
        icon.addEventListener('mouseover', (event) => {
            event.target.style.color = 'white';
        })

        icon.addEventListener('mouseout', (event) => {
            event.target.style.color = '';
        })
        
        icon.addEventListener('click', (event) => {
            // load colors to respective containers [FETCH]
            
        })
    })
}