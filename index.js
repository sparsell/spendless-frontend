const endPoint = "http://localhost:3000/api/v1/goals"

document.addEventListener('DOMContentLoaded', () => getGoals())

function getGoals() {
    fetch(endPoint)
        .then(response => response.json())
        .then(goals => {
            goals.data.forEach(goal => {
                const goalCard = 
            })
        })
}



