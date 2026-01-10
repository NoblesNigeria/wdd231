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
let currentFilter = "all";

// Display courses
function displayCourses(courseArray) {
    courseList.innerHTML = "";

    courseArray.forEach((course, index) => {
        const li = document.createElement("li");

        const icon = course.completed ? "✔" : "❌";
        const statusClass = course.completed ? "taken" : "not-taken";

        li.innerHTML = `
            ${course.subject} ${course.number}
            (${course.credits} credits)
            <span class="${statusClass}" onclick="toggleStatus(${index})">
                ${icon}
            </span>
        `;

        courseList.appendChild(li);
    });

    calculateCredits(courseArray);
}

// Toggle taken / not taken
function toggleStatus(index) {
    courses[index].completed = !courses[index].completed;
    filterCourses(currentFilter);
}

// Calculate credits (ONLY taken courses)
function calculateCredits(courseArray) {
    const credits = courseArray
        .filter(course => course.completed)
        .reduce((sum, course) => sum + course.credits, 0);

    totalCredits.textContent = credits;
}

// Filter courses
function filterCourses(type) {
    currentFilter = type;

    if (type === "all") {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.subject === type);
        displayCourses(filtered);
    }
}

// Initial load
displayCourses(courses);