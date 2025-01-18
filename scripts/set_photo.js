function nextStep(page) {
    const photo = document.getElementById('goalPhoto').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        localStorage.setItem('goalPhoto', e.target.result);
        window.location.href = page;
    };
    reader.readAsDataURL(photo);
}