(function(){

    $.bigBox = function( opciones, callback){
        opciones = $.extend({

            fa: "fa-thumbs-o-up",
		    titulo: undefined,
		    contenido: undefined,
            boton: "Aceptar"
        }, opciones);
    
        if(opciones.titulo === undefined){
            alert("El Titulo es necesario");
            return;
        }
        if(opciones.contenido === undefined){
            alert("El contenido es necesario");
            return;
        }
    var contenido = "";

        contenido = '<div class="bigBox-Fondo"></div>';
    


    
    contenido += '<div class="bigBox-contenedor" align="center">';
	contenido += '<div class="bigBox-Cerrar"> <i class="fa fa-times"></i></div>';
	contenido += '<div class="bigBox-Circulo"><i class="fa ' +opciones.fa + ' fa-3x"></i></div>';
	contenido += '<div class="bigBox-Contenido">';
	contenido += '<span class="bigBox-Titulo">'+opciones.titulo+'</span>';
	contenido += '<span class="bigBox-Texto">'+opciones.contenido+'</span>';
	contenido += '</div>';
	contenido += '<button class="bigBox-Boton">'+opciones.boton+'</button>';
    contenido += '</div>';


    $("body").append( contenido);





    animarEntrada();


    // Funcion del boton cerrar
    $(".bigBox-Cerrar").on("click",function(){
        animarSalida();

        if(typeof callback == 'function'){
            callback('boton-cerrar');
        }
    });

     // Funcion del boton principal
     $(".bigBox-Boton").on("click",function(){
        animarSalida();

        if(typeof callback == 'function'){
            callback('boton-principal');
        }
    });


    //Animar la entrada
    function animarEntrada(){
        var $fondo = $(".bigBox-Fondo");
            
        var $bigBox = $(".bigBox-contenedor");
            //$fondo.fadeIn(300);

            var anchoP = $(window).width();
            var altoP = $(window).height();

            var anchoB = $bigBox.width();
            var altoB = $bigBox.height();

            $bigBox.css({
                top: (altoP / 2) - (altoB / 2),
                left: (anchoP / 2) - (anchoB /2)
            });

            $fondo.show();
            $bigBox.show();
        var tl = new TimelineMax();
            tl.to($fondo, 0.6, { opacity: 0.3})
                .to($bigBox,0.5,{opacity:1}, "-=0.3")
                .from($bigBox,0.8,{ y: "-=30",  ease: Bounce. easeOut}, "-=0.5");
    }


    function animarSalida(){
        var $fondo = $(".bigBox-Fondo");
            
        var $bigBox = $(".bigBox-contenedor");
            //$fondo.fadeIn(300);
            // $fondo.show();
            // $bigBox.show();
        var tl = new TimelineMax();
            tl.to($fondo, 0.3, { opacity: 0})
                .to($bigBox,0.3,{opacity: 0, onComplete:removeBigBox}, "-=0.3");
        
    }

    function removeBigBox(){
        var $fondo = $(".bigBox-Fondo");
            
        var $bigBox = $(".bigBox-contenedor");

        $fondo.remove();
        $bigBox.remove();
    }
};
})();