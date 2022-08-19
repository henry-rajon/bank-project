// Step:1 get value of deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step:2 get value of deposit field
    const depositFieldElememt = document.getElementById('deposit-field');
    const previousDepositValueString = depositFieldElememt.value;
    const previousDepositValue = parseFloat(previousDepositValueString);

    // step:7
    depositFieldElememt.value = '';
    
    if (isNaN(previousDepositValue)) {
        alert('Please provide a valid number');
        return;
    }
    // step:3 get value of deposit total field
    const getDepositElement = document.getElementById('get-deposit');
    const getDepositElementValueString = getDepositElement.innerText;
    const getDepositElementValue = parseFloat(getDepositElementValueString);
    
    // step:4 get value of total deposit
    const totalDeposit = previousDepositValue + getDepositElementValue;
    getDepositElement.innerText = totalDeposit;   
    
    // step:5 get value of balance field
    const balanceField = document.getElementById('total-balance');
    const previousBalanceAmountString = balanceField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    
    // step:6 get value of total 
    const totalBalnceAmount = previousBalanceAmount + previousDepositValue;
    balanceField.innerText = totalBalnceAmount;
    
})