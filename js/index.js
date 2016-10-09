$(document).ready(function(){
    $("#montre").hide();
    $("#show").click(function(){
        $("#montre").show();
        $("#hidden").val("ok");
        bool = verifTotal();
        if(bool){
            swal("Super!", "vous avez gagné!", "success");
        }
    });
    $("#montre1").hide();
    $("#show1").click(function(){
        $("#montre1").show();
        $("#hidden1").val("ok");
        bool = verifTotal();
        if(bool){
            swal("Super!", "vous avez gagné!", "success");
        }
    });
    $("#montre2").hide();
    $("#show2").click(function(){
        $("#montre2").show();
        $("#hidden2").val("ok");
        bool = verifTotal();
        if(bool){
            swal("Super!", "vous avez gagné!", "success");
        }
    });
    $("#montre3").hide();
    $("#show3").click(function(){
        $("#montre3").show();
        $("#hidden3").val("ok");
        bool = verifTotal();
        if(bool){
            swal("Super!", "vous avez gagné!", "success");
        }
    });
});

function verifTotal(){
    var boolean = false;
    var hidden = $("#hidden").val();
    var hidden1 = $("#hidden1").val();
    var hidden2 = $("#hidden2").val();
    var hidden3 = $("#hidden3").val();

    if(hidden == "ok" && hidden1 == "ok" && hidden2 == "ok" && hidden3 =="ok"){
        boolean = true;
    }

    return boolean;
}



