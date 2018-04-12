var feedback = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".btn-close");
var form = popup.querySelector("form");
var yourName = popup.querySelector("[name=feedback-name-field]");
var email = popup.querySelector("[name=feedback-email-field]");

/*var isStorageSupport = true;
var storage = "";*/

/*try {
	storage = localStorage.getItem("yourName");
} catch (err) {
	isStorageSupport = false;
}*/

feedback.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-feedback-show");
	overlay.classList.add("modal-overlay-show");

	yourName.focus();
	/*if (storage) {
		yourName.value = storage;
		email.focus();
	} else {
		yourName.focus();
	}*/
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-feedback-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-feedback-error");
});

form.addEventListener("submit", function(evt) {
	if (!yourName.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-feedback-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-feedback-error");
	}/* else {
		if (isStorageSupport) {
			localStorage.setItem("yourName", yourName.value);
		}
	}*/
});


window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (popup.classList.contains("modal-feedback-show")) {
			popup.classList.remove("modal-feedback-show");
			overlay.classList.remove("modal-overlay-show");
			popup.classList.remove("modal-feedback-error");
		}
	}
});

var yourNameFixed = document.getElementById("feedback-name-field").oninput = inputChange;

function inputChange() {
	var popupLabel = popup.querySelector("label");
    if (event.target.value.length) {
       popupLabel.classList.add("js-input-not-empty");
    } else {
        popupLabel.classList.remove("js-input-not-empty");
    }
}