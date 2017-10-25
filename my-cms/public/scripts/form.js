/* Validering af kontakt formular. I stedet for alert er der ved forkert indtastning, sat hjælpetekst ind under placeholder.
Dette er gjort for at undgå popup vinduer, da det ikke anbefales mht accessability */

function formular(form) {
    "use strict";
    if (form.fornavn.value.length === 0) {
        document.getElementById("fornavnHelp").innerHTML = "Udfyld dit fornavn";
        form.fornavn.focus(); //sætter markøren i det valgte felt
        return false;
    } else {
        document.getElementById("fornavnHelp").innerHTML = "";
    }

    if (form.efternavn.value.length === 0) {
        document.getElementById("efternavnHelp").innerHTML = "Udfyld dit efternavn";
        form.efternavn.focus(); 
        return false;
    } else {
        document.getElementById("efternavnHelp").innerHTML = "";
    }

    if (form.telefon.value.length === 0) {
        document.getElementById("telefonHelp").innerHTML = "Udfyld dit telefon nummer";
        form.telefon.focus(); 
        return false;
    }
    else if (isNaN(form.telefon.value)) {
        document.getElementById("telefonHelp").innerHTML = "Dette er ikke et nummer - prøv igen";
        form.telefon.focus();
        return false;
    }
    else if (form.telefon.value.length !== 8) {
        document.getElementById("telefonHelp").innerHTML = "Husk otte cifre";
        form.telefon.focus();
        return false;
    } else {
        document.getElementById("telefonHelp").innerHTML = "";
    }

    if (form.mail.value.length === 0) {
        document.getElementById("emailHelp").innerHTML = "Udfyld din email adresse";
        form.mail.focus(); 
        return false;
    } else {
        document.getElementById("emailHelp").innerHTML = "";
    }

    if (form.besked.value.length === 0) {
        document.getElementById("kommentarHelp").innerHTML = "Udfyld besked feltet";
        form.besked.focus(); 
        return false;
    } else {
        document.getElementById("kommentarHelp").innerHTML = "";
    }

    function checkEmail(mail) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(mail)) {
            document.getElementById("emailHelp").innerHTML = "Dette er ikke en email adresse - prøv igen";
            form.mail.focus(); 
            return true;
        } else {
            document.getElementById("emailHelp").innerHTML = "";
        }
        return false;
    }
}