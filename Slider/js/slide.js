(function(){
    var actual = 0;
    var ancho = 600;
    
    var $slideShow = $(".slide ul");
    var slides = $slideShow.find("li").length;

    var intervalo = setInterval(function(){
        mover("sig");
    }, 5000);

    function mover( dir, click ){

        if(click)
        clearInterval(intervalo);

        // console.log("whatever");
        ( dir === "sig") ? actual-- : actual++;
        if(actual > 0){
            actual = (slides - 1 ) * -1;

        }else if(actual <= (slides * -1)){
            actual = 0;
        }
        // console.log(actual);
        var margen = actual * ancho;

        var tl = new TimelineMax();
        tl.to($slideShow,1.3,{ 
            marginLeft: margen,  
            ease: Elastic. easeOut.config( 1, 0.6) 
            // ease: SlowMo.ease.config( 0.7, 0.7, false)
        });
        // $slideShow.animate({
        //     marginLeft: margen
        // },450)

    }


    $(".btn-slide").on("click", function(){
        var dir = $(this).data("move");
        mover(dir);
    });
})();