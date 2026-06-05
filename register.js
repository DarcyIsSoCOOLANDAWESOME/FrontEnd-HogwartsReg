document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault(); //prevent default refresh behaviour, so
  const formData = Array.from(
    document.querySelectorAll("#regForm input, #regForm select"),
  ).reduce((acc, field) => ({ ...acc, [field.id]: field.value }), {});
  console.log("Ready for Spring Boot:", formData);
});
