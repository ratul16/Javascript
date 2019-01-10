var myAccount = {
    name : 'Ratul',
    income : 0,
    expenses : 0
}

var addIncome = function(account,amount) {
    return account.income = account.income + amount
}

var addExpenses = function (account, amount) {
    return account.expenses = account.expenses + amount
}

var reset = function (account) {
        account.income = 0
        account.expenses = 0
}

var getSummary = function (account) {
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. Income is $${account.income} and Expenses is $${account.expenses}`)
}

addIncome(myAccount,1000)
console.log(myAccount)
addExpenses(myAccount, 100)
console.log(myAccount)
addExpenses(myAccount, 100)
console.log(myAccount)
getSummary(myAccount)
reset(myAccount)
console.log(myAccount)
getSummary(myAccount)
