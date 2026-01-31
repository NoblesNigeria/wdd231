const schedule = document.querySelector('#current-year');
schedule.textContent = new Date().getFullYear();

const updateDate = document.querySelector('#lastModified');
updateDate.textContent = `Last Modified: ${document.lastModified}`;


const openButton=document.querySelector("#openButton")
const courseDetails=document.querySelector("course-details")
const closeDetails=document.querySelector("closeModal")
openButton.addEventListener("click", () => {
    courseDetails.showModal();
)};

closeDetails.addEventListener("click", () => {
    courseDetails.close();
});
