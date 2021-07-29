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
    [] Everytime press button, a new set of all the SL amounts show up;
        - make a 'close' button? 
        - make it a modal?
        - show $ with decimal and cents                                
