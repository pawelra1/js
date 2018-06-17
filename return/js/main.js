function suma( l1, l2 ) {
    var wynik = l1 + l2;
    return wynik;
    
    console.log( "Kod poniżej słówka return nigdy się nie wykona" );
}


/* Aby przypisać do zmiennej wynika działania funkcji należy użyć słówka return wewnątrz funkcji */

var wynikDzialania = suma(1,15);
alert( wynikDzialania );
console.log( wynikDzialania );