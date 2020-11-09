$(document).ready(function(){
  $("#buttonOne").click(function(){
      $("img").hide();
      alert("The images are hidden");
    });

  $("#buttonTwo").click(function(){
      $("img").show();
      alert("The image are unhidden");
    });

  $("#buttonThree").click(function(){
      $("p").toggleClass("larger");
      alert("The image are unhidden");
    });


});
