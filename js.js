$( document ).ready(function() {
  // Handler for .ready() called.
  $("navbar").on("click", function(ev) {
      console.log("clickery")
      $.get("demo_test.asp", function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      })
  });
  
}); 