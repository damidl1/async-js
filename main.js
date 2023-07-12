// function superFunzione() {
//     console.log('sto eseguendo il codice dentro il timeout');
// }
// setTimeout(superFunzione, 5000);     // esegui super funzione dopo 20 secondi

// tutte le funzioni asincrone sono associate alle funzioni di callback (quando è il momento di partire associo qualcosa che deve fare in quel momento)
// codice sincrono sequenziale

// const pippo = 1;

// const pluto = 2;

// setTimeout(() => {
//     console.log('sto eseguendo il codice dentro il timeout');
// }, 20000);

// const paperino = pippo + pluto;

// const topolino = 'javascript';

// console.log(topolino + paperino);

// setInterval(() => {
//     console.log('sto eseguendo il codice dentro l\'intervallo');  // setInterval esegue la stessa funzione di callback ogni 2 secondi
// }, 2000);


// CHIAMATE WEB IN JAVASCRIPT (FETCH) -------------------------------------

// function gestisciRisposta(resp){     // risposta = serie di informazioni, cosa ho chiamato, etc
//     return resp.text();  // di tutta la risposta mi interessa solo il file di testo della pagina web (html della pagina web)
//    return resp.json();   // converte automaticamente il risultato in un oggetto
// }

// function gestisciRisultatoFinale(res) {
//      const dittoObj = JSON.parse(res);
//     console.log(res);  // funzione che dice cosa fare del risultato
// }


// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(gestisciRisposta)  // qui stiamo facendo una chiamata web a google, attendi google.it poi (then) fai questo
//                                                 .then(gestisciRisultatoFinale);   // la funzione che passiamo a then è una response  
                                                                                     

// stessa funzione con le lambda

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((resp) => resp.text()) 
// .then((res) => console.log(res))
// .catch((error) => console.log(error.message));


function gestisciEmergenza(error) {
    console.log(error.message);
}


fetch('https://pokeapi.co/api/v2/pokemon/ditto')  // promise che promette di avere un risultato
.then((resp) => resp.json())
.then((res) => console.log(res))
.catch(gestisciEmergenza);  // catch callback per le emergenze nel caso non funzioni qualcosa nella mia chiamata