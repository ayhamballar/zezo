$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage'], #about a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
     
      // Store hash
      var hash = this.hash;
      console.log($(hash));

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

      });
    } // End if
  });


  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
        
    });
  });

  onload();

function onload(){
    $("#zezo").addClass("zezo-effect");
    var i=1;
    var time=setInterval(function(){
      if (i==7){
        clearInterval(time);
      }
      else{
      $(".eff-"+i).addClass("head-effect");
      i=i+1;
    }
    },500);

    setTimeout(function(){
      var co=setInterval(function(){
      if($("[class*='words']").css("color")=="rgb(48, 48, 48)"){
        $("[class*='words']").css("color","rgb(255, 255, 255)")}
        else {
          $("[class*='words']").css("color","rgb(48, 48, 48)");
        }
    },90);
          setTimeout(function(){
            clearInterval(co);
            $("[class*='words']").css("color","#303030");
            console.log($("[class*='words']").css("color"));
          },800);

    },5500);

  }
})