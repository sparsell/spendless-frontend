
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
const newSpendlessButton = document.querySelector("#new-sl-button")
let spendless_amount = document.querySelector("#spendless-amount-input")
let spendless_detail = document.querySelector("#spendless-detail-input")
const viewSlBtn = document.querySelector(".sl-button")


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

    // PUT/PATCH goal; if goal is 0, user has to enter a value; no other option to change after this
    // STRETCH: add button when goal is met to reset to '0'

    newGoalBtn.addEventListener('click', () => {
        const goal_amount = document.querySelector("#goal-input").value
        postGoal(goal_amount)
    })

    function postGoal(goal_amount) {
        debugger
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



// ***Spend less amount section***//
// const clearInput = function () {
//         spendless_amount.value = ""
//         spendless_detail.value = ""
//     }

// WIP: 
newSpendlessButton.addEventListener("click", function(e) {
    e.preventDefault()
    createSL(e)
    })

    function createSL(e) {
        e.preventDefault()
        spendless_amount = spendless_amount.value
        spendless_detail = spendless_detail.value
        postSpendlessAmount(spendless_amount, spendless_detail)
        // addSLtoTotal(spendless_amount)
        clearInput()
    }

// newSpendlessButton.addEventListener("click", () => {
//     spendless_amount = spendless_amount.value
//     spendless_detail = spendless_detail.value
//     postSpendlessAmount(spendless_amount, spendless_detail)
//     // addSLtoTotal(spendless_amount)
//     clearInput()
//     })

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
            // let slDiv = document.createElement("div")
            // slDiv.innerText = `${sl_amount}`
        })
        .catch(err => alert(err))
    }

    function clearInput() {
        spendless_amount.value = ""
        spendless_detail.value = ""
    }
    

// VIEW Spendless amounts */

viewSlBtn.addEventListener("click", function () {
    showSlAmounts()
})

function showSlAmounts() {
    fetch(spendlessAmountEndPoint)
    .then(res => res.json())
    .then(spendless_amounts => {
        renderSpendlessAmounts(spendless_amounts)   
        })
    }

// [ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.

function renderSpendlessAmounts(spendless_amounts) {
        spendless_amounts.data.forEach( sl_amount => {
            let spendlessAmountsDiv = document.createElement('div')
            spendlessAmountsDiv.classList.add("card")
            let spendlessAmountsContent = document.createElement('div')
            spendlessAmountsContent.classList.add("card-content")
            let spendlessAmount = document.querySelector(".card-content")
            spendlessAmountsDiv.innerHTML = `<h2 class="title is-4"> Amount: $${sl_amount.attributes.amount}  Description:${sl_amount.attributes.description}</h2>` 
            spendlessAmount.appendChild(spendlessAmountsDiv)
        })
    }

function addSLtoTotal(spendless_amount) {
    // add a new spendless_amount.value to the current total
    // 

    }