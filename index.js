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
        // debugger
        for (let goal of goals) {
            // debugger
            if (goal.attributes.goal_amount) {
            // if (goal.data[i].attributes.goal_amount) {
            let goalDiv = document.createElement('div')
            let goalToggle = document.querySelector('.goal-toggle')
            let goalInput = document.querySelector('.goal-input')
            goalDiv.innerText = "$" + goal.attributes.goal_amount
            goalToggle.appendChild(goalDiv)
            goalInput.style.display = "none";
            }
        }
    })
    .catch(error => {
            return error;
    })
}

    // ***POST new user goal***
const newGoalBtn = document.querySelector(".goal-button")

    newGoalBtn.addEventListener('click', () => {
        const goal_amount = document.querySelector("#goal-input").value
        postNewGoal(goal_amount)
    })

    function postNewGoal(goal_amount) {
   // debugger
    fetch(goalEndPoint, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            goal_amount: goal_amount
        })
    })
    .then(resp => resp.json())
    .then(goal => {
        let goalData = goal.data
        let goalDiv = document.createElement('div')
        let goalToggle = document.querySelector('.goal-toggle')
        let goalInput = document.querySelector('.goal-input')
        goalDiv.innerText = "$" + goal.goal_amount
        goalToggle.appendChild(goalDiv)
        goalInput.style.display = "none";
    })
}


// ***Spend less amount section***//

// user enters a number in the first input (spendless_amounts.amount) and a brief description in the second input 
// button "add to total" initiates fetch request to POST to db the amount and detail

const newSpendlessButton = document.querySelector("#new-sl-button")

newSpendlessButton.addEventListener("click", () => {
    const spendless_amount = document.querySelector("#spendless-amount-input").value
    const spendless_detail = document.querySelector("#spendless-detail-input").value
    postSpendlessAmount(spendless_amount, spendless_detail)
    })

function postSpendlessAmount(spendless_amount, spendless_detail) {
    fetch (spendlessAmountEndPoint, {

        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "applicatiaon/json"
        },
        body: JSON.stringify({
            amount: spendless_amount, 
            description: spendless_detail
        })
    })
        .then(resp => resp.json())
            .then(sl_amount => {
            // debugger
            let new_sl_amount = document.querySelector("sl-amounts")
            let slDiv = document.createElement("div")
            slDiv.innerText = `${new_sl_amount}`
        })
    }

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

// ***VIEW Spendless amounts section***//

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
        //     if (goal.attributes.goal_amount) {
        //     let goalDiv = document.createElement('div')
        //     let goalToggle = document.querySelector('.goal-toggle')
        //     let goalInput = document.querySelector('.goal-input')
        //     goalDiv.innerText = "$" + goal.attributes.goal_amount
        //     goalToggle.appendChild(goalDiv)
        //     goalInput.style.display = "none";
        //     }
        // })
