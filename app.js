let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let fetch_config = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}

let next20 = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
let previous20 = "";



fetch(url, fetch_config)
    .then(response => {
        console.log(response);
        response.json().then(data => {
            console.log(data)
            data.results.forEach(poke => {
                //console.log(data);

                let content = document.querySelector(".right-container__screen")
                //console.log(content)
                let str = "";

                str = `<div class="list-item">1. ${data.results[0].name}</div>
                <div class="list-item">2. ${data.results[1].name}</div>
                <div class="list-item">3. ${data.results[2].name}</div>
                <div class="list-item">4. ${data.results[3].name}</div>
                <div class="list-item">5. ${data.results[4].name}</div>
                <div class="list-item">6. ${data.results[5].name}</div>
                <div class="list-item">7. ${data.results[6].name}</div>
                <div class="list-item">8. ${data.results[7].name}</div>
                <div class="list-item">9. ${data.results[8].name}</div>
                <div class="list-item">10. ${data.results[9].name}</div>
                <div class="list-item">11. ${data.results[10].name}</div>
                <div class="list-item">12. ${data.results[11].name}</div>
                <div class="list-item">13. ${data.results[12].name}</div>
                <div class="list-item">14. ${data.results[13].name}</div>
                <div class="list-item">15. ${data.results[14].name}</div>
                <div class="list-item">16. ${data.results[15].name}</div>
                <div class="list-item">17. ${data.results[16].name}</div>
                <div class="list-item">18. ${data.results[17].name}</div>
                <div class="list-item">19. ${data.results[18].name}</div>
                <div class="list-item">20. ${data.results[19].name}</div>`

                content.innerHTML = str;

                let next = document.querySelector(".right-button");
                //console.log(next)

                next.addEventListener('click', function () {


                });
            })
        })
