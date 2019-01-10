let myAccount = {
    name: 'Hasibul Alam Ratul',
    expenses: 0,
    income:0
}

let addExpenses = function (account ,amount){
    account.expenses = account.expenses + amount
}

let addIncome = function (account,amount){
    account.income = account.income + amount
}

let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}

getAccountSummary = function (account){
    let amount = account.income - account.expenses
    console.log(`Account for ${account.name} has $${amount}. $${account.income} in income. $${account.expenses} in expenses`)
}

addIncome(myAccount,1000)
addExpenses(myAccount, 2.50)
addExpenses(myAccount, 200)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)