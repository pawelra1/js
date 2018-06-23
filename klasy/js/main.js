class Ogloszenie {
    constructor( tytul, opis, miasto, telefon, stan ) {
        this.tytul = tytul;
        this.opis = opis;
        this.miasto = miasto;
        this.telefon = telefon;
        this.stan = stan;
    }
    pobierz() {
        var ogl = this.tytul + "\n" + this.opis + "\n" + this.miasto + "\n" + this.telefon + "\n" + this.stan;
        return ogl;
    }
}

var kolekcja = [];

var ogloszenieItem = new Ogloszenie("Sprzetam Kota", "Kilka dzwonów", "Szczecin", "510 100 100", "Używany");
var ogloszenieTresc = ogloszenieItem.pobierz();
kolekcja.push( ogloszenieTresc );

ogloszenieItem = new Ogloszenie("Wynajmę rower", "Wynajem długoterminowy Rometa", "Płock", "600 600 600", "Używany");
ogloszenieTresc = ogloszenieItem.pobierz();
kolekcja.push(ogloszenieTresc);

console.log(kolekcja);