    var titulo = document.querySelector("h1");
        console.log(titulo);
        console.log(titulo.textContent);
        titulo.textContent = "Outro Nome";

    var paciente = document.querySelector("#primeiro-paciente");
    console.log(paciente)

    var peso = paciente.querySelector(".info-peso");
    console.log(peso)

    var altura = paciente.querySelector(".info-altura");
    console.log(altura)

    var gordura = paciente.querySelector(".info-gordura");
    console.log(gordura)

    var calculoImc = (peso / (altura*altura))
    console.log(calculo-imc)



