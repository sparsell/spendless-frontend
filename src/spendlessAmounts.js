class SpendlessAmount {
    constructor(id, SpendlessAmountAttributes) {
        this.id = id
        this.amount = SpendlessAmountAttributes.amount
        this.description = SpendlessAmountAttributes.description
        SpendlessAmount.call.push(this)
        }

    showSpendlessAmount() {
        return `
        <div data-id=${this.id} class="card-content">
            <h3> Amount: ${this.amount}</h3>
            <h3> Description: ${this.description}</h3> 
        </div>
        <br><br>`
        }
    }

    SpendlessAmount.all = []


