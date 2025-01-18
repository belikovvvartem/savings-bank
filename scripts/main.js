document.addEventListener('DOMContentLoaded', function () {
    const background = localStorage.getItem('background') || '';

    if (background) {
        document.body.style.background = background;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
    }
});

function redirectTo(page) {
    window.location.href = page;
}

function changeBackground(backgroundStyle) {
    document.body.style.background = backgroundStyle;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    localStorage.setItem('background', backgroundStyle);
}

function deleteGoalAndRedirect() {
    localStorage.clear();
    window.location.href = 'index.html';
}