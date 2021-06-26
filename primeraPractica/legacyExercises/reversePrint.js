let frase = "ingrese una frase";

function reverseFrase(someFrase) {
    for(let i = 1; i<someFrase.length+1; i++){
        console.log(someFrase[someFrase.length - i]);
    }
}

reverseFrase(frase);
reverseFrase("hello world");