import sortCharactersByHP from "../index";

test("test sortCharactersByHP func", () => {
    const initial = [
        { name: "мечник", health: 10 },
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
    ];

    const result = [
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
        { name: "мечник", health: 10 },
    ];

    expect(result).toEqual(sortCharactersByHP(initial));
});
