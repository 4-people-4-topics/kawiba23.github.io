var app = angular.module('myApp', []);
  app.controller('MyCtrl', function($scope) {
    
});

document.getElementById("header.html") = "header"

$( document ).ready(function() {
    // Handler for .ready() called.
    $.get("data.json", function( data ){
      let wb = data;
      let krzl, desc, leText;
      $.each(wb.dict, function(item, hr){
        krzl = item;
        desc = hr;
        var descr = wb.data[item]
        var tplLink = '<li><a class="dropdown-item" href="#'+krzl+'">'+desc+'</a></li>'
        $('#dropSelect  .dropdown-menu').prepend(tplLink)
        var content = '<article id="'+krzl+'">'+ descr + '</article>'
        $('#infos').append(content)
      });
      

    })
    $("#dropSelect .dropdown-menu").on("click", "a", function(el){
      console.log(el)
      var clickedItem = $(el.target)
      var showNext = clickedItem.attr('href')
      console.log(showNext)
      $('#infos article.active').removeClass('active')
      $(showNext).addClass("active")
    })
    
  });
;


$( document ).ready(function() {
    // Handler for .ready() called.
    $("#collapseOne .btn").on("click", function(ev) {
        console.log("clickery")
        $.get("demo_test.asp", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        })
    });
    
  });
  





  function myFunction() {
    document.getElementById("'header.html'").innerHTML = "header";
  }