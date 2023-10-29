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


$( document ).ready(function() {
  // Handler for .ready() called.
  $.get("data.json", function( data ){
    let wb = data;
    //let krzl, desc, leText;
    $.each(wb.dict, function(item, hr){
      krzl = item;
      desc = hr;
      var descr = wb.data[item]
      var tplLink = '<li><a class="dropdown-item" href="#'+krzl+'">'+desc+'</a></li>'
      $('#dropSelect  .dropdown-menu').prepend(tplLink)
      var content = '<article id="'+krzl+'">'+ descr + '</article>'
      $('#infos').append(content)
    })})}); 
