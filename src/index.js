
const goalEndPoint = "http://localhost:3000/api/v1/goals"
const goalEditEndPoint = "http://localhost:3000/api/v1/goals/1"
const totalEndPoint = "http://localhost:3000/api/v1/totals"
const spendlessAmountEndPoint = "http://localhost:3000/api/v1/spendless_amounts"

// *** modal */
const modal = document.getElementById("sl-modal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("delete");
const totalBtn = document.getElementById("button-total"); 

// *** goal */
const goalInput = document.querySelector(".goal-input")
const newGoalBtn = document.querySelector(".goal-button")
// let goal_amount = document.querySelector("#goal-input").value

//*** spendless amount */


//*** start program */
document.addEventListener('DOMContentLoaded', () => getGoal(), getTotal())

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// ***Goal section***//

    // get goal; db is seeded with goal = 0
    // At start of program, if goal is 0, user has to enter a value; no other option to change after this
    // STRETCH: add button when goal is met to reset to '0'

function getGoal() {
    fetch(goalEndPoint)
    .then(res => res.json())
    .then(goals => {
     goals.data.forEach ( goal => {
       renderGoal(goal)
        })
    })
    .catch(error => {
            return error;
    })
}

function renderGoal(goal) {
    if (goal !== 0) {
    let goalDiv = document.createElement('div')
    let goalTotal = document.querySelector('.goal-display')
    goalDiv.innerText = "$" + goal.attributes.goal_amount
    goalTotal.appendChild(goalDiv)
    goalInput.style.display = "none"
    } else {
        let setGoal = document.createElement('p')
        let setGoalMsg = document.querySelector('.goal-input-msg')
        setGoal.innerText = "(Please set a goal)"
        setGoalMsg.appendChild(setGoal)
    }
}

    newGoalBtn.addEventListener('click', () => {
        const goal_amount = document.querySelector("#goal-input").value
        postGoal(goal_amount)
    })

    function postGoal(goal_amount) {
    fetch(goalEditEndPoint, {
        method: 'PATCH', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            goal_amount: goal_amount
        })
    })
    .then(resp => resp.json())
    .then(goals => {
     goals.data.forEach ( goal => {
        //  debugger
       renderGoal(goal)
        })
    })
    .catch(error => {
            return error;
    })
}



// ***Total section***//
// no input; Total is set to "0" when db is created via seeds.rb

function getTotal() {
    fetch(totalEndPoint)
    .then(res => res.json())
    .then(totals => {
        totals.data.forEach( total => {
            renderTotal(total) 
        })
    })
    .catch(error => {
            return error;
    })
} 

function renderTotal(total) {
        let slTotal = document.querySelector('.sl-total')
        slTotal.innerText = total.attributes.total
}
// ***STRETCH: Progress section***//
function renderProgress() {
    let progress = document.querySelector('.goal-v-total')
    progress.innerText = '.sl-total'.value - ('.goal-display').value
}

// ***Spend less amount section***//
const createSpendlessAmtForm = document.querySelector("#create-sl-form")
let spendless_amount = document.querySelector("#spendless-amount-input")
let spendless_detail = document.querySelector("#spendless-detail-input")
const newSpendlessButton = document.querySelector("#new-sl-button")

createSpendlessAmtForm.addEventListener('submit', (e) => createFormHandler(e))

function createFormHandler(e) {
    e.preventDefault()
    const spendless_amount = document.querySelector("#spendless-amount-input").value
    const spendless_detail = document.querySelector("#spendless-detail-input").value
    postSpendlessAmount(spendless_amount, spendless_detail)
    clearInput(spendless_amount.value, spendless_detail.value)
    // renderProgress()
}

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
                console.log(sl_amount)
                // debugger
                const sl_amountData = sl_amount.data
                // debugger
                let newSLData = new SpendlessAmount(sl_amountData)
    
                })   
            .catch(err => alert(err)) 
    }

const clearInput = function () {
    spendless_amount.value = ""
    spendless_detail.value = ""
    }