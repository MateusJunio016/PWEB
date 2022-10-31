//Criando objeto de diferentes formas

//Primeira forma:
var Aluno1 = new Object();
Aluno1.Nome = "Mateus Miranda";
Aluno1.RA = "0030482111033";

//Segunda forma
var Aluno2 = {};
Aluno1.Nome = "Mateus Miranda";
Aluno1.RA = "0030482111033";

//Terceira forma
var Aluno3 =
{
    Nome : "Mateus Miranda",
    RA : "0030482111033"
};

console.log(Aluno1);
console.log(Aluno2);
console.log(Aluno3);
