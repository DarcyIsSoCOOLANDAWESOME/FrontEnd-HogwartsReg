// ==========================================
// 1. GLOBAL CONFIGURATION
// ==========================================
const BASE_URL = "http://localhost:8080";

// ==========================================
// 2. THE ENGINES (Your API Helper Functions)
// ==========================================
const postStudentData = async (data) => {
  const apiURL = `${BASE_URL}/api/users`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  };

  let result = null;
  try {
    const response = await fetch(apiURL, params);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    result = await response.json();
  } catch (error) {
    console.error("Error during enrollment:", error);
  }
  return result;
};

const getStudentData = async () => {
  const apiURL = `${BASE_URL}/api/users`;
  let jsonified = null;
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    jsonified = await response.json();
  } catch (error) {
    console.error("Error occurred while fetching:", error);
  }
  return jsonified;
};

// ==========================================
// 3. THE TRIGGER (Your Form Event Listener)
// ==========================================
document
  .getElementById("regForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // 1. Gather all the data fields from the UI
    const formData = Array.from(
      document.querySelectorAll("#regForm input, #regForm select"),
    ).reduce((acc, field) => {
      if (field.type === "radio" && !field.checked) return acc;
      const key = field.type === "radio" ? field.name : field.id;
      return { ...acc, [key]: field.value };
    }, {});

    console.log("Form complete, sending data...", formData);

    // 2. Call the engine function we defined right above
    const dbResult = await postStudentData(formData);

    // 3. Handle the final result
    if (dbResult) {
      alert("Student successfully added to the database.");
    } else {
      alert("Failed. Check your backend terminal.");
    }
  });
