export async function getPokemon(id) {
    const link = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(`${link}/${id}`);
    
    if (!response.ok) {
        throw new Error("Pokémon not found");
    }
    const pokemon = await response.json();

    return {
        id: id,
        name: pokemon.name,
        image: pokemon.sprites.front_default
    };
}