function nextStep(page) {
    const goalName = document.getElementById('goalName').value;
    localStorage.setItem('goalName', goalName);
    window.location.href = page;
}