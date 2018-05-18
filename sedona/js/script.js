var hotelsBtn = document.querySelector(".hotels-btn");
var hotelsForm = document.querySelector(".form-hotels");

hotelsBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	hotelsForm.classList.toggle("active");
});