const openButton=document.querySelector("#openButton")
const courseDetails=document.querySelector("course-details")
const closeDetails=document.querySelector("closeModal")
openButton.addEventListener("click", () => {
    courseDetails.showModal();
});

closeDetails.addEventListener("click", () => {
    courseDetails.close();
});