const houses = ["GRYFFINDOR", "SLYTHERIN", "RAVENCLAW", "HUFFLEPUFF"];

window.selectedHouse = "";

// This handles updating your state AND syncing it to your UI elements
const setSelectedHouse = (house) => {
  window.selectedHouse = house;
  console.log("Selected house:", window.selectedHouse);

  // Find the radio button element that matches the house ID (e.g., id="GRYFFINDOR")
  const targetRadioButton = document.getElementById(house);

  if (targetRadioButton) {
    targetRadioButton.checked = true; // Visually select it on the form!
  }
};

const getRandomHouse = () => {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
};

// Listen for clicks on the radio input elements or their labels
const setupHouseInputs = () => {
  // Select all radio elements inside the house section
  const houseRadios = document.querySelectorAll(
    "#house--btns input[type='radio']",
  );

  houseRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      // Because your radio inputs have value="GRYFFINDOR", value.toUpperCase() matches perfectly
      setSelectedHouse(radio.value);
    });
  });
};

// Listen for clicks on the random "Sorting Hat" selector button
const setupRandomHouseButton = () => {
  const randomBtn = document.querySelector(".rand--btn");

  randomBtn.addEventListener("click", () => {
    const randomHouse = getRandomHouse();
    setSelectedHouse(randomHouse);
  });
};

// Initialize the event hooks
setupHouseInputs();
setupRandomHouseButton();
