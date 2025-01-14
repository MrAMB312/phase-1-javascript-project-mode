document.addEventListener('DOMContentLoaded', () => console.log('fetchData'))

function fetchData() {
    fetch()
    .then(response => response.json())
    .then((data) => console.log(data))
}