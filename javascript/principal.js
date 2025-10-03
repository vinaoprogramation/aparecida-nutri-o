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

    var calculoImc = Math.round(peso / (altura*altura))
    console.log(calculoImc)

    var tdImc = tdPaciente.querySelector(".info-imc")
    imc = tdImc.textContent
    console.log(imc)
    imc.textContent = calculoImc



