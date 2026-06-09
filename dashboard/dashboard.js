const BASE_URL = "http://localhost:8080";

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

const populateDashboard = async () => {
  const students = await getStudentData();

  if (!students || students.length === 0) {
    document.getElementById("profileName").textContent = "No student found.";
    return;
  }

  const currentStudent = students[students.length - 1];

  const firstName = currentStudent.firstName || "Unknown";
  const lastName = currentStudent.lastName || "";
  const email = currentStudent.email || "N/A";
  const house = currentStudent.house || "Unsorted";
  const age = currentStudent.age || "N/A";

  document.getElementById("welcomeName").textContent = firstName;
  document.getElementById("profileName").textContent =
    `${firstName} ${lastName}`;
  document.getElementById("profileEmail").textContent = email;
  document.getElementById("profileHouse").textContent = house;
  document.getElementById("profileAge").textContent = age;
};

window.addEventListener("DOMContentLoaded", populateDashboard);
