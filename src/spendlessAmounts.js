

class SpendlessAmount {
    constructor(amount, description) {
        this.amount = amount
        this.description = description
        }

    showSpendlessAmount() {
        return `
        <div data-id=${this.id} class="card-content">
            <h3> Amount: ${this.amount}</h3>
            <h3> Description: ${this.description}</h3> 
        </div>`
    }    
    }


