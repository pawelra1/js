//deklaracja funkcji

function showConsole() {
    console.log("Jestem funkcją!!")
}

// wywyołanie funkcji
showConsole();


var imie = "Rafal";
var nazwisko = "Pawelec";

/*function wyswietl() {
    console.log(imie + " " + nazwisko);
}

wyswietl();*/



function wyswietl( _imie_, _nazwisko_ ) {
    console.log(_imie_ + " " + _nazwisko_);
}

wyswietl( imie, nazwisko );