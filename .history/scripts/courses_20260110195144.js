const courses = [
    {
        subject: 'CSE',
        number: 110,
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        credits: 2,
        completed: false
    },
]



const courseList = document.getElementById("courseList");
const totalCredits = document.getElementById("totalCredits");

// Display courses
function displayCourses(courseArray) {
    courseList.innerHTML = "";

    courseArray.forEach(course => {
        const li = document.createElement("li");

        const status = course.completed ? "✔" : "X";
        const statusClass = course.completed ? "✔" : "X";

        li.innerHTML = `
            ${course.subject} ${course.number}
            (${course.credits} credits)
            - <span class="${statusClass}">${status}</span>
        `;

        courseList.appendChild(li);
    });

    calculateCredits(courseArray);
}

// Calculate total credits
function calculateCredits(courseArray) {
    const credits = courseArray.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = credits;
}

// Filter courses
function filterCourses(type) {
    if (type === "all") {
        displayCourses(courses);
    }
    else {
        const filtered = courses.filter(course => course.subject === type);
        displayCourses(filtered);
    }
}

// Initial load
displayCourses(courses);