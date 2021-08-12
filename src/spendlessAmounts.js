class SpendlessAmount {

    constructor(sl_amountData) {
        debugger
        this.id = sl_amountData.id
        this.spendless_amount = sl_amountData.attributes.amount
        this.spendless_description = sl_amountData.attributes.description
        SpendlessAmount.all.push(this)
        
    }

    // add each new spendless amount to the total
    addToTotal(sl_amount) {
        this.amount += total.total 
    }

    // add each new spendless amount to the table of all events
    showSpendlessAmount(sl_amount) {
        // console.log(spendless_amount)
        const table = document.querySelector(".sl-table")
        const newRow = table.insertRow(0)
        const newDate = newRow.insertCell(0)
        const newAmount = newRow.insertCell(1)
        const newDescription = newRow.insertCell(2)
        newDate.innerText = this.created_at
        newAmount.innerText = this.amount
        newDescription.innerText = this.description
            }
    }

    SpendlessAmount.all = []


