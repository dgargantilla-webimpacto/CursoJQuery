(function(){

    var $cajaRoja = $(".cajaRoja");

    function mover(dir){
        $cajaRoja.clearQueue();
        switch(dir){
            case "arriba":
                $cajaRoja.animate({
                    top : "-=50px"
                },200);
            break;

            case "abajo":
                $cajaRoja.animate({
                    top : "+=50px"
                },200);
            break;
            case "derecha":
                $cajaRoja.animate({
                    left : "+=50px"
                },200);
            break;
            case "izquierda":
                $cajaRoja.animate({
                    left : "-=50px"
                },200);
            break;

            default: 
            $cajaRoja.animate({
                top :"0px",
                left : "0px"
            });
        }
    }

    $(document).on("keydown",function(e){

        var keyCode = e.keyCode;
        console.log(keyCode);

        switch(keyCode){
            case 38:
                mover("arriba");
            break;

            case 40: 
                mover("abajo");
            break;

            case 39:
                mover("derecha");
            break;

            case 37:
                mover("izquierda");
            break;
        }

    });

    $("button").on("click", function(){

        var dir = $(this).data("direc");
        mover(dir)
    });
})();