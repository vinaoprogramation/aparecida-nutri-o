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


    function calculoDoImc("#sexto-paciente") {
        var tdPacienteGlobal = document.querySelector(calculoDoImc);
        paciente = tdPaciente.textContent

        var tdPesoGlobal = tdPaciente.querySelector(".info-peso");
        peso = tdPeso.textContent

        var tdAlturaGlobal = tdPaciente.querySelector(".info-altura");
        altura = tdAltura.textContent

        var tdGorduraGlobal = tdPaciente.querySelector(".info-gordura");
        gordura = tdGordura.textContent

        var calculoImcGlobal = Math.round(peso / (altura*altura))

        var calculoImcGlobal = (peso / (altura*altura))
        var imcArredondadoGlobal = calculoImc.toFixed(1)
        imcGlobal = parseFloat(imcArredondado)
        imcTextoGlobal = tdPaciente.querySelector(".info-imc")
        imcTextoGlobal.textContent = imcGlobal
    }

    calculoDoImc()

