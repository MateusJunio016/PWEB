function modificaInput() {

    var radio = document.forms.formulario1.elements.converte.value;
    var texto = document.forms.formulario1.elements.idTexto.value;

    if (texto == "") {
        alert("É necessário preencher o campo!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };
    if (radio == 1) {
        document.querySelector("#idTexto").value = document.querySelector("#idTexto").value.toLowerCase() ;
        return false;
    } else if (radio == 2) {
        document.forms.formulario1.elements.idTexto.value = document.forms.formulario1.elements.idTexto.value.toUpperCase();
        return false;
    } else {
        alert("selecione um dos radios buttons");
    }
    return true;
}
