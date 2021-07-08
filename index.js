const goalEndPoint = "http://localhost:3000/api/v1/goals"
const totalEndPoint = "http://localhost:3000/api/v1/totals"
const spendlessAmountEndPoint = "http://localhost:3000/api/v1/spendless_amounts"

// ***create modal***
const modal = document.getElementById("sl-modal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("delete");
const totalBtn = document.getElementById("button-total"); 

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// ***Goal section***//
// at open, ask for the user to set a goal:
// IF goal already exists (e.g., > 0), display it (GET)
// ELSE, ask user to set the amount)

document.addEventListener('DOMContentLoaded', () => getGoal())

function getGoal() {
    fetch(goalEndPoint)
    .then(res => res.json())
    .then(goals => {
        console.log(goals)
    })
    .catch(error => {
            return error;
    })
} 

        // posts goal to db
// function postGoal(goal_amount) {
//     fetch(goalEndPoint, {
//         method: "POST", 
//         headers: {"Content-Type": "application/json"}, 
//         body: JSON.stringify({
//             goal_amount: goal_amount, 
//             total_id: total_id
//         })
//     })
// }

// ***Spend less amount section***//

// user enters a number in the first input (spendless_amounts.amount) and a brief description in the second input (need to add spendless_amounts.detail)
// button "add to total" initiates fetch request to POST to db the amount and detail



// document.addEventListener('click', () =>
// addSpendlessAmount())

// function addSpendLessAmount(amount, description) {

// }

// also, adds the spendless_amount.amount to the total.total lol...

// ***Total section***//

// no input; updates automatically
// 

// see where you are spending less
// creates tiles for each spendless_amount