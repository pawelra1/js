var wzrostJanek = 183;
var wzrostAnia = 163;

function wiadomosc( str ) {
    console.log( str );
}

/*if( wzrostJanek > wzrostAnia ) {
    console.log( "Ania nie jest wyższa od Janka" );
} else {
    console.log( "Ania jest wyższa od Janka" );
}*/

/*if( wzrostJanek > wzrostAnia ) {
    wiadomosc( " Janek jest wyższy od Ani" ); 
} else if( wzrostJanek == wzrostAnia) {
    wiadomosc( "Janek jest tego samego wzrostu co Ania" );
} else {
    wiadomosc( "KJanek jest niższy od Ani");
}*/

var imie = "Ola"

switch (imie) {
    case "Marta":
        wiadomosc( "Czołem, jestem Marta" );
        break;
    case "Monika":
        wiadomosc( "Czołem, jestem Monika" );
        break;
    case "Ola":
        wiadomosc( "Czołem, jestem Ola" );
        break;
    default: 
        wiadomosc( "Nie ma kto się z tobą przywitać" );
}