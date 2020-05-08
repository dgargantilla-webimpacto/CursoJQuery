(function(){

	var $cajaRoja = $(".cajaRoja");


	$("#btnTam").on("click", function(){
		$cajaRoja.animate({
			
			height: "+=100px",
			width: "+=100px",
		},1000,function(){
			console.log("whatever");

			
		}).animate({
			height: "-=100px",
			width: "-=100px",

			//top: "-=10px",
			//esto no funciona con el animate
			//backgroundColor: "violet",
		}).animate({
			opacity:0.1
		},1500,function(){
			$(this).remove();
		});

	});

})();