document.addEventListener('DOMContentLoaded', () => 
    document.querySelectorAll('.color-icon').forEach(icon => { 
        icon.addEventListener('mouseover', (event) => {
            event.target.style.color = 'white';
        })

        icon.addEventListener('mouseout', (event) => {
            event.target.style.color = '';
        })
        
        icon.addEventListener('click', (event) => {
            const colorName = event.target.textContent.toLowerCase();
            loadHexData(colorName, colors);
        })
    })
);

let colors = {};

function fetchData() {
    fetch('http://localhost:3000/colors')
    .then(response => response.json())
    .then(colorsData => {
        colors = colorsData;

        const redData = colors.red;
        
        const h1 = document.getElementById('header');
        
        const nav = document.getElementById('nav');
        const redIcon = document.getElementById('red-color-icon');
        
        const section1 = document.getElementById('section-1');
        const section1subtitle = document.getElementById('section-1-subtitle');
        
        const section2 = document.getElementById('section-2');
        const section2subtitle = document.getElementById('section-2-subtitle');
        
        const section3 = document.getElementById('section-3');
        const section3subtitle = document.getElementById('section-3-subtitle');
        
        const section4 = document.getElementById('section-4');
        const section4subtitle = document.getElementById('section-4-subtitle');
        
        const hexCodesDiv = document.getElementById('hex-codes-div');
        
        h1.style.backgroundColor = redData.base.hex;
        h1.style.color = redData.base_without_alpha_contrasted_text.hex;
        
        nav.style.backgroundColor = redData.grayscale.hex;
        redIcon.style.fontWeight = 'bold';
        
        section1.style.backgroundColor = redData.base.hex;
        section1.style.color = redData.base_without_alpha_contrasted_text.hex;
        section1subtitle.style.backgroundColor = redData.complementary.hex;
        section1subtitle.style.color = redData.complementary_without_alpha_contrasted_text.hex;
        
        section2.style.backgroundColor = redData.complementary.hex;
        section2.style.color = redData.complementary_without_alpha_contrasted_text.hex; 
        section2subtitle.style.backgroundColor = redData.base.hex;
        section2subtitle.style.color = redData.base_without_alpha_contrasted_text.hex;
        
        section3.style.backgroundColor = redData.base.hex;
        section3.style.color = redData.base_without_alpha_contrasted_text.hex; 
        section3subtitle.style.backgroundColor = redData.grayscale.hex;
        section3subtitle.style.color = redData.grayscale_without_alpha_contrasted_text.hex;
        
        section4.style.backgroundColor = redData.complementary.hex;
        section4.style.color = redData.complementary_without_alpha_contrasted_text.hex; 
        section4subtitle.style.backgroundColor = redData.grayscale.hex;
        section4subtitle.style.color = redData.grayscale_without_alpha_contrasted_text.hex;
        
        hexCodesDiv.style.backgroundColor = redData.base.hex;
        hexCodesDiv.style.color = redData.base_without_alpha_contrasted_text.hex;
        
        const hexContainer = document.querySelector('#hex-container')
        
        const card = document.createElement('div');
        card.classList.add('card');
        
        const p1 = document.createElement('p');
        p1.textContent = 'Selected Color: Red';
        
        const p2 = document.createElement('p');
        p2.textContent = `Base: ${redData.base.hex}`
        
        const p3 = document.createElement('p');
        p3.textContent = `Complementary: ${redData.complementary.hex}`
        
        const p4 = document.createElement('p');
        p4.textContent = `Grayscale: ${redData.grayscale.hex}`
        
        card.append(p1, p2, p3, p4);
        
        hexContainer.appendChild(card);
    })
}

fetchData();

function loadHexData(colorName, colors) {
    const colorData = colors[colorName];
    
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
    
    h1.style.backgroundColor = colorData.base.hex;
    h1.style.color = colorData.base_without_alpha_contrasted_text.hex;
    
    nav.style.backgroundColor = colorData.grayscale.hex;
    document.querySelectorAll('.color-icon').forEach(icon => {
        icon.style.fontWeight = '';
        if (icon.textContent.toLowerCase() === colorName) {
            icon.style.fontWeight = 'bold';
        }
    })
    
    section1.style.backgroundColor = colorData.base.hex;
    section1.style.color = colorData.base_without_alpha_contrasted_text.hex;
    section1subtitle.style.backgroundColor = colorData.complementary.hex;
    section1subtitle.style.color = colorData.complementary_without_alpha_contrasted_text.hex;
    
    section2.style.backgroundColor = colorData.complementary.hex;
    section2.style.color = colorData.complementary_without_alpha_contrasted_text.hex; 
    section2subtitle.style.backgroundColor = colorData.base.hex;
    section2subtitle.style.color = colorData.base_without_alpha_contrasted_text.hex;
    
    section3.style.backgroundColor = colorData.base.hex;
    section3.style.color = colorData.base_without_alpha_contrasted_text.hex; 
    section3subtitle.style.backgroundColor = colorData.grayscale.hex;
    section3subtitle.style.color = colorData.grayscale_without_alpha_contrasted_text.hex;
    
    section4.style.backgroundColor = colorData.complementary.hex;
    section4.style.color = colorData.complementary_without_alpha_contrasted_text.hex; 
    section4subtitle.style.backgroundColor = colorData.grayscale.hex;
    section4subtitle.style.color = colorData.grayscale_without_alpha_contrasted_text.hex;
    
    hexCodesDiv.style.backgroundColor = colorData.base.hex;
    hexCodesDiv.style.color = colorData.base_without_alpha_contrasted_text.hex;
    
    const hexContainer = document.querySelector('#hex-container')

    const card = document.createElement('div');
    card.classList.add('card');
    
    const p1 = document.createElement('p');
    p1.textContent = `Selected Color: ${colorName.charAt(0).toUpperCase() + colorName.slice(1)}`;
    
    const p2 = document.createElement('p');
    p2.textContent = `Base: ${colorData.base.hex}`
    
    const p3 = document.createElement('p');
    p3.textContent = `Complementary: ${colorData.complementary.hex}`
    
    const p4 = document.createElement('p');
    p4.textContent = `Grayscale: ${colorData.grayscale.hex}`
    
    card.append(p1, p2, p3, p4);
    
    hexContainer.textContent = '';
    hexContainer.appendChild(card);
}