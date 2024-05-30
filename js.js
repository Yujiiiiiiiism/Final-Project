

  document.getElementById('quantity').addEventListener('input', updatePrice);
  document.getElementById('keycaps').addEventListener('change', updatePrice);

  function updatePrice() {
    const keycapsSelect = document.getElementById('keycaps');
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');

    const selectedOption = keycapsSelect.options[keycapsSelect.selectedIndex];
    const pricePerKeycaps = parseFloat(selectedOption.getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value);

    if (!isNaN(pricePerKeycaps) && !isNaN(quantity)) {
      const totalPrice = pricePerKeycaps * quantity;
      priceInput.value = `$${totalPrice.toFixed(2)}`;
    } else {
      priceInput.value = '';
    }
  }

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const quantity = document.getElementById('quantity').value.trim();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    
    if (quantity === '' || name === '' || phone === '' || address === '') {
      alert('Please fill in all the fields.');
      return; 
    }

    
    alert('Order submitted successfully!');
    alert ('Thank you!');
  });