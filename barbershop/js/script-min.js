var link=document.querySelector(".login-link"),popup=document.querySelector(".modal-login"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),password=popup.querySelector("[name=password]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(o){isStorageSupport=!1}link.addEventListener("click",function(o){o.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(o){o.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(o){login.value&&password.value?isStorageSupport&&localStorage.setItem("login",login.value):(o.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});var mapLink=document.querySelector(".contacts-button-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(o){o.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(o){o.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))});