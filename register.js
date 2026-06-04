// document.getElementById("enrol").submit();

document.querySelectorAll("#regForm input");
Array.from(document.querySelectorAll("#regForm input")).reduce(
  (acc, input) => ({ ...acc, [input.id]: input.value }),
  {},
);
