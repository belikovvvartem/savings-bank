function nextStep(page) {
    const price = document.getElementById('goalPrice').value;
    const currency = document.getElementById('goalCurrency').value;
    localStorage.setItem('goalPrice', price);
    localStorage.setItem('goalCurrency', currency);
    window.location.href = page;
}