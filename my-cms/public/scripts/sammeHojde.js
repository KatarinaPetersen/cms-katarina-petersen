var equalColumns = function () {
    // Finder alle elementer der har classen "sammeHojde" og lægger dem ned i et array
    var columns = document.getElementsByClassName("sammeHojde");

    // Angiver hvor mange elementer der har classen sammeHojde
    var length = columns.length;
    var height = 0;

    // Sætter alle højder til auto, for at tilpasse kolonnen til indholdet
    for (var i = 0; i < length; i++) {
        columns[i].style.height = "auto";
    }


    // Denne løkke finder ud af hvilken kolonne der er højest
    // Højden bliver gemt i variablen height (den største værdi bliver gemt)
    for (var i = 0; i < length; i++) {
        if (columns[i].clientHeight > height) {
            height = columns[i].clientHeight;
        }
    }


    // Sætter højden på alle kolonner og angiver i px
    for (var i = 0; i < length; i++) {
        columns[i].style.height = height + "px";
    }
}
// Følgende linje kører kun en gang når man kommer ind på siden, sørger for at
// for at funktionen bliver udført selvom man ikke går ind og resizer
equalColumns();
window.addEventListener("resize", equalColumns, true);