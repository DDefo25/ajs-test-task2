export default function sortCharactersByHP(characters) {
    return characters.sort((a, b) => b.health - a.health);
}
