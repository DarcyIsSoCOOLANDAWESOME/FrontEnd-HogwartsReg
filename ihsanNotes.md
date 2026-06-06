need 9 select buttons with id to course

options:
on hover, slight highlight
on click event highlight, put into array

submit:
on click, take options from array put those into json, 
then post that raw body



optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseValue = button.textContent.trim();

        if (selectedCourses.includes(courseValue)) {
        // Already selected? Remove it from array and turn off highlight
            
            selectedCourses = selectedCourses.filter(item => item !== courseValue);
            button.classList.remove('selected-highlight');


        } else if (selectedCourses.length < 3) {
        // New selection & room left? Add to array and turn on highlight
            selectedCourses.push(courseValue);
            button.classList.add('selected-highlight');
        }

        // Update the counter text on screen, e.g., "Selected [2/3]"
        counterText.textContent = `Selected [${selectedCourses.length}/3]`;
    });
});

// 3. Handle clicking the Submit button
submitButton.addEventListener('click', () => {
    if (selectedCourses.length !== 3) {
        alert("You must select exactly 3 courses to enroll!");
        return;
    }

    // Package into the raw body object
    const payload = {
        courses: selectedCourses
    };

    // Send the raw JSON to your Spring Boot API
    fetch('http://localhost:8080/api/enroll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) alert("Enrolled successfully at Hogwarts!");
    })
    .catch(err => console.error("Error sending enrollment:", err));
});