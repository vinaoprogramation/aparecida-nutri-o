    var titulo = document.querySelector("h1");
        console.log(titulo);
        console.log(titulo.textContent);
        titulo.textContent = "Outro Nome";

    var tdPaciente = document.querySelector("#primeiro-paciente");
    paciente = tdPaciente.textContent
    console.log(paciente)

    var tdPeso = tdPaciente.querySelector(".info-peso");
    peso = tdPeso.textContent
    console.log(peso)

    var tdAltura = tdPaciente.querySelector(".info-altura");
    altura = tdAltura.textContent
    console.log(altura)

    var tdGordura = tdPaciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent
    console.log(gordura)

    var calculoImc = (peso / (altura*altura))
    var imcArredondado = calculoImc.toFixed(1)
    imc = parseFloat(imcArredondado)
    imcTexto = tdPaciente.querySelector(".info-imc")
    imcTexto.textContent = imc

    





    var tdPaciente = document.querySelector("#segundo-paciente");
    paciente = tdPaciente.textContent
    console.log(paciente)

    var tdPeso = tdPaciente.querySelector(".info-peso");
    peso = tdPeso.textContent
    console.log(peso)

    var tdAltura = tdPaciente.querySelector(".info-altura");
    altura = tdAltura.textContent
    console.log(altura)

    var tdGordura = tdPaciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent
    console.log(gordura)

    var calculoImc = Math.round(peso / (altura*altura))
    console.log(calculoImc)

    var calculoImc = (peso / (altura*altura))
    var imcArredondado = calculoImc.toFixed(1)
    imc = parseFloat(imcArredondado)
    imcTexto = tdPaciente.querySelector(".info-imc")
    imcTexto.textContent = imc






    var tdPaciente = document.querySelector("#terceiro-paciente");
    paciente = tdPaciente.textContent
    console.log(paciente)

    var tdPeso = tdPaciente.querySelector(".info-peso");
    peso = tdPeso.textContent
    console.log(peso)

    var tdAltura = tdPaciente.querySelector(".info-altura");
    altura = tdAltura.textContent
    console.log(altura)

    var tdGordura = tdPaciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent
    console.log(gordura)

    var calculoImc = Math.round(peso / (altura*altura))
    console.log(calculoImc)

    var calculoImc = (peso / (altura*altura))
    var imcArredondado = calculoImc.toFixed(1)
    imc = parseFloat(imcArredondado)
    imcTexto = tdPaciente.querySelector(".info-imc")
    imcTexto.textContent = imc





    var tdPaciente = document.querySelector("#quarto-paciente");
    paciente = tdPaciente.textContent
    console.log(paciente)

    var tdPeso = tdPaciente.querySelector(".info-peso");
    peso = tdPeso.textContent
    console.log(peso)

    var tdAltura = tdPaciente.querySelector(".info-altura");
    altura = tdAltura.textContent
    console.log(altura)

    var tdGordura = tdPaciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent
    console.log(gordura)

    var calculoImc = Math.round(peso / (altura*altura))
    console.log(calculoImc)

    var calculoImc = (peso / (altura*altura))
    var imcArredondado = calculoImc.toFixed(1)
    imc = parseFloat(imcArredondado)
    imcTexto = tdPaciente.querySelector(".info-imc")
    imcTexto.textContent = imc






    var tdPaciente = document.querySelector("#quinto-paciente");
    paciente = tdPaciente.textContent
    console.log(paciente)

    var tdPeso = tdPaciente.querySelector(".info-peso");
    peso = tdPeso.textContent
    console.log(peso)

    var tdAltura = tdPaciente.querySelector(".info-altura");
    altura = tdAltura.textContent
    console.log(altura)

    var tdGordura = tdPaciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent
    console.log(gordura)

    var calculoImc = Math.round(peso / (altura*altura))
    console.log(calculoImc)

    var calculoImc = (peso / (altura*altura))
    var imcArredondado = calculoImc.toFixed(1)
    imc = parseFloat(imcArredondado)
    imcTexto = tdPaciente.querySelector(".info-imc")
    imcTexto.textContent = imc


    
    function calcularIMC(pacienteId) {
    // Seleciona o paciente com o id fornecido
    var tdPaciente = document.querySelector(`#${pacienteId}`);
    
    if (!tdPaciente) {
        console.log("Paciente não encontrado");
        return;
    }

    // Pega as informações do paciente
    var peso = parseFloat(tdPaciente.querySelector(".info-peso").textContent);
    var altura = parseFloat(tdPaciente.querySelector(".info-altura").textContent);

    // Verifica se os valores de peso e altura são válidos
    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        console.log("Valores de peso ou altura inválidos");
        return;
    }

    // Calcula o IMC
    var calculoImc = peso / (altura * altura);
    var imcArredondado = calculoImc.toFixed(1);
    var imc = parseFloat(imcArredondado);

    // Atualiza o IMC na interface (se houver um elemento para isso)
    var imcTexto = tdPaciente.querySelector(".info-imc");
    if (imcTexto) {
        imcTexto.textContent = imc;
    }

    // Retorna o IMC calculado
    return imc;
}

// Exemplo de uso
var imcCalculado = calcularIMC("sexto-paciente");
console.log(imcCalculado);
