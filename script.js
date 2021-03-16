document.addEventListener("DOMContentLoaded", function() {
  
  function menuFixed() {
    
    window.addEventListener('scroll', function(){
      let topView = document.querySelector('body').getBoundingClientRect().top,
          header = document.querySelector('header');

      if(topView < 0) header.classList.add('fixed');
      else header.classList.remove('fixed');
      
    });
    
  }
  menuFixed();



});