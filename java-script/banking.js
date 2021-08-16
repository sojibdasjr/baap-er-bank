
function getInputValue (){
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  // restro input value
  depositInput.value = '';
  return depositAmount;
}

// deposit button java script 
document.getElementById('deposit-button').addEventListener('click', function(){
  
  //deposit input field
  // const depositInput = document.getElementById('deposit-input');
  // const depositAmountText = depositInput.value;
  // const depositAmount = parseFloat(depositAmountText);
  const depositAmount = getInputValue();
  // get current deposit
  const depositTotal = document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const newDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = newDepositTotal + depositAmount;

  //balance input 
  const previuseBalance = document.getElementById('balance-input');
  const previuseBalanceText = previuseBalance.innerText;
  const newBalance = parseFloat(previuseBalanceText);
  previuseBalance.innerText = newBalance + depositAmount;

  // condition
  // deposit error

  

  
})

// handelar withdrow 

// withdrow button java

document.getElementById('withdrow-button').addEventListener('click', function(){
  const WithdrowInput = document.getElementById('withdrow-input');
  const withdrowAmoutText = WithdrowInput.value;
  const withdrowAmout = parseFloat(withdrowAmoutText);
  
  // get current withdrow
  const withdrowTotal = document.getElementById('withdrow-total');
  const withdrowTotalText =  withdrowTotal.innerText;
  const newWithdrow = parseFloat ( withdrowTotalText);
  withdrowTotal.innerText = withdrowAmout + newWithdrow;

  // balance update

  const balanceInput = document.getElementById('balance-input');
  const previuseBalanceText = balanceInput.innerText;
  const previuseBalance = parseFloat(previuseBalanceText);
  balanceInput.innerText = previuseBalance - withdrowAmout;
  
  

  // resete withdrow button
  WithdrowInput.value = '';
  
})