const coursesBox = document.querySelector("#coursesBox")
const deleteBtn = document.querySelector("#deleteBtn")

const welcomeName = document.getElementById("welcomeName")
const profileName = document.querySelector("#profileName");
const profileEmail = document.querySelector("#profileEmail");
const profileHouse = document.querySelector("#profileHouse");
const profileAge = document.querySelector("#profileAge");

const crestImg = document.getElementById("houseCrest");

const BASE_URL = "http://localhost:8080";

const studentId = sessionStorage.getItem('userId'); //test purposes

console.log("",studentId);


const getStudentData = async (studentId) => {
  const apiURL = `${BASE_URL}/api/users/${studentId}`;
  
  try {
    const response = await fetch(apiURL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); }
    
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

  const name = `${student.firstName} ${student.lastName}` || "N/a";
  const email = student.email || "N/A";
  const house = student.house.toLowerCase() || "Unsorted";
  const age = student.age || "N/A";

  welcomeName.textContent = name;
  profileName.textContent = name;
  profileEmail.textContent = email;
  profileHouse.textContent = house.toLowerCase(); // e.g., Gryffindor
  profileAge.textContent = age;

  //## take ! off once images actually gotten
  if (!student.house) {
    // 'gryffindor.png', 'slytherin.png'
    crestImg.src = `images/${house.toLowerCase()}.png`;
    crestImg.style.display = "block"; // Make the image visible
  }
};

const populateCourses = async(courses) => {

  for (let i=0; i<4; i++) {
    console.log("course added");
    
    let tempDiv = document.createElement("div")
    tempDiv.classList.add("naturalBorder","course")
    tempDiv.innerText = `${courses[i].name}: ${courses[i].professorName} `

    coursesBox.appendChild(tempDiv);
  }
}

const deleteUser = async(id) => {
    const apiURL = `${BASE_URL}/api/users/${studentId}`
    const params = {method:"DELETE"}

    try {
    const response = await fetch(apiURL, params)
    } catch (err) {
        console.log("errors again tbh,",err);
    }

    return response
}

deleteBtn.addEventListener("click",  () => {

  console.log("del click");
  
  const consent = confirm("Deleting your profile is a permanant action, the data can never be retrieved again. Are you sure?")
  
  if (!consent) {
    console.log("Cancelled");
    return;
  } else {
    console.log("Alohomora, evanesco")
    coursesBox.classList.add("hide")
    welcomeName.innerHTML = "Alohomora!"
    deleteUser(studentId);
  }


 }) //method and eL close


const studentData = await getStudentData(studentId);
console.log(studentData)


populateProfile(studentData)

populateCourses(studentData.courses)
