window.onload = function () {
    const goalName = localStorage.getItem('goalName');
    const goalPhoto = localStorage.getItem('goalPhoto');
    const goalPrice = parseFloat(localStorage.getItem('goalPrice')) || 0;
    const goalCurrency = localStorage.getItem('goalCurrency');
    const currentAmount = parseFloat(localStorage.getItem('currentAmount')) || 0;
    const appBackground = localStorage.getItem('appBackground') || '';

    if (appBackground) {
        document.body.style.background = appBackground;
    }

    if (document.getElementById('goalTitle')) {
        document.getElementById('goalTitle').textContent = goalName;
        document.getElementById('goalImage').src = goalPhoto;
        updateProgress(currentAmount, goalPrice, goalCurrency);
    }
};


function updateProgress(currentAmount, goalPrice, goalCurrency) {
    document.getElementById('progressPrice').textContent = `${formatNumber(goalPrice)} ${goalCurrency}`;
}

function formatNumber(number) {
    return number.toLocaleString('uk-UA', { maximumFractionDigits: 0 });
}

function close() {
    localStorage.clear();
    window.location.href = 'index.html';
}
