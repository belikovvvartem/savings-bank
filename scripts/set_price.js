function nextStep(page) {
    const price = document.getElementById('goalPrice').value;
    const currency = document.getElementById('goalCurrency').value;
    localStorage.setItem('goalPrice', price);
    localStorage.setItem('goalCurrency', currency);
    window.location.href = page;
}

document.addEventListener("touchstart", function(event) {
    if (event.target.tagName === "INPUT") {
      document.body.style.zoom = "1"; 
    }
  });
  
  document.addEventListener("touchend", function(event) {
    if (event.target.tagName === "INPUT") {
      document.body.style.zoom = "";
    }
  });






  