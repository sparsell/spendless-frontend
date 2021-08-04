
const goalEndPoint = "http://localhost:3000/api/v1/goals"
const totalEndPoint = "http://localhost:3000/api/v1/totals"
const spendlessAmountEndPoint = "http://localhost:3000/api/v1/spendless_amounts"

// *** modal */
const modal = document.getElementById("sl-modal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("delete");
const totalBtn = document.getElementById("button-total"); 

const goalInput = document.querySelector(".goal-input")

//*** spendless amount input */
const newSpendlessButton = document.querySelector("#new-sl-button")
let spendless_amount = document.querySelector("#spendless-amount-input")
let spendless_detail = document.querySelector("#spendless-detail-input")



//*** start program */
document.addEventListener('DOMContentLoaded', () => getGoal(), getTotal())

modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// ***Goal section***//



function getGoal() {
    fetch(goalEndPoint)
    .then(res => res.json())
    .then(goals => {
     goals.data.forEach ( goal => {
       render(goal)
        })
    })
    .catch(error => {
            return error;
    })
}

function render(goal) {
    // if (goal !== 0) {
    if (goal > 500) {
    let goalDiv = document.createElement('div')
    let goalTotal = document.querySelector('.goal-display')
    goalDiv.innerText = "$" + goal.attributes.goal_amount
    goalTotal.appendChild(goalDiv)
    goalInput.style.display = "none"
    } else {
        let setGoal = document.createElement('p')
        let setGoalMsg = document.querySelector('.goal-input-msg')
        setGoal.innerText = "Please set a goal"
        setGoalMsg.appendChild(setGoal)
    }
}

    // ***PUT/PATCH goal***
const newGoalBtn = document.querySelector(".goal-button")

    newGoalBtn.addEventListener('click', () => {
        const goal_amount = document.querySelector("#goal-input").value
        postGoal(goal_amount)
    })

    function postGoal(goal_amount) {
   // debugger
    fetch(goalEndPoint, {
        method: 'PUT', 
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
        // let goalData = goal.data
       
        let goalDiv = document.createElement('div')
        let goalToggle = document.querySelector('.goal-toggle')
        let goalInput = document.querySelector('.goal-input')
        goalDiv.innerText = "$" + goal.goal_amount
        goalToggle.appendChild(goalDiv)
        goalInput.style.display = "none";
        //  debugger
    })
}


// ***Spend less amount section***//

newSpendlessButton.addEventListener("click", () => {
    spendless_amount = spendless_amount.value
    spendless_detail = spendless_detail.value
    postSpendlessAmount(spendless_amount, spendless_detail)
    clearInput()
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
            slDiv.innerText = `${sl_amount}`
        })
    }

    const clearInput = function () {
        spendless_amount.value = ""
        spendless_detail.value = ""
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

const viewSlBtn = document.querySelector(".sl-button")

viewSlBtn.addEventListener("click", function () {
    showSlAmounts()
})

function showSlAmounts() {
    fetch(spendlessAmountEndPoint)
    .then(res => res.json())
    .then(spendless_amounts => {
        spendless_amounts.data.forEach( sl_amount => {
            let spendlessAmountsDiv = document.createElement('div')
            const closeSLBtn = document.createElement('button')
            spendlessAmountsDiv.classList.add("card")
            let spendlessAmountsContent = document.createElement('div')
            spendlessAmountsContent.classList.add("card-content")
            let spendlessAmount = document.querySelector(".card-content")
            spendlessAmountsDiv.innerHTML = `<h2 class="title is-4"> Amount: $${sl_amount.attributes.amount}  Description:${sl_amount.attributes.description}</h2>` 
            spendlessAmount.appendChild(spendlessAmountsDiv)
            
        })
        spendlessAmountsDiv.appendChild(closeSLBtn)
    })
}





   //     let goalDiv = document.createElement('div')
        //     let goalToggle = document.querySelector('.goal-toggle')
        //     let goalInput = document.querySelector('.goal-input')
        //     goalDiv.innerText = "$" + goal.attributes.goal_amount
        //     goalToggle.appendChild(goalDiv)
        //     goalInput.style.display = "none";
        //     }
        // }