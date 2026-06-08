const optionBtns = document.querySelectorAll(".option");
const selectedCounter = document.getElementById('numSelected');
const submitBtn = document.querySelector("#submitBtn")

let selectedCourses = []
const studentId = "idk lol"

//const apiURL = idk bro, backend gotta lmk fam

let dummyTable = [
  {
    "id": 1,
    "name": "Defence Against the Dark Arts",
    "professor": "Remus Lupin"
  },
  {
    "id": 2,
    "name": "Transfiguration DUMMYTABLE",
    "professor": "Minerva McGonagall"
  },
  {
    "id": 3,
    "name": "Charms",
    "professor": "Filius Flitwick"
  },
  {
    "id": 4,
    "name": "Potions",
    "professor": "Severus Snape"
  },
  {
    "id": 5,
    "name": "Herbology",
    "professor": "Pomona Sprout"
  },
  {
    "id": 6,
    "name": "History of Magic",
    "professor": "Cuthbert Binns"
  },
  {
    "id": 7,
    "name": "Astronomy",
    "professor": "Aurora Sinistra"
  },
  {
    "id": 8,
    "name": "Muggle Studies",
    "professor": "Charity Burbage"
  },
  {
    "id": 9,
    "name": "Magical Transportation",
    "professor": "Madam Hooch"
  }
]

submitBtn.disabled = true; 


optionBtns.forEach ( btn => { 
    btn.addEventListener("click", (e) => {        
       
        let userChoice = e.target.id;

        //e.target | btn => the html line

        if (selectedCourses.includes(userChoice)) { //already in list, deselect
            btn.classList.remove("glow")
            let x = selectedCourses.indexOf(userChoice)
            selectedCourses.splice(x, 1)
            submitBtn.disabled = true;

        } else if (selectedCourses.length < 3) {
        
            selectedCourses.push(userChoice);
            btn.classList.add("glow");

            if (selectedCourses.length == 3) {
                submitBtn.disabled = false;
            } //check if 3
        } //deselect if in list
        

        selectedCounter.innerText = `Selected[${selectedCourses.length}/3]`
        console.log(selectedCourses)

    } //close e
) //close eL

} //close fE func

) //close forEach


submitBtn.addEventListener("click", (e) => {

    const data = {"studentID": studentId, 
        "course1": selectedCourses[0], 
        "course2": selectedCourses[1], 
        "course3": selectedCourses[2] };
    
    console.log(data);
    postData(data);

}) //close e and eL


const renderOptions = (table) => {
    
    //table length is 9. This code will need adaption if more than 9 courses are given
    for (let i = 0; i < table.length; i++) {
        optionBtns[i].innerText = table[i].name;
        optionBtns[i].id = table[i].id;
  }
  
}

//CRUD Methods

const postData = async(data) => {

    const apiURL = "https://domain.com/path/" 
    const params = {
        method: "POST",
        body: JSON.stringify(data), //ensures data/body is json format
        headers: {"Content-Type": "application/json"} //telling API that its indeed json
    }
   
    try { //from docs
    const response = await fetch(apiURL, params);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }

  return result
}

const postData2 = (data) => {
   
    const apiURL = "https://domain.com/path/"
    const params = {
        method: "POST",
        body: JSON.stringify(data), //ensures data/body is json format
        headers: {"Content-Type": "application/json"} //telling API that its indeed json
    }

    const results = fetch(apiURL, params) //code from freecodecamp or smth
    .then((response) => response.json()) // jsoning the response 
    .then((json) => console.log(json))  //probs not needed
    .catch ((error) => console.log("error:", error))

    return results;
}


const getData = async(apiURL) => {
    
    const fetched = null;
    const awaited = null; 
    const jsonified = null;

    try {
    fetched = await fetch(apiURL);
    awaited = await fetched;
    jsonified = await awaited.json();
    } catch (error) {
        console.log("Error occured: "+ error);
    }
    //## code needs crazy checking

    return jsonified;
}

const updateCourses = () => {
    const apiURL = "https://domain.com/path/"
    const params = {
        method: "PUT",
        body: JSON.stringify(data), //ensures data/body is json format
        headers: {"Content-Type": "application/json"} //telling API that its indeed json
    }

    const results = fetch(apiURL, params)
    .then((response) => response.json()) // jsoning the response 
    .then((json) => console.log(json))  //probs not needed
    .catch ((error) => console.log("error:", error))

    return results
}


const deleteCourseData = async(id) => {
    const apiURL = "https://domain.com/path/${id}"
    const params = {method:"DELETE"}

    try {
    const response = await fetch(apiURL, params)
    } catch (err) {
        console.log("errors again tbh,",err);
    }

    return response
}


const main = () => {
    renderOptions(dummyTable);
    courseTable = getData("http://localhost:8080/api/courses")
    console.log(courseTable);
}

main();