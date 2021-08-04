

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