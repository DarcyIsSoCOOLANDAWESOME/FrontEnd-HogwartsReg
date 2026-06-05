document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = Array.from(
    document.querySelectorAll("#regForm input, #regForm select"),
  ).reduce((acc, field) => {
    // 1. If it's a radio button and it is NOT checked, skip it!
    if (field.type === "radio" && !field.checked) {
      return acc;
    }

    // 2. Otherwise, save the data using its name attribute instead of ID
    const key = field.type === "radio" ? field.name : field.id;

    return {
      ...acc,
      [key]: field.value,
    };
  }, {});

  console.log("Ready for Spring Boot:", formData);
});
