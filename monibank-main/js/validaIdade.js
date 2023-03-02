export default function EhMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    console.log(ValidaIdade(dataNascimento));
    return ValidaIdade(dataNascimento);
}

function ValidaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= dataMais18;
}