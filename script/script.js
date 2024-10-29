const listapersonajes = document.getElementById('lista_personajes');

async function fetchpersonajes() {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        mostrarpersonajes(data.results);
    } catch (error) {
        console.error('no se cargaron los personajes', error);
    }
}

function mostrarpersonajes(personajes) {
    personajes.forEach(personaje => {
        const listItem = document.createElement('li');
        listItem.textContent = personaje.name;
        listapersonajes.appendChild(listItem);
    });
}

fetchpersonajes();