fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(dataBase => {
        products(dataBase);
    })

    .catch((err) => {
        location.assign("erreur.html");
        console.log("Erreur Serveur : " + err);
    });

// ------------------------------AFFICHAGE DES ELEMENTS

function products(dataBase) {

    // Récupération des éléments de la base de donnée

    for (let product of dataBase) {

        // Variable permettant d'identifier la structure de l'élément HTML : #items    
        let structureProducts = document.querySelector('#items');

        // Ajout des elements HTML à la référence #items
        structureProducts.innerHTML += `
      <a href="./product.html?id=${product._id}">
          <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
          </article>
      </a>`;
    }
}