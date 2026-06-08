const BASE_URL = "http://localhost:8080";

// 1. THE ENGINE: Fetch all students from the database
const getStudentData = async () => {
  const apiURL = `${BASE_URL}/api/users`;
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching students:", error);
    return null;
  }
};

// 2. THE RENDERER: Inject data into the HTML DOM elements
const populateDashboard = async () => {
  const students = await getStudentData();

  // Guard clause: Exit if no data returns or database is empty
  if (!students || students.length === 0) {
    document.getElementById("profileName").textContent = "No student found.";
    return;
  }

  // Grab the latest student enrolled (the last item in the database array)
  const currentStudent = students[students.length - 1];

  // Match these property keys exactly to what your Spring Boot DTO fields send back!
  const firstName = currentStudent.firstName || "Unknown";
  const lastName = currentStudent.lastName || "";
  const email = currentStudent.email || "N/A";
  const house = currentStudent.house || "Unsorted";
  const age = currentStudent.age || "N/A";

  // Update UI Text Content
  document.getElementById("welcomeName").textContent = firstName;
  document.getElementById("profileName").textContent =
    `${firstName} ${lastName}`;
  document.getElementById("profileEmail").textContent = email;
  document.getElementById("profileHouse").textContent = house;
  document.getElementById("profileAge").textContent = age;

  // Magical Extra: Dynamic House Crest display if you have images saved
  const crestImg = document.getElementById("houseCrest");
  if (currentStudent.house) {
    // Assuming your images are named 'gryffindor.png', 'slytherin.png', etc.
    crestImg.src = `images/${house.toLowerCase()}.png`;
    crestImg.style.display = "block"; // Make the image visible
  }
};

// Run the function automatically when the page loads
window.addEventListener("DOMContentLoaded", populateDashboard);
