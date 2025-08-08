document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const billInput = document.getElementById('billInput');
  const peopleInput = document.getElementById('peopleInput');
  const tipAmountEl = document.getElementById('tipAmount');
  const totalAmountEl = document.getElementById('totalAmount');
  const resetBtn = document.getElementById('resetBtn');
  const errorMessage = document.getElementById('errorMessage');
  const errorMessage1 = document.getElementById('errorMessage1');
  const tipButtons = document.querySelectorAll('.tip-btn');
  const customTip = document.getElementById('customTip');

  let billAmount = 0;
  let tipPercentage = 0;
  let numberOfPeople = 0;
  let activeTipButton = null;

  // Event Listeners
  billInput.addEventListener('input', handleBillInput);
  peopleInput.addEventListener('input', handlePeopleInput);
  customTip.addEventListener('input', handleCustomTip);
  resetBtn.addEventListener('click', resetCalculator);

  // Add click event to all tip buttons
  tipButtons.forEach(button => {
    button.addEventListener('click', () => handleTipButtonClick(button));
  });

  // Input Handlers
  function handleBillInput() {
    const value = billInput.value.trim();
    billAmount = parseFloat(value);
    
    if (value === '' || isNaN(billAmount) || billAmount <= 0) {
      billInput.classList.add('ring-2', 'ring-error-red');
      errorMessage1.classList.remove('hidden');
      resetAmounts();
    } else {
      billInput.classList.remove('ring-2', 'ring-error-red');
      errorMessage1.classList.add('hidden');
      if (validatePeopleInput()) {
        calculateTip();
      }
    }
  }

  function handlePeopleInput() {
    const value = peopleInput.value.trim();
    numberOfPeople = parseFloat(value);
    
    if (value === '' || isNaN(numberOfPeople) || numberOfPeople <= 0) {
      peopleInput.classList.add('ring-2', 'ring-error-red');
      errorMessage.classList.remove('hidden');
      resetAmounts();
    } else {
      peopleInput.classList.remove('ring-2', 'ring-error-red');
      errorMessage.classList.add('hidden');
      if (validateBillInput()) {
        calculateTip();
      }
    }
  }

  // Validation Functions
  function validateBillInput() {
    const value = billInput.value.trim();
    billAmount = parseFloat(value);
    return !(value === '' || isNaN(billAmount) || billAmount <= 0);
  }

  function validatePeopleInput() {
    const value = peopleInput.value.trim();
    numberOfPeople = parseFloat(value);
    return !(value === '' || isNaN(numberOfPeople) || numberOfPeople <= 0);
  }

  function resetAmounts() {
    tipAmountEl.textContent = '0.00';
    totalAmountEl.textContent = '0.00';
  }

  // Tip Calculation Functions
  function handleTipButtonClick(button) {
    // Reset all buttons to default state
    tipButtons.forEach(btn => {
      btn.classList.remove('bg-cyan-300', 'text-very-dark-cyan');
      btn.classList.add('bg-very-dark-cyan', 'text-white');
    });
    
    // Set new active button
    button.classList.remove('bg-very-dark-cyan', 'text-white');
    button.classList.add('bg-cyan-300', 'text-very-dark-cyan');
    activeTipButton = button;
    
    // Reset custom tip input
    customTip.value = '';
    
    // Get tip percentage and calculate
    tipPercentage = parseFloat(button.dataset.tip);
    if (validateBillInput() && validatePeopleInput()) {
      calculateTip();
    }
  }

  function handleCustomTip() {
    // Reset active button if custom tip is used
    if (activeTipButton) {
      activeTipButton.classList.remove('bg-cyan-300', 'text-very-dark-cyan');
      activeTipButton.classList.add('bg-very-dark-cyan', 'text-white');
      activeTipButton = null;
    }
    
    tipPercentage = parseFloat(customTip.value) || 0;
    if (validateBillInput() && validatePeopleInput()) {
      calculateTip();
    }
  }

  function calculateTip() {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const tipPerPerson = tipAmount / numberOfPeople;
    const totalPerPerson = (billAmount + tipAmount) / numberOfPeople;
    
    tipAmountEl.textContent = tipPerPerson.toFixed(2);
    totalAmountEl.textContent = totalPerPerson.toFixed(2);
    
    updateResetButton();
  }

  function updateResetButton() {
    const shouldEnable = billAmount > 0 || tipPercentage > 0 || numberOfPeople > 0;
    resetBtn.disabled = !shouldEnable;
    if (shouldEnable) {
      resetBtn.classList.remove('disabled:opacity-50', 'disabled:cursor-not-allowed');
    } else {
      resetBtn.classList.add('disabled:opacity-50', 'disabled:cursor-not-allowed');
    }
  }

  function resetCalculator() {
    // Reset inputs
    billInput.value = '';
    peopleInput.value = '';
    customTip.value = '';
    
    // Reset amounts display
    resetAmounts();
    
    // Reset all tip buttons
    tipButtons.forEach(btn => {
      btn.classList.remove('bg-cyan-300', 'text-very-dark-cyan');
      btn.classList.add('bg-very-dark-cyan', 'text-white');
    });
    
    // Reset states
    billAmount = 0;
    tipPercentage = 0;
    numberOfPeople = 0;
    activeTipButton = null;
    
    // Disable reset button
    resetBtn.disabled = true;
    resetBtn.classList.add('disabled:opacity-50', 'disabled:cursor-not-allowed');
    
    // Clear any error messages and styles
    billInput.classList.remove('ring-2', 'ring-error-red');
    peopleInput.classList.remove('ring-2', 'ring-error-red');
    errorMessage.classList.add('hidden');
    errorMessage1.classList.add('hidden');
  }
});