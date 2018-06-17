/* zasieg globalny - zmienne tworzone w tym zasiegu widoczne sa w calym programie */

/*var zmiennaGlobalna = "Czołem! Jestem zmienną lokalną";

console.log(zmiennaGlobalna);

function pokazZmienne() {
    console.log(zmiennaGlobalna);
    
    var zmiennaLokalna = "A ja jestem zmienną lokalną i nie widać mnie w zasięgu globalnym!";
    
}

pokazZmienne();

console.log( zmiennaLokalna );*/


// Var nadpisze wartość globalną

var config = "localhost";

function update() {
    var config = "newlocalhost";
    console.log("Zasięg lokalny zmianna config = " + config);
}

update();
console.log("Zasięg globalny zmienna config = " + config);