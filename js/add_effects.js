function add_effect(element_name,num_effect,num_effectOut) {
	var effects=["rubberBand","wobble","fadeInUp","lightSpeedIn","zoomInLeft","zoomIn","zoomInRight","rollIn","flash","tada"] ;
	this.name=element_name;
	this.effect=num_effect;
	this.add=function(){
		var random=Math.floor(Math.random()*num_effect[0])+num_effect[1];
		$(this.name).addClass("animated "+effects[random]);
		$(this.name).css("visibility","visible");
	}
	this.add_mul=function(){
		$(this.name).each(function(){
			var pos = $(this).offset().top;
      		var winTop = $(window).scrollTop();
      		var random=Math.floor(Math.random()*num_effect[0])+num_effect[1];
        if (pos < winTop + 600) {
        	$(this).addClass("animated "+effects[random]);
        	$(this).css("visibility","visible");}
		})
	}

}