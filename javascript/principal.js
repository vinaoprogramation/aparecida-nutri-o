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


    function calculoDoImc(document.querySelector()) {
        var tdPaciente = document.querySelector(calculoDoImc);
        paciente = tdPaciente.textContent

        var tdPeso = tdPaciente.querySelector(".info-peso");
        peso = tdPeso.textContent

        var tdAltura = tdPaciente.querySelector(".info-altura");
        altura = tdAltura.textContent

        var tdGordura = tdPaciente.querySelector(".info-gordura");
        gordura = tdGordura.textContent

        var calculoImc = Math.round(peso / (altura*altura))

        var calculoImc = (peso / (altura*altura))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }

    calculoDoImc("#sexto-paciente")

