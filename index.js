document.addEventListener('DOMContentLoaded', () => console.log('fetchData'))

function fetchData() {
    fetch('http://localhost:3000/colors')
    .then(response => response.json())
    .then((data) => console.log(data))
}