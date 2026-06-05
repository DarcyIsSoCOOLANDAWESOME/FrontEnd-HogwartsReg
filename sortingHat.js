const houses = ["GRYFFINDOR", "SLYTHERIN", "RAVENCLAW", "HUFFLEPUFF"];

window.selectedHouse = "";

const setSelectedHouse = (house) => {
    window.selectedHouse = house;
    console.log("Selected house:", selectedHouse);
};

const getRandomHouse = () => {
    const randomIndex = Math.floor(Math.random() * houses.length);
    return houses[randomIndex];
};

const setupHouseButtons = () => {
    const houseButtons = document.querySelectorAll("#house--btns button");

    houseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const house = button.textContent.toUpperCase();
            setSelectedHouse(house);
        });
    });
};

const setupRandomHouseButton = () => {
    const randomBtn = document.querySelector(".rand--btn");

    randomBtn.addEventListener("click", () => {
        const randomHouse = getRandomHouse();
        setSelectedHouse(randomHouse);
    });
};

setupHouseButtons();
setupRandomHouseButton();