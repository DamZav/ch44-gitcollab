const IMAGE_URL = "https://placehold.co/200";


const USER =  {
    id: 1,
    username: "Damaris",
    description: "hola hola",
    age: 32,
    fav_music: {
        bands: ["Björk", "Radioead", "TOOL"]
    },
};


// Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container")


// Crear elemento img
// lo que va entre paréntesis es el nombre de la etiqueta html
const imageElement = document.createElement("img")
imageElement.src = IMAGE_URL;
imageElement.alt = "User profile photo"

// console.log(imageElement);


// Creamos elemento título -> card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");

const cardAgeElement = document.createElement("p");
const cardDescriptionElement = document.createElement("p");


// Poblar (populate)
cardTitleElement.textContent = USER.username;
cardAgeElement.textContent = USER.age;
cardDescriptionElement.textContent = USER.description;


// Renderizar (mostrar en pantalla)
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescriptionElement);