function funcMaior(num1, num2, num3) {
    var maior = 0;

    if (num1 > num2 && num1 > num3) {
        maior = num1;
    }
    else if (num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }
    return maior;
}

function maior() {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var c = document.getElementById("num3");
    var v1 = Number(a.value);
    var v2 = Number(b.value);
    var v3 = Number(c.value);
    var resp = funcMaior(v1, v2, v3);

    res.innerHTML = `Maior número: ${resp}`;

}

function fcresc(num1, num2, num3) {
    var maior = 0;
    var menor = 0;
    var meio = 0;

    if (num1 > num2 && num1 > num3) {
        maior = num1;
    }
    else if (num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    }
    else if (num2 < num3) {
        menor = num2;
    } else {
        menor = num3;
    }
    if (num1 > menor && num1 < maior) {
        meio = num1;
    }
    else if (num2 > menor && num2 < maior) {
        meio = num2;
    } else {
        meio = num3;
    }
    var r = [menor, meio, maior];

    return r;

}

console.log(fcresc(1, 4, 2));

function cresc() {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var c = document.getElementById("num3");
    var v1 = Number(a.value);
    var v2 = Number(b.value);
    var v3 = Number(c.value);
    var resp = fcresc(v1, v2, v3);

    res.innerHTML = `Os numeros em ordem crescente ficam: ${resp}`;

}