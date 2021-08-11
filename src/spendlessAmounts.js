class SpendlessAmount {

    constructor(sl_amount, sl_amountData) {
        this.id = sl_amount.id
        this.amount = sl_amountData.attributes.amount
        this.description = sl_amountData.attributes.description
        SpendlessAmount.all.push(this)
    }

    // add each new spendless amount to the total
    addToTotal(sl_amount) {
        this.amount += total.total 
    }

    // add each new spendless amount to the table of all events
    showSpendlessAmount(slAmountData) {
        console.log(spendless_amount)
        const newRow = document.createElement('tr')
        const dateData = document.createElement('td')
        const amountData = document.createElement('td')
        const descriptionData = document.createElement('td')
        console.log(newRow)
            }
    }

    SpendlessAmount.all = []


