    var titulo = document.querySelector("h1");
        console.log(titulo);
        console.log(titulo.textContent);
        titulo.textContent = "Outro Nome";

    var tdPaciente = document.querySelector("#primeiro-paciente");
    paciente = tdPaciente.textContent
    console.log(paciente)

    var tdPeso = paciente.querySelector(".info-peso");
    peso = tdPeso.textContent
    console.log(peso)

    var tdAltura = paciente.querySelector(".info-altura");
    altura = tdAltura.textContent
    console.log(altura)

    var tdGordura = paciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent
    console.log(gordura)

    var calculoImc = (peso / (altura*altura))
    console.log(calculoImc)



