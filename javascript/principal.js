    var pesoEhValido = true;
    var alturaEhValida = true;
    



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

    if (peso < 0 || peso>1000){
        console.log("Peso inválido")
        pesoEhValido = false;
    }

    if (altura < 0 || altura > 3.00){
        console.log("Altura inválida")
        alturaEhValida = false;
    }


    if(alturaEhValida == true && pesoEhValido == true){
        var calculoImc = ((peso / (altura*altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }
    




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


    if (peso < 0 || peso>1000){
        console.log("Peso inválido")
        pesoEhValido = false;
    }

    if (altura < 0 || altura > 3.00){
        console.log("Altura inválida")
        alturaEhValida = false;
    }


    if(alturaEhValida == true && pesoEhValido == true){
        var calculoImc = ((peso / (altura*altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }
    


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

    var calculoImc = ((peso / (altura*altura)))
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

    var calculoImc = ((peso / (altura*altura)))
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

    var calculoImc = ((peso / (altura*altura)))
    var imcArredondado = calculoImc.toFixed(1)
    imc = parseFloat(imcArredondado)
    imcTexto = tdPaciente.querySelector(".info-imc")
    imcTexto.textContent = imc


   