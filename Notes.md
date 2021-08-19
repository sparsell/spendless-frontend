
1. Serializer - look at Goal and Total create actions (change to Spendless version?)
2. New Goal - fix HTMl to have <form> and change event handler to 'submit', not 'click'
3. Spendless Amount event handler is creating a second set of variables for spendless_amount and spendless_detail --> don't need both? or is it working to help the clearInput function work? 
4. line 155 = do you need to define 2x? 

spendlessAmount.js
1. add total_id to constructor?
2. add created_at to constructor?


GOAL:
    [] Work out association:
        - Current: Goal has one Total
                    Total belongs to Goal
                    Total has may SpendlessAmounts
                    SpendlessAmount belongs to Total

        - Proposed: Upon loading, Goal is set to '0' and automatically already associated to Total
                        Total is assigned to Goal so when Goal is first set, you are EDITing it, not creating it. 

TOTAL:
    [] Function/method to add a SpendlessAmount to the Total 
    [] Display the change; always show current value of Total 

SPENDLESS_AMOUNT:
    [] Show each event as a card - responsive
    [] Make each card appear at 'submit'
    [] Everytime press button, a new set of all the SL amounts show up;
        - make a 'close' button? 
        - make it a modal?
        - show $ with decimal and cents                                

TODO: 

1. [x]Goal is set to '0' automatically at start GET/fetch
    ??? - use 'seeds' file to do this? 

2. [x]Total is set to '0' automatically at start GET/fetch
    ??? - use 'seeds' file to do this?

3. [x]Total belongs_to Goal

4. []To 'set' the Goal, user enters amount and hits 'submit'
    [] --> creates a POST/fetch to 'edit' action in goal controller

5. User enters a Spendless Amount:
    RAILS:
    [x] At 'submit', POST/fetch to 'create' action on spendlessAmounts Controller
    [] automatically assigned to Total (belongs_to) 'create' action
       [] Spendlesss Amount is added to Total in db
       ? How to capture the current state of Total after this SL amount has been added?

    DOM:
    [] In DOM, 'card' is created and show in the browser (in fetch/POST method)
    [] How to make it not repeat everytime you hit the button?
    [] method in Spendless Model (scope method?)
    [] in DOM, comparison is displayed from Total v. Goal



 <!-- button creates cards for each spendless amount -->

            <!-- <section class="sl-amounts section is-small ">
                <h4 class="title">Want to see how you are spending less? </h4>
                <button class="sl-button is-primary mb-5 p-2">Yes, please show me</button>   
            </section> -->

            <!-- <div class="card">
                <div class="card-header">
                </div>
                <div class="card-content">
                    <p></p>
                </div>
            </div> -->

    // used a button to show spendless_amounts
    // VIEW Spendless amounts */

// const viewSlBtn = document.querySelector(".sl-button")

// viewSlBtn.addEventListener("click", function () {
//     showSlAmounts()
// })

// function showSlAmounts() {
//     fetch(spendlessAmountEndPoint)
//     .then(res => res.json())
//     .then(spendless_amounts => {
//         spendless_amounts.data.forEach( sl_amount => {
//         renderSpendlessAmounts(sl_amount)   
//         })
//     })
// }

// WIP: 
// newSpendlessButton.addEventListener('submit', function(e) {
//     e.preventDefault()
//     createSL(e)
//     })

//  newSpendlessButton.addEventListener("click", (e) => {
//     spendless_amount = spendless_amount.value
//     spendless_detail = spendless_detail.value
//     postSpendlessAmount(spendless_amount, spendless_detail)
//     // addSLtoTotal(spendless_amount)
//     clearInput()
//     })

//     function createSL(e) {
//         e.preventDefault()
//         spendless_amount = spendless_amount.value
//         spendless_detail = spendless_detail.value
//         postSpendlessAmount(spendless_amount, spendless_detail)
//         // addSLtoTotal(spendless_amount)
//         const clearInput = function () {
//         spendless_amount.value = ""
//         spendless_detail.value = ""
//     }
//     }

//
function renderSpendlessAmounts(newSLData) {
            let spendlessAmountsDiv = document.createElement('div')
            spendlessAmountsDiv.classList.add("card")
            spendlessAmountsDiv.classList.add("m-5")
            spendlessAmountsDiv.classList.add("p-5")
            let spendlessAmountsContent = document.createElement('div')
            spendlessAmountsContent.classList.add("card-content")
            let spendlessAmount = document.querySelector(".card-content")
            spendlessAmountsDiv.innerHTML = `<h2 class="title is-4"> Amount: $${newSLData.attributes.amount}  Description:${newSLData.attributes.description}</h2>` 
            spendlessAmount.appendChild(spendlessAmountsDiv)
        }