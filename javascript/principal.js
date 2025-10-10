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
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Peso Inválido"
    }

    if (altura < 0 || altura > 3.00){
        console.log("Altura inválida")
        alturaEhValida = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Altura Inválida"
    }


    if(alturaEhValida == true && pesoEhValido == true){
        var calculoImc = ((peso / (altura*altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }
    


    var pesoEhValido = true;
    var alturaEhValida = true;

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
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Peso Inválido"
    }

    if (altura < 0 || altura > 3.00){
        console.log("Altura inválida")
        alturaEhValida = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Altura Inválida"
    }


    if(alturaEhValida == true && pesoEhValido == true){
        var calculoImc = ((peso / (altura*altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }
    

    

    var pesoEhValido = true;
    var alturaEhValida = true;

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

    
    if (peso < 0 || peso>1000){
        console.log("Peso inválido")
        pesoEhValido = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Peso Inválido"
    }

    if (altura < 0 || altura > 3.00){
        console.log("Altura inválida")
        alturaEhValida = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Altura Inválida"
    }


    if(alturaEhValida == true && pesoEhValido == true){
        var calculoImc = ((peso / (altura*altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }
    

    


    var pesoEhValido = true;
    var alturaEhValida = true;

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

    
    if (peso < 0 || peso>1000){
        console.log("Peso inválido")
        pesoEhValido = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Peso Inválido"
    }

    if (altura < 0 || altura > 3.00){
        console.log("Altura inválida")
        alturaEhValida = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Altura Inválida"
    }


    if(alturaEhValida == true && pesoEhValido == true){
        var calculoImc = ((peso / (altura*altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }
    

    




    var pesoEhValido = true;
    var alturaEhValida = true;

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

    
    if (peso < 0 || peso>1000){
        console.log("Peso inválido")
        pesoEhValido = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Peso Inválido"
    }

    if (altura < 0 || altura > 3.00){
        console.log("Altura inválida")
        alturaEhValida = false;
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = "Altura Inválida"
    }


    if(alturaEhValida == true && pesoEhValido == true){
        var calculoImc = ((peso / (altura*altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = tdPaciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }
    

    
    var peso_user = document.querySelector("#user_peso")
    var altura = document.querySelector("#user_altura")
    var imc_user = ((peso_user / (altura_user*altura_user)))
    user_data = document.querySelector("#user_imc")
    user_data.textContent = imc_user
