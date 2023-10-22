$( document ).ready(function() {
  // Handler for .ready() called.
  $("navbar").on("click", function(ev) {
      console.log("clickery")
      $.get("demo_test.asp", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      })
  });
  
}); 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}