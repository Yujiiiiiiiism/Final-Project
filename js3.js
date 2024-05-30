document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Order submitted');
        // Optionally, you can redirect the user to a different page or reset the form
        // window.location.href = 'thank_you.html';
        // checkoutForm.reset();
    });
});
