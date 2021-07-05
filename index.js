const endPoint = "http://localhost:3000/api/v1/goals"


// ***create modal***
const modal = document.getElementById("sl-modal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("delete");

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});


// ***Goal section***//
// at open, ask for the user to set a goal:
// if goal already set, display it (GET)

// fetch goal (use IF statement:
// IF goal.amount > 0, goal.amount
// ELSE, ask user to set the amount)



// document.addEventListener('DOMContentLoaded', () => getGoals())
// function getGoals() {
//     fetch(endPoint)
//         .then(response => response.json())
//         .then(goals => {
//             goals.data.forEach(goal => {
//                 const goalCard = 
//             })
//         })
// }




// ***Spend less amount section***//

// user enters a number in the first input (spendless_amounts.amount) and a brief description in the second input (need to add spendless_amounts.detail)
// button "add to total" initiates fetch request to POST to db the amount and detail

// also, adds the spendless_amount.amount to the total.total lol...

// ***Total section***//

// no input; updates automatically
// 

