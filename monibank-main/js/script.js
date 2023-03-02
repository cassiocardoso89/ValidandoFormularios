import EhUmCPF from "./validaCPF.js";
import EhMaiorDeIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => VerificaCampo(campo));
})

function VerificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        EhUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        EhMaiorDeIdade(campo);
    }
}

