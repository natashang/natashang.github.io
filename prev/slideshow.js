$(document).ready(function(){ 

	'use strict';

	//********* slide show js

    var slideIndex = 1;
   var dots = document.getElementsByClassName("dot");
	let dotsArray = document.querySelectorAll("span.dot");

	dotsArray.forEach(function(elem, index) {
			//alert("hi index = " + index);
			elem.addEventListener('click', function() {
			//	alert("hey index = " + index);
				this.classList.add("active");
				currentSlide(index+1);
		}, false);
	});


	showSlides(slideIndex);
  
    function currentSlide(n) {
    	showSlides(slideIndex = n);
    }

   function showSlides(n) {
   	//	alert("showSlide(n = " + n + ")");
	   	
	   	var i;
   		var slides = document.getElementsByClassName("slide");

	   	if (n > slides.length) {
	   		slideIndex = 1;
	   	}

	   	if (n < 1) {
	   		slideIndex = slides.length;
	   	}

	   	for (i = 0; i < slides.length; i++){
	   		slides[i].style.display = " none";
	   	}

	   	for (i = 0; i < dots.length; i++) {
	   		dots[i].classList.remove("active");
	   	}

	  // 	alert("showing slide " + (slideIndex));

	   	slides[slideIndex-1].style.display = " block";
	   	dots[slideIndex-1].classList += " active";

	   	//setTimeout(showSlides, 3000);
	   
   } 
});