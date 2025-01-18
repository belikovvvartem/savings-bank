function nextStep(page) {
    const photo = document.getElementById('goalPhoto').files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        localStorage.setItem('goalPhoto', e.target.result);
        window.location.href = page;
    };
    reader.readAsDataURL(photo);
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
  