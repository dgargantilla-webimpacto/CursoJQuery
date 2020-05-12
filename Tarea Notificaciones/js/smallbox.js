(function(){

var sbContador = 0;


$.smallBox = function( opciones ){

	opciones = $.extend({
		img: undefined,
		titulo: undefined,
		subtitulo:undefined,
		color: "#58167d",
		fa: "fa-comments-o",
		timeout: 3500

	},opciones);


	// Creare un ID unico para cada Notificacion
	// y asi tener un mejor control del objeto
	sbContador ++;
	var sbID = "sbID-" + sbContador;  //ejemplo:  sbID-1... sbID-2.... 

	var html = "";


	// Creare un div especial llamado sb-topright
	// donde insertare las notificaciones
	// para que se apilen una abajo de otra... pero este div
	// solo debe de crearse una vez.
	console.log( $(".sb-topright").length );

	if( $(".sb-topright").length === 0 ){
		html = '<div class="sb-topright"></div>';
		$("body").append(html);
	}


		html  = '';
		html += '<div id="'+ sbID +'" class="sb-body" style="background-color:'+ opciones.color +'">'; // Aqui debemos colocar el color

		// Si viene el parametro de imagen... crearlo
		if( opciones.img != undefined  ){
			html += '<div class="sb-foto">';
			html += '<img src="'+ opciones.img +'">';
			html += '</div>';
		}


		html += '<div class="sb-contenido" align="right">';
		html += '<span> ';
		html += '<span class="sb-titulo">'+ opciones.titulo +'</span>';
		html += '<br>' + opciones.subtitulo;
		html += '</span>';
		html += '</div>';
		html += '<div class="sb-icon">';
		html += '<i class="fa '+ opciones.fa +'"></i>';
		html += '</div>';
		html += '</div> ';


	// Insertaremos la notificacion,
	// pero dentro del div donde van las notificaciones
	$(".sb-topright").append( html );

	// Llamare la entrada, 
	// Pero solo para la notificacion con el ID que cree
	animarEntrada( sbID );

	setTimeout(function() {
        console.log("whatever");
		animarSalida( sbID );

	}, opciones.timeout );

};


// Funcion para animar la salida
function animarSalida( sbID ){
    console.log("whatever");
	var $smallBox = $("#"+sbID);

	var tl = new TimelineMax();
		tl.to( $smallBox, 1, { x:"+= 200px" } )
		  .to( $smallBox, 1, { opacity: 0, onComplete: removerContenido, onCompleteParams:[sbID] }, "-=1" )
		  .to( $smallBox, 0.8, { height: "0px", marginTop: "0px", onComplete:removerNotificacion, onCompleteParams:[sbID] } );

}


// Funcion para remover el contenido de la notificacion
// y asi se vera bien la salida
function removerContenido( sbID ){
	console.log("whatever");
	$("#"+ sbID).find("div").remove();

}


// Destruir la notificacion para mejor manejo de menoria
function removerNotificacion( sbID ){
	console.log("whatever");
	$("#"+ sbID).remove();

}

// Funcion para animar la entrada
function animarEntrada( sbID ){
    console.log("whatever");
	var $smallBox = $("#"+sbID);

	var tl = new TimelineMax();
		tl.from($smallBox, 2.5 ,{ x: "+=350",ease: Elastic. easeOut.config( 1, 0.5)} )
		  .from($smallBox,0.5, {opacity: 0}, "-=2.3");

}



})();