(function(){

    $.smallBox = function ( opciones ){

        opciones = $.extend({
            titulo: undefined,
            subtitulo: undefined,
            contenido: undefined,
            fa: "fa-envelope-o",
            img: undefined,
            timeout: 4500
        }, opciones);


        var html = "";

        html += '<div class="smallBox-contenedor">';
	    html += '<div class="smallBox-foto">';
		html += '<img src="'+opciones.img+'">';
	    html += '</div>';
	    html += '<div class="smallBox-contenido" align="center">';
		html += '<div class="smallBox-textoContenedor" align="left">';
		html += '<span class="smallBox-titulo">'+ opciones.titulo+'</span>';
		html += '<span class="smallBox-subTitulo">'+opciones.subtitulo+'</span>';
		html += '</div>';
		html += '<div class="smallBox-pico"></div>';
		html += '<div class="smallBox-cajaColor">';
		html += '<div class="smallBox-colorTexto">';
		html += '<i class="fa fa-bell-o"></i>'+	opciones.contenido+'';
		html += '</div>';
		html += '<div class="smallBox-colorIcon">';
		html += '<i class="fa '+opciones.fa+' fa-2x"></i>';
		html += '</div>';
		html += '</div>';
		html += '<div class="smallBox-sombra"></div>';
	    html += '</div>';
        html += '</div>';

        $("body").append( html);

        animarEntrada();

        setTimeout(function(){

            animarSalida();

        }, opciones.timeout);

    };


    function animarSalida(){
        var $smallBox = $(".smallBox-contenedor");

        var tl = new TimelineMax();
            tl.to($smallBox, 1 ,{ x: "+=100"})
            .to($smallBox,1, {opacity: 0, onComplete: removerSmallBox}, "-=1"); 
        
    }

    function removerSmallBox(){
        $(".smallBox-contenedor").remove();
    }


    function animarEntrada(){
        var $smallBox = $(".smallBox-contenedor");

        var tl = new TimelineMax();
            tl.from($smallBox, 2.5 ,{ x: "+=350",ease: Elastic. easeOut.config( 1, 0.5)})
            .from($smallBox,0.5, {opacity: 0}, "-=2.3"); 
    }



})();