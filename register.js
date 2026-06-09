const BASE_URL = "http://localhost:8080";

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

document
  .getElementById("regForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = Array.from(
      document.querySelectorAll("#regForm input, #regForm select"),
    ).reduce((acc, field) => {
      if (field.type === "radio" && !field.checked) return acc;
      const key = field.type === "radio" ? field.name : field.id;
      return { ...acc, [key]: field.value };
    }, {});

    if (formData.age) {
      formData.age = parseInt(formData.age, 10);
    }

    console.log("Form complete, sending data...", formData);

    const dbResult = await postStudentData(formData);

    sessionStorage.setItem("userId", `${dbResult.userId}`);

    if (dbResult) {
      alert("Student successfully added to the database.");
      window.location.href = `Enroll/enroll.html`;
    } else {
      alert("Failed. Check your backend terminal.");
    }
  });
