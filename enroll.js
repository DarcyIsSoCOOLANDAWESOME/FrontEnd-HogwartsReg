const optionBtns = document.querySelectorAll(".option");
const counterText = document.getElementById('numSelected');
const submitBtn = document.querySelector("#submitBtn")


let selectedCourses = []


optionBtns.forEach ( btn => { 
    btn.addEventListener("click", (e) => {

        let userChoice = e.target.innerText;

        
        if (selectedCourses.length < 3) {
        selectedCourses.push(userChoice);
        }

        console.log(selectedCourses)


    } //close e


)

} //close fE func


) //close forEach
