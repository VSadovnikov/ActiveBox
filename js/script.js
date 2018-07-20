(function() {

  // Definition of caller element
  var getTriggerElement = function(el) {
    var isCollapse = el.getAttribute('data-collapse');
    if (isCollapse !== null) {
      return el;
    } else {
      var isParentCollapse = el.parentNode.getAttribute('data-collapse');
      return (isParentCollapse !== null) ? el.parentNode : undefined;
    }
  };

  // A handler for click on toggle button
  var collapseClickHandler = function(event) {
    var triggerEl = getTriggerElement(event.target);
    // If trigger element does not exist
    if (triggerEl === undefined) {
      event.preventDefault();
      return false;
    }

    // If the target element exists
    var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
    if (targetEl) {
      triggerEl.classList.toggle('-active');
      targetEl.classList.toggle('-on');
    }
  };

  // Delegated event
  document.addEventListener('click', collapseClickHandler, false);

})(document, window);


/*Slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active";
  
  }
  
  












