class SpendlessAmount {

    constructor(sl_amountData) {
        this.id = sl_amountData.id
        this.created_at = sl_amountData.attributes.created_at
        this.spendless_amount = sl_amountData.attributes.amount
        this.spendless_description = sl_amountData.attributes.description
        SpendlessAmount.all.push(this)
        this.adjustTotal()
        this.showSpendlessAmount()
      
    }

    // add each new spendless amount to the total
    adjustTotal() {
        let currentTotal = document.querySelector("#sl-total")
        let newTotal = 0
        SpendlessAmount.all.forEach(function(e) {
        newTotal += e.spendless_amount
        })
        currentTotal.innerHTML = `<span>${newTotal}</span>`
        }

    // add each new spendless amount to the table of all events
    showSpendlessAmount() {
        let date = new Date(this.created_at).toLocaleString().split(',')[0]
        const table = document.querySelector("#sl-table")
        const newRow = table.insertRow()
        const newDate = newRow.insertCell(0)
        const newAmount = newRow.insertCell(1)
        const newDescription = newRow.insertCell(2)

        newDate.innerHTML = `<td>${date}</td>`
        newAmount.innerHTML = `<td><span>$</span>${this.spendless_amount}</td>`
        newDescription.innerHTML = `<td>${this.spendless_description}</td>`
          
            }
    }

    SpendlessAmount.all = []


