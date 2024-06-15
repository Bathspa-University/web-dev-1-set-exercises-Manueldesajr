const petrolCostInput = document.getElementById('petrol-cost');
const litersPurchasedInput = document.getElementById('liters-purchased');
const calculateButton = document.getElementById('calculate-button');
const totalCostParagraph = document.getElementById('total-cost');

// Set default values for petrol cost and liters purchased
petrolCostInput.value = 1.72;
litersPurchasedInput.value = 0;

// Add event listener to calculate button
calculateButton.addEventListener('click', () => {
    // Get values from petrol cost and liters purchased inputs
    const petrolCost = parseFloat(petrolCostInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);

    // Calculate total cost
    const totalCost = petrolCost * litersPurchased;

    // Display total cost
    totalCostParagraph.innerText = Total cost: $${totalCost.toFixed(2)};
});

// Add event listener to petrol cost input
petrolCostInput.addEventListener('input', () => {
    // Update default value for petrol cost input
   petrolCostInput.defaultValue = petrolCostInput.value;
});

// Add event listener to liters purchased input
litersPurchasedInput.addEventListener('input', () => {
    // Update default value for liters purchased input
    litersPurchasedInput.defaultValue = litersPurchasedInput})
js
