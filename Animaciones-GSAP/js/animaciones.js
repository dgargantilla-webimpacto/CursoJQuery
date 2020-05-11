(function(){




	function mover(dir){

		var $cajaRoja = $(".cajaRoja");

		$cajaRoja.clearQueue();


		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();

		switch( dir ){

			case "arr":
				$cajaRoja.animate({
					top: "-=100",
				}, 450);

				tl.to($cajaAzul, 0.450, {y:"-=100"});
			break;

			case "aba":
				$cajaRoja.animate({
					top: "+=100",
				},450);

				tl.to($cajaAzul, 0.450, {y:"+=100"});
			break;

			case "izq":
				$cajaRoja.animate({
					left: "-=100",
				});

				tl.to($cajaAzul, 0.450, {x:"-=100"});
			break;

			case "der":
				$cajaRoja.animate({
					left: "+=100",
				}, 450);

				tl.to($cajaAzul, 0.450, {x:"+=100"});
			break;


			case "res": 

				$cajaRoja.animate({
					top: "0px",
					left: "0",
					width: "50px",
					height: "50px",
					backgroundColor: "red"
				},450);

				tl.to($cajaAzul, 0.450, {
					x:"0px",
					y:"0px",
					width: "50px",
					height: "50px",
					backgroundColor: "blue"
				}).to($cajaRoja, 0.450, { backgroundColor:"red"});
		}

	}

	// Funcion del keypress en la pagina, para moverlo con las teclas direccionales
	$(document).on("keydown",function(e){


		switch( e.keyCode ){
			case 38:
				mover("arr");
			break;
		
			case 40:
				mover("aba");
			break;

			case 39:
				mover("der");
			break;

			case 37:
				mover("izq");
			break;
		
			default:
				mover("res");
			break;
		}

	});


	$("#btnAncho").on('click', function(){
		var $cajaRoja = $(".cajaRoja");

		$cajaRoja.clearQueue();


		var $cajaAzul = $(".cajaAzul");
		var tl = new TimelineMax();

		$cajaRoja.animate({
			width: "+=150",
			height: "+=150"
		},500);

		tl.to( $cajaAzul, 0.5, {
			width: "+=150",
			height: "+=150",
			backgroundColor: "red" 
		}).to( $cajaRoja, 0.3, { backgroundColor: "blue"},"-=0.3");
	});

	// Funcion de los botones
	$("button").on('click', function() {
		
		var dir = $(this).data("dir");
		mover( dir );

	});


})();