2. New Goal - fix HTMl to have <form> and change event handler to 'submit', not 'click'
3. Spendless Amount event handler is creating a second set of variables for spendless_amount and spendless_detail --> don't need both? or is it working to help the clearInput function work? 
4. line 155 = do you need to define 2x? 

GOAL:
    [x] Associations:
                Total belongs to Goal
                Total has may SpendlessAmounts
                SpendlessAmount belongs to Total
    [x] Upon page load, Goal and Total are set to '0' and Total is automatically associated to Goal via create action
    [x] When Goal is first set, you are EDITing it, not creating it. 

TOTAL:
    [] Function/method to add a SpendlessAmount to the Total 
    [] Display the change; always show current value of Total 

SPENDLESS_AMOUNT:
    [x] Show each existing event in a table (fetch GET) upon page load
    [x] Make each new row appear at 'submit'
    [x] show $                               

TODO: 

1. [x]Goal is set to '0' automatically at start GET/fetch
2. [x]Total is set to '0' automatically at start GET/fetch
3. [x]Total belongs_to Goal
4. []To 'set' the Goal, user enters amount and hits 'submit'
    [x] --> creates a POST/fetch to 'edit' action in goal controller
5. User enters a Spendless Amount:
    RAILS:
    [x] At 'submit', POST/fetch to 'create' action on spendlessAmounts Controller
    [x] automatically assigned to Total (belongs_to) 'create' action
    [ ] Spendlesss Amount is added to Total in db
       ? How to capture the current state of Total after this SL amount has been added?

    DOM:
    [] method in SpendlessAmount.js to add new sl_amount to Total
    [] method to compare and display Total v. Goal




        // checkTotalVsGoal(newTotal) {
        //     if (newTotal >= goal_amount) {
        //         console.log("you did it!")
        //     }
        // }

    // updateGoalvsTotal() {
    //     let totalDiff = document.querySelector("#goal-v-total")
    //     let goalAmt = document.querySelector('.goal-display')

    //     totalDiff.innerHTML = `<p>${this.spendless_amount}</p>`
    //      if statement:
                // if totalDiff === 0 {
                //  alert("You reached your goal!")
                // } 
    // }