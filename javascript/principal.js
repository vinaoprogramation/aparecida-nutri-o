

var pacientes = document.querySelectorAll(".paciente")
console.log(pacientes)


for (let i = 0; i < pacientes.lenght ; i++) {

    var paciente = paciente[i]
    
    var tdPeso = paciente.querySelector(".info-peso");
    peso = tdPeso.textContent
    console.log(peso)

    var tdAltura = paciente.querySelector(".info-altura");
    altura = tdAltura.textContent
    console.log(altura)

    var tdGordura = paciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent
    console.log(gordura)

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso < 0 || peso > 1000) {
        console.log("Peso inválido")
        pesoEhValido = false;
        imcTexto = paciente.querySelector(".info-imc")
        imcTexto.textContent = "Peso Inválido"
    }

    if (altura < 0 || altura > 3.00) {
        console.log("Altura inválida")
        alturaEhValida = false;
        imcTexto = paciente.querySelector(".info-imc")
        imcTexto.textContent = "Altura Inválida"
    }


    if (alturaEhValida == true && pesoEhValido == true) {
        var calculoImc = ((peso / (altura * altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = paciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }

}


