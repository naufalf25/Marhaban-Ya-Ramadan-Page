$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
});

function openNav() {
    document.getElementById("slider").style.width = "250px";
}

function closeNav() {
    document.getElementById("slider").style.width = "0";
}