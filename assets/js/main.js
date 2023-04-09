let API = "https://pokeapi.co/api/v2/pokemon/ditto";
document.querySelector("#search").addEventListener("click", getPokemon);
function getPokemon(e) {
    let name = document.querySelector("#pokemonName").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((data) => {
            document.querySelector(".pokemon-card").innerHTML = `
            <img
                src="${data.sprites.other.dream_world.front_default}"
                alt="${data.name}" class="pokemon-card__img">
                <div class="pokemon__name">
                    <h1 class="pokemon-card__name">${data.name}</h1>
                    <p class="pokemon-card__type">${data.types[0].type.name}</p>
                </div>
            `;
        })
        .catch((err) => console.log("err", err));
    e.preventDefault();
}

getPokemon();
