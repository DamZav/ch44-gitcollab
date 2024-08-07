const IMAGE_URL = "https://placehold.co/200";


const users = [
    {
        id: 1,
        username: "Damaris",
        description: "hola hola",
        age: 32,
        fav_music: {
            bands: ["Björk", "Radiohead", "TOOL"]
        },
    },
    {
        id: 1,
        username: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        username: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
];

// Selectores
const container = document.getElementById('container');

// const card = document.getElementById("card-container");
// const cardImgContainer = document.getElementById("card-img-container")


// renderUSer toma como parámetro al (array) users y crea/pobla el HTMLAllCollection.
function renderUser(user) {

    // Crear contenedor de la tarjeta
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card-img-container");

    
    // Crear elemento img
    // lo que va entre paréntesis es el nombre de la etiqueta html
    const imageElement = document.createElement("img");
    imageElement.src = IMAGE_URL;
    imageElement.alt = "User profile photo";


    // Creamos elemento título -> card
    // Crear elementos texto
    const cardTitleElement = document.createElement("h3");
    cardTitleElement.classList.add("card-title");
    cardTitleElement.textContent = user.username; 

    const cardAgeElement = document.createElement("p");
    cardAgeElement.textContent = `Age: ${user.age}`;

    const cardDescriptionElement = document.createElement("p");
    cardDescriptionElement.textContent = `Description: ${user.description}`;

    const cardFavMusicElement = document.createElement("p");
    cardFavMusicElement.textContent = `Favorite Music: ${user.fav_music.bands.join(", ")}`;


    // Renderizar (mostrar en pantalla) Agregar elementos al DOM
    cardImgContainer.appendChild(imageElement);
    cardContainer.append(cardImgContainer, cardTitleElement, cardAgeElement, cardDescriptionElement, cardFavMusicElement);   

    // Agregar contenedor de la tarjeta al contenedor principal
    container.appendChild(cardContainer);
}


// forEach itera sobre users y llama a renderUSer para renderizar cada uno
users.forEach(user => {
    renderUser(user);
});



// Poblar (populate)
    // cardTitleElement.textContent = USER.username;
    // cardAgeElement.textContent = `Age: ${USER.age}`;
    // cardDescriptionElement.textContent = `Description: ${USER.description}`;
    // cardFavMusicElement.textContent = `Favorite Music: ${USER.fav_music.bands.join(", ")}`;