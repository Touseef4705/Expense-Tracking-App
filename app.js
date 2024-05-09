let income = document.getElementById("income")
let expense = document.getElementById("expense")
let saving = document.getElementById("saving")

let currentIncome = document.getElementById("currentIncome")
let currentExpense = document.getElementById("currentExpense")

function checkSaving() {
    let less = income.value - expense.value
    saving.innerText = less

    currentIncome.innerText = income.value
    currentExpense.innerText = expense.value
}