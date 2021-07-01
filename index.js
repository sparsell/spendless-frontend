const endPoint = "http://localhost:3000/api/v1/goals"

// document.addEventListener('DOMContentLoaded', () => getGoals())


// create modal

let modalBtn = document.getElementById("modal-btn");
let modal = document.getElementById("sl-modal")
let closeBtn = document.getElementById("close-btn")

modalBtn.onclick = function() {
    modal.style.display = "block";
}

// modalBtn.addEventListener('click', function() {
//     document.getElementById('modal').classList.add('is-visible');
// });


// function getGoals() {
//     fetch(endPoint)
//         .then(response => response.json())
//         .then(goals => {
//             goals.data.forEach(goal => {
//                 const goalCard = 
//             })
//         })
// }



