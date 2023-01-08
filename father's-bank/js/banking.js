function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldValue;
};

function updateTotalField(totalFieldId, amount) {
    const inputShow = document.getElementById(totalFieldId);
    const inputShowText = inputShow.innerText;
    const previousInputShow = parseFloat(inputShowText);
    inputShow.innerText = previousInputShow + amount;
}

function getCurrentBalance() {
    const previousTotalBalance = document.getElementById('total-balance');
    const previousTotalBalanceText = previousTotalBalance.innerText;
    const totalBalanceAmount = parseFloat(previousTotalBalanceText);
    return totalBalanceAmount;
}

function updateBalance(totalBalance, isAdd) {
    const previousTotalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        previousTotalBalance.innerText = totalBalanceAmount + totalBalance;
    }
    else{
        previousTotalBalance.innerText = totalBalanceAmount - totalBalance;
    }
}

// handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('total-deposit', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && currentBalance > newWithdrawAmount) {
        updateTotalField('total-withdraw', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});