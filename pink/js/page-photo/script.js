var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))});var filterIndex=1;function filter(e){showFilters(filterIndex=e)}function showFilters(e){var a,n=document.getElementsByClassName("js-range-slides"),s=document.getElementsByClassName("upload__filter-btn");for(a=0;a<n.length;a++)n[a].style.display="none";for(a=0;a<s.length;a++)s[a].className=s[a].className.replace(" upload__filter-btn--active","");n[filterIndex-1].style.display="block",s[filterIndex-1].className+=" upload__filter-btn--active"}showFilters(filterIndex);