const goalEndPoint = "http://localhost:3000/api/v1/goals"
const totalEndPoint = "http://localhost:3000/api/v1/totals"
const spendlessAmountEndPoint = "http://localhost:3000/api/v1/spendless_amounts"


document.addEventListener('DOMContentLoaded', () => getGoal(), getTotal())

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
// IF goal exists, display it (GET)
// ELSE, ask user to set the amount (POST))

function getGoal() {
    fetch(goalEndPoint)
    .then(res => res.json())
    .then(goals => {
        goals.data.forEach( goal => {
            if (goal.attributes.goal_amount > 500) {
            let goalDiv = document.createElement('div')
            let goalToggle = document.querySelector('.goal-toggle')
            let goalInput = document.querySelector('.goal-input')
            goalDiv.innerText = "$" + goal.attributes.goal_amount
            goalToggle.appendChild(goalDiv)
            goalInput.style.display = "none";
            } else {
                // console.log("enter a goal") 
            }
        })
    })
    .catch(error => {
            return error;
    })
}

    // ***POST new user goal***
const newGoalBtn = document.querySelector(".goal-button")
newGoalBtn.addEventListener('click', postNewGoal)

function postNewGoal(goal_amount) {
    fetch(goalEndPoint, {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            goal_amount: goal_amount, 
            total_id: total_id
        })
    })
    .then(resp => resp.json())
    .then(goals => {
        const goal = goals.data
        let newGoal = new goal(goal_amount, goal.attributes)

        document.querySelector('.goal-input').innerText("Done")
    })
}

// ***Spend less amount section***//

// user enters a number in the first input (spendless_amounts.amount) and a brief description in the second input (need to add spendless_amounts.detail)
// button "add to total" initiates fetch request to POST to db the amount and detail



// document.addEventListener('click', () =>
// addSpendlessAmount())

// function addSpendLessAmount(amount, description) {

// }

// ***Total section***//
// no input; updates automatically

function getTotal() {
    fetch(totalEndPoint)
    .then(res => res.json())
    .then(totals => {
        totals.data.forEach( total => {
            let totalDiv = document.createElement('div')
            let slTotal = document.querySelector('.sl-total')
            totalDiv.innerText = "$" + total.attributes.total
            slTotal.appendChild(totalDiv);
        })
    })
    .catch(error => {
            return error;
    })
} 
// 

// ***View Spendless amounts section***//

// let slView = document.querySelector('.sl-button')
//     slView.addEventListener('click', viewSpendless())

// function viewSpendless() {
// fetch(spendlessAmountEndPoint)
// .then(res => res.json())
// .then(amounts => {
//     // amounts.data.forEach(amount => {
//         console.log(amounts)
//     })
// }
// }


// see where you are spending less
// creates tiles for each spendless_amount


        // goals.data.forEach( goal => {
        //     let goalDiv = document.createElement('div')
        //     let goalToggle = document.querySelector('.goal-toggle')
        //     let goalInput = document.querySelector('.goal-input')
        //     goalDiv.innerText = "$" + goal.attributes.goal_amount
        //     goalToggle.appendChild(goalDiv)
        //     goalInput.style.display = "none";
        // })