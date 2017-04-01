$(document).ready(function(){
  onload();

  $(".navbar a, footer a[href='#myPage'], #about a").on('click', function() {
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
      });
    } 
  });

var slideanim= new add_effect(".slideanim",[0,2]);
var logoanim=new add_effect(".logoanim",[0,0]);
var tadaanim=new add_effect(".tadaanim",[0,9]);
$(window).scroll(function(){
slideanim.add_mul();
logoanim.add_mul();
tadaanim.add_mul();

console.log(Math.floor(Math.random()*10));

});


function onload(){
    var zezo=new add_effect("#zezo",[0,3]);
    zezo.add()
    var i=1;
    var intro , thumbnail;
    var timer=setInterval(function(){
      if (i==1) {intro=new add_effect(".intro"+i,[0,4]);}else
      if (i==2||i==4){intro=new add_effect(".intro"+i,[0,7]);}else
      if (i==3) {intro=new add_effect(".intro"+i,[0,5]);}else
      if (i==5) {intro=new add_effect(".intro"+i,[0,6]);}else
      if (i==6) {intro=new add_effect(".intro"+i,[0,1]);}else
      {thumbnail=new add_effect(".thumbnail",[10,1]); thumbnail.add();}
        intro.add();
        i=i+1;
        if (i==8) {setTimeout(function(){intro=new add_effect("#flash",[0,8]);intro.add();},1000);
                  clearInterval(timer);}
    },900);
  }

  $("#read").click(function(){
        $("#myModal").modal({backdrop: "static"});
    });
})