/*
1. set event handler on withdraw button.
2. get the withdraw amount value from the withdraw input field
3. get the withdraw amount from the total withdraw  input field
4. get the withdraw amount value 
5. get the previous total balance value from the balance field
6. get the total balance value
7. set the total balance value on the balance field
8. clear the withdraw input field
*/

// step:1
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // step:2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    const NewithdrawFieldAmount = parseFloat(withdrawFieldAmountString);
    
    // step:8
    withdrawField.value = '';
    
    if (isNaN(NewithdrawFieldAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step:3
    const getWithdrawElement = document.getElementById('get-withdraw');
    const getWithdrawAmountString = getWithdrawElement.innerText;
    const getWithdrawAmount = parseFloat(getWithdrawAmountString);

    // step:5 get value of balance field
    const balanceField = document.getElementById('total-balance');
    const previousBalanceAmountString = balanceField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    if (NewithdrawFieldAmount > previousBalanceAmount) {
        alert('শশুড়ের ব্যাংকে এত টাকা নাই...!!');
        return;
    }

    // step:4
    const totalWithdraw = NewithdrawFieldAmount + getWithdrawAmount;
    getWithdrawElement.innerText = totalWithdraw;

    // step: 6
        const totalWithdrawBalance = previousBalanceAmount - NewithdrawFieldAmount;
    // step:7
    balanceField.innerText = totalWithdrawBalance;
    
})