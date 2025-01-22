const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const calculateBtn = document.getElementById('calculateBtn');
const error = document.getElementById('error');
const result = document.getElementById('result');



function calculateTip(){
  const bill = parseFloat(billAmount.value);
  const tip = parseFloat(tipPercentage.value);


  if(isNaN(bill) || bill < 0){
    result.textContent = alert("Please add a number inside input field");
    error.textContent = '';
    return
  }

  error.textContent = ''; 


const tipAmount = bill * tip;
const totalAmount = bill + tipAmount;

result.innerHTML = `
Tip Amount: $${tipAmount.toFixed(2)} <br>
Total Bill: $${totalAmount.toFixed(2)}
`;
}

calculateBtn.addEventListener('click', calculateTip)

