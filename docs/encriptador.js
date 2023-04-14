document.getElementById("encriptar").addEventListener("click", function() {
    var texto = document.getElementById("texto").value;
    var resultado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto.charAt(i);
        switch (letra) {
            case "e":
                resultado += "enter";
                break;
            case "i":
                resultado += "imes";
                break;
            case "a":
                resultado += "ai";
                break;
            case "o":
                resultado += "ober";
                break;
            case "u":
                resultado += "ufat";
                break;
            default:
                resultado += letra;
        }
    }
    document.getElementById("resultado").value = resultado;
});

document.getElementById("desencriptar").addEventListener("click", function() {
    var texto = document.getElementById("texto").value;
    var resultado = "";
    var i = 0;
    while (i < texto.length) {
        var letra = texto.charAt(i);
        if (letra == "e") {
            resultado += "e";
            i += 5;
        } else if (letra == "i") {
            resultado += "i";
            i += 4;
        } else if (letra == "a") {
            resultado += "a";
            i += 2;
        } else if (letra == "o") {
            resultado += "o";
            i += 4;
        } else if (letra == "u") {
            resultado += "u";
            i += 4;
        } else {
            resultado += letra;
            i++;
        }
    }
    document.getElementById("resultado").value = resultado;
});

document.getElementById("copiar").addEventListener("click", function() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
});