function modificaInput() {

    var radio = document.forms.formulario1.elements.converte.value;
    var texto = document.forms.formulario1.elements.idTexto.value;

    if (texto == "") {
        alert("É necessário preencher o campo!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (radio == 1) {
        texto = texto.toLowerCase();
    } else if (radio == 2) {
        texto = texto.toUpperCase();
    } else {
        alert("selecione um dos radios buttons");
        return false;
    }

    alert(texto);
    return true;
}