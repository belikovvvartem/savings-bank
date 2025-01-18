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

function getAmountInput() {
    return parseFloat(document.getElementById('amountInput').value) || 0;
}

function updateAmountAndRedirect(amount) {
    let currentAmount = parseFloat(localStorage.getItem('currentAmount') || '0');
    const goalPrice = parseFloat(localStorage.getItem('goalPrice')) || 0;
    const goalCurrency = localStorage.getItem('goalCurrency');

    currentAmount += amount;
    localStorage.setItem('currentAmount', currentAmount);
    updateProgress(currentAmount, goalPrice, goalCurrency);
    window.location.href = 'goal_page.html';
}

function updateProgress(currentAmount, goalPrice, goalCurrency) {
    const progressPercentage = Math.min((currentAmount / goalPrice) * 100, 100);
    document.getElementById('progressText').textContent = `Накопичено: ${formatNumber(currentAmount)} ${goalCurrency} з ${formatNumber(goalPrice)} ${goalCurrency}`;
    document.getElementById('amountLeft').textContent = `Залишилося накопичити: ${formatNumber(goalPrice - currentAmount)} ${goalCurrency}`;
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
}

function redirectTo(page) {
    window.location.href = page;
}

function formatNumber(number) {
    return number.toLocaleString('uk-UA', { maximumFractionDigits: 0 });
}

function changeBackground(background) {
    localStorage.setItem('appBackground', background);
    document.body.style.background = background;
}

function deleteGoal() {
    if (confirm('Ви впевнені, що хочете видалити ціль?')) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
}

