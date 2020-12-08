     /*Appel je jQuery*/
$(document).ready(function(){

     /*Bouttons  -> a améliorer*/

    $("#button2").click(function(){
        $("#sect2").toggle(500)
        $("#sect3").hide(500)
        $("#sect4").hide(500)
        $("#sect5").hide(500)
        $("#sect6").hide(500)
    });

    $("#button3").click(function(){
        $("#sect3").toggle(500)
        $("#sect2").hide(500)
        $("#sect4").hide(500)
        $("#sect5").hide(500)
        $("#sect6").hide(500)
    });

    $("#button4").click(function(){
        $("#sect4").toggle(500)
        $("#sect2").hide(500)
        $("#sect3").hide(500)
        $("#sect5").hide(500)
        $("#sect6").hide(500)       
    });

    $("#button5").click(function(){
        $("#sect5").toggle(500)
        $("#sect2").hide(500)
        $("#sect3").hide(500)
        $("#sect4").hide(500)
        $("#sect6").hide(500)      
    });

    $("#button6").click(function(){
        $("#sect6").toggle(500)
        $("#sect2").hide(500)
        $("#sect3").hide(500)
        $("#sect4").hide(500)
        $("#sect5").hide(500)
    });

});

/* Fonctions qui vérifient les formulaires*/
    function ValiderMail(){
        var mail = document.getElementById("email").value;
        var emailReg = new RegExp ("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        var valid = emailReg.test(mail);
        
        if(valid == false) {
            alert("Veuillez saisir un mail valide")
        }
        else { 
            alert("c bon")
        }
    };

    function ValiderSujet(){
        var suj = document.getElementById("sujet").value;
        var sujReg = "^[a-zA-Z0-9]+$";
        var valid = String(sujReg).match(suj);
        
        if(valid) {
            alert("Veuillez saisir un sujet")
        }

    };

    function ValiderMsg(){
        var msg = document.getElementById("msg").value;
        var msgReg = "^[a-zA-Z0-9]+$";
        var valid = String(msgReg).match(msg);
        
        if(valid) {
            alert("Veuillez saisir un message")
        }

    };
