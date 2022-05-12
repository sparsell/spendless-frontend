
const goalEndPoint = "http://localhost:3000/api/v1/goals"
const goalEditEndPoint = "http://localhost:3000/api/v1/goals/1"
const totalEndPoint = "http://localhost:3000/api/v1/totals"
const totalEditEndPoint = "http://localhost:3000/api/v1/totals/1"
const spendlessAmountEndPoint = "http://localhost:3000/api/v1/spendless_amounts"

// *** modal */
const modal = document.getElementById("sl-modal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("delete");
const totalBtn = document.getElementById("button-total"); 



//*** start program */
document.addEventListener('DOMContentLoaded', () => getGoal(), getTotal(), getSLAmounts())
// document.addEventListener('DOMContentLoaded', () => getGoal(), getTotal())

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});



// ***Goal section***//

    // get goal; db is seeded with goal = 0
    // At start of program, if goal is 0, user has to enter a value; no other option to change after this

let showGoal;
function getGoal() {
    fetch(goalEndPoint)
        .then(res => res.json())
        .then(goals => {
            goals.data.forEach ( goal => {
                showGoal = goal.attributes.goal_amount
                console.log(showGoal)
                console.log(goal)
            renderGoal(goal)
            calcDiff(showGoal)
            
            }) 
        })
    .catch(error => {
            return error;
    })
}

function calcDiff(showGoal) {
    console.log(showGoal)
}



function renderGoal(goal) {
    if (goal.attributes.goal_amount !== 0) {
    let goalDiv = document.createElement('h2')
    goalDiv.classList.add("set-goal")
    let goalTotal = document.querySelector('.goal-display')
    goalDiv.innerText = "$" + goal.attributes.goal_amount
    goalTotal.appendChild(goalDiv)
    goalInput.style.display = "none"
    showGoal = goal.attributes.goal_amount;
    } else {
        let setGoal = document.createElement('p')
        let setGoalMsg = document.querySelector('.goal-input-msg')
        setGoal.innerText = "(Please set a goal)"
        setGoalMsg.appendChild(setGoal)
    }
}

//    Add your goal at the start of the program
const newGoal = document.querySelector("#create-goal") //<form> element
const goalInput = document.querySelector(".goal-input")
 const newGoalBtn = document.querySelector("#new-goal-button")
const goal_amount = document.querySelector("#goal-input").value

    newGoal.addEventListener('submit', (e) => createGoalHandler(e)) 

    function createGoalHandler(e) {
        e.preventDefault()
        const goal_amount = document.querySelector("#goal-input").value
        postGoal(goal_amount)
    }

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
       renderGoal(goal)
        })
    })
    .catch(error => {
            return error;
    })
}

// ***Total section***//

function getTotal() {
    fetch(totalEndPoint)
    .then(resp => resp.json())
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
                // console.log(sl_amount)
                const sl_amountData = sl_amount.data
                let newSLData = new SpendlessAmount(sl_amountData)
                updateTotal()
                })   
            .catch(err => alert(err)) 
    }

function updateTotal() {
    fetch(totalEditEndPoint, {
    method: 'PATCH', 
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }, 
        body: JSON.stringify({

        })
    })
         .then(resp => resp.json())
        .then(total => {
        const new_total = total.data //.attributes.total
        console.log(new_total.attributes.total)
        renderTotal(new_total)
        })
    .catch(error => {
    return error;
    })
}

    const clearInput = function () {
    spendless_amount.value = ""
    spendless_detail.value = ""
    }

// show how you spent less - amounts
    // let showSlAmounts = document.getElementById("show-sl-amounts");
    // showSlAmounts.addEventListener('click', (e) => showSlAmountsHandler(e))

    // function showSlAmountsHandler(e) {
    //     e.preventDefault();
    //     getSLAmounts();
    // }
 
    // at DOM content loaded
    function getSLAmounts() {
        fetch(spendlessAmountEndPoint)
        .then(res => res.json())
        .then(spendless_amounts => {
            spendless_amounts.data.forEach(amount => {
                renderAmount(amount)
                let newTotal = 0
                newTotal = function(e) {
                    newTotal += e.amount 
                }
            })
        })
        .catch(error => {
            return error;
        })
    }

    function renderAmount(amount) {
        let date = new Date(amount.attributes.created_at).toLocaleString().split(',')[0]

        const table = document.querySelector("#sl-table")
        const newRow = table.insertRow()
        const newDate = newRow.insertCell(0)
        const newAmount = newRow.insertCell(1)
        const newDescription = newRow.insertCell(2)

        newDate.innerHTML = `<td>${date}</td>`
        newAmount.innerHTML = `<td><span>$</span>${amount.attributes.amount}</td>`
        newDescription.innerHTML = `<td>${amount.attributes.description}</td>`
    }
