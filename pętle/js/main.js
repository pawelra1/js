/*for( var i = 1; i < 20; i++ ) {
    console.log( i );
}*/

var samochody = [ "Opel", "Audi", "Honda", "BMW", "Fiat 126p", "Żuk" ];

for( var i = 0; i < samochody.length; i++ ) {
    console.log( samochody[i] );
}

//forEach
samochody.forEach( function( elementTablicy, indexTablicy ){
    console.log( elementTablicy + " ==== " + indexTablicy )
} );


//while

var interator = 15;
while (  interator < 12 ) {
    console.log( "Interacja nr " + interator );
    interator++; //zawsze dodawaj ten kod
}

do {
    console.log( "DO WHILE interacja nr " + interator);
    interator++;
} while( interator < 12 );


//break kończy działanie pętli
/*
for( var i = 1; i < 40; i++ ) {
    if( i > 15 ) {
        break;
    }
    console.log("Iteracja nr " + i);
}
*/

//continue - opuszcza bieżącą interację ale prowadzi do następnej

for ( var i = 1; i < 26; i++) {
    if( i % 2 == 0 ) {
        continue;
    }
    console.log("Interacja nr " + i);
}