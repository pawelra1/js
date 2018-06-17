/* 

typ liczbowy

*/

var wyplata = 5000;
var premia = 1200;
var wynagrodzenie = wyplata + premia;

console.log(wynagrodzenie);
console.log( typeof wynagrodzenie );


/* 

typ string (łańcuch znaków)

*/

var wyplataStr = "5000";
var premiaStr = "1200";
var wynagrodzenieStr = wyplataStr + premiaStr;

console.log(wynagrodzenieStr);
console.log( typeof wynagrodzenie );


/* 

parseInt = zamień string na liczbę

*/

var wyplataStr = 5000;
var premiaStr = 1200;
var wynagrodzenieStr = parseInt (wyplataStr) + parseInt (premiaStr);

console.log(wynagrodzenieStr);
console.log( typeof wynagrodzenie );

/* 

typ logiczny
true | false
== porównuje

*/

var czyDzialaKlima = false;
if( czyDzialaKlima == true) {
    console.log("Działa, ale co z tego?");
} else {
    console.log("Nie działa klima");
}

/* 

typy specjalne
null | undefined

*/

var data;
/*console.log(data);*/

var pustaZmienna = null;
console.log(pustaZmienna);

/* 

\n nowa linia
\" cudzysłów
' ' krótki cudzysłów

*/

var str = "Zakupy robię \nw 'Biedrze' i jest fajnie";
console.log(str);