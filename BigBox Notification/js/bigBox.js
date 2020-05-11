(function(){

    $.bigBox = function( opciones){
        opciones = $.extend({

        }, opciones);
    };


    var contenido = "";

        contenido = '<div class="bigBox-Fondo"></div>';
    


    
    contenido += '<div class="bigBox-contenedor" align="center">';
	contenido += '<div class="bigBox-Cerrar"> <i class="fa fa-times"></i></div>';
	contenido += '<div class="bigBox-Circulo"><i class="fa fa-thumbs-o-up fa-3x"></i></div>';
	contenido += '<div class="bigBox-Contenido">';
	contenido += '<span class="bigBox-Titulo">Genial!</span>';
	contenido += '<span class="bigBox-Texto">Estamos listos para proceder usando udemy</span>';
	contenido += '</div>';
	contenido += '<button class="bigBox-Boton">Empezar curso!</button>';
    contenido += '</div>';


    $("body").append( contenido);





    animarEntrada();


    // Funcion del boton cerrar
    $("body").on("click",".bigBox-Cerrar",function(){
        animarSalida();
    });




    //Animar la entrada
    function animarEntrada(){
        var $fondo = $(".bigBox-Fondo");
            
        var $bigBox = $(".bigBox-contenedor");
            //$fondo.fadeIn(300);
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
})();