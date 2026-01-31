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
const filterButtons = document.querySelectorAll("button[data-filter]");

let currentFilter = "all";

/* ---------- Render Courses ---------- */
function renderCourses(courseArray) {
    courseList.innerHTML = "";

    courseArray.forEach(course => {
        const li = document.createElement("li");

        const icon = document.createElement("span");
        icon.classList.add("icon");
        icon.textContent = course.completed ? "✔" : "X";
        icon.classList.add(course.completed ? "✔" : "X");

        // Event handler for toggle
        icon.addEventListener("click", () => {
            course.completed = !course.completed;
            applyFilter(currentFilter);
        });

        li.textContent = `${course.subject} ${course.number} (${course.credits} credits)`;
        li.appendChild(icon);

        courseList.appendChild(li);
    });

    updateCredits(courseArray);
}

/* ---------- Update Credits (Taken Only) ---------- */
function updateCredits(courseArray) {
    const credits = courseArray
        .filter(course => course.completed)
        .reduce((sum, course) => sum + course.credits, 0);

    totalCredits.textContent = credits;
}

/* ---------- Apply Filter ---------- */
function applyFilter(filter) {
    currentFilter = filter;

    if (filter === "all") {
        renderCourses(courses);
    } else {
        const filtered = courses.filter(course => course.subject === filter);
        renderCourses(filtered);
    }
}

/* ---------- Filter Button Events ---------- */
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyFilter(button.dataset.filter);
    });
});

/* ---------- Initial Load ---------- */
applyFilter("all");


function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
  displayCourseDetails
}