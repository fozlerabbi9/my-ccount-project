
// ==========>>>> All tags Name
const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothesInput = document.getElementById("clothes-input");
const calButton = document.getElementById("cal-button");
const totalEspenses = document.getElementById("total-espenses");
const totalBalance = document.getElementById("total-balance");
const saveInput = document.getElementById("save-input");
const saveButton = document.getElementById("save-button");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

// ========>>>>>>> Total Expenses Amount Function
function expensesFun(foodInput, rentInput, clothesInput) {
    const foodInputNum = parseFloat(foodInput.value);
    const rentInputNum = parseFloat(rentInput.value);
    const clothesInputNum = parseFloat(clothesInput.value);

    const totalExpensesAmount = foodInputNum + rentInputNum + clothesInputNum;
    foodInput.value = "";
    rentInput.value = "";
    clothesInput.value = "";
    return totalExpensesAmount;
}

function totalBalanceFun(incomeInput, totalExAmount) {
    const incomeMoney = parseFloat(incomeInput.value);
    const balance = incomeMoney - totalExAmount;
    return balance;
}

//======>>>>Calculate Button Click Handler 
calButton.addEventListener("click", function () {
    if (foodInput.value <= 0) {
        alert("Please enter a valid number to Food Fild");
        totalEspenses.innerText = "000";
        totalBalance.innerText = "000";
    }
    else if (rentInput.value <= 0) {
        alert("Please enter a valid number to Rent Fild");
        totalEspenses.innerText = "000";
        totalBalance.innerText = "000";
    }
    else if (clothesInput.value <= 0) {
        alert("Please enter a valid number to Clothes Fild");
        totalEspenses.innerText = "000";
        totalBalance.innerText = "000";
    }
    else {
        const incomeInputValue = parseFloat(incomeInput.value);
        const totalExpensesAmount = expensesFun(foodInput, rentInput, clothesInput);
        if(totalExpensesAmount > incomeInputValue){
            alert ("You've spent extra money");
        }
        else{
            totalEspenses.innerText = totalExpensesAmount;
            const balance = totalBalanceFun(incomeInput, totalExpensesAmount);
            totalBalance.innerText = balance;
        }
    }
});

//======>>>>Save Button Click Handler 
saveButton.addEventListener("click", function () {
    const incomeInputValue = parseFloat(incomeInput.value);
    const saveInputValue = parseFloat(saveInput.value);
    const saving = incomeInputValue * saveInputValue / 100;
    savingAmount.innerText = saving;

    const totalBalanceAmount = parseFloat(totalBalance.innerText);
    const savingAmountNum = parseFloat(savingAmount.innerText);
    if(totalBalanceAmount < savingAmountNum){
        alert("You Can't saving right now");
        savingAmount.innerText = "000"
        remainingBalance.innerText = "000";
    }
    else{
        remainingBalance.innerText = totalBalanceAmount - savingAmountNum;
    }
    
});