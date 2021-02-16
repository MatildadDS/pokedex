//1; configurer ma methode fetch
const fetch_config = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}

// 2; créer une variable offset = variable globale à laquelle on va ajouter ou retirer 20, plus bas 
let offset = 0;
let pokeIndex = 0;

function getPokemons() {

    const url = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=20";

    // 3; requête Ajax (data est un tableau qui s'appelle results dans lequel il y a des données)
    fetch(url, fetch_config)
        .then(response => {
            response.json().then(data => {

                if (0 !== data.results.length) {
                    // 4 ; nous allons vider la liste contenue dans right-container_screen
                    const content = document.querySelector(".right-container__screen");
                    content.innerHTML = '';
                    pokeIndex = offset;

                    // 5; puis parcourir tous les éléments du tableau results et les placer dans une variable poke dans laquelle on va ajouter chaque pokemon au fur et à mesure
                    data.results.forEach(
                        poke => {
                            content.innerHTML += '<div class="list-item">' + ++pokeIndex + ' ' + poke.name + '</div>';
                        }
                    );

                } else {
                    alert('plus de pokemons!!!!');
                }

            });
        });

}




// 2a; fonction qui ajoute 20 pokemons à la liste 
function nextPage() {
    offset += 20;
    getPokemons();
}

// 2b; fonction qui retire 20 pokemons à la liste mais empêche de chercher dans les négatifs
function prevPage() {
    if (offset > 20) {
        offset -= 20;
        getPokemons();
    }
}

// 5; DOMContentLoaded - le code ne sera exécuter que lorsque le document HTML initial aura été complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-documents aient terminé de charger.
document.addEventListener('DOMContentLoaded', function () {

    getPokemons();

    document.querySelector(".right-button").addEventListener('click', function () {
        nextPage();
    });

    document.querySelector(".left-button").addEventListener('click', function () {
        prevPage();
    });

}, false);

