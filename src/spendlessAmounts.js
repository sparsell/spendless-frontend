class SpendlessAmount {

    constructor(sl_amountData) {
        // debugger
        // console.log(sl_amountData)
        this.id = sl_amountData.id
        this.created_at = sl_amountData.attributes.created_at
        this.spendless_amount = sl_amountData.attributes.amount
        this.spendless_description = sl_amountData.attributes.description
        SpendlessAmount.all.push(this)
        // this.addToTotal()
        this.showSpendlessAmount()
      
    }

    // add each new spendless amount to the total
    addToTotal() {
        // debugger
        // let currentTotal = document.querySelector(".sl-total").value 
        // let newSlAmt = this.spendless_amount
        // function calculateTotal(SpendlessAmount)
        // currentTotal.innerText = newTotal
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


