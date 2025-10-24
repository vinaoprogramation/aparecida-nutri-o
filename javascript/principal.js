

var pacientes = document.querySelectorAll(".paciente")
console.log(pacientes)


for (var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes[i]

    
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
        paciente.classList.add("campo-invalido")


    }

    if (altura < 0 || altura > 3.00) {
        console.log("Altura inválida")
        alturaEhValida = false;
        imcTexto = paciente.querySelector(".info-imc")
        imcTexto.textContent = "Altura Inválida"
        paciente.classList.add("campo-invalido")
    }


    if (alturaEhValida == true && pesoEhValido == true) {
        var calculoImc = ((peso / (altura * altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        imcTexto = paciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }

}

    botao = document.getElementById("adicionar-paciente")
    function aoClicar(){
        alert("Você clicou")
    }
    botao.addEventListener("click" aoClicar)


    function adicionar(){
        let nome = document.createElement("td")
        nome.classList("info-nome")
        nome.textContent = document.getElementById("nome").value

        let peso = document.createElement("td")
        peso.classList("info-peso")
        nome.textContent = document.getElementById("peso").value

        let altura = document.createElement("td")
        altura.classList("info-altura")
        nome.textContent = document.getElementById("altura").value

        let gordura = document.createElement("td")
        gordura.classList("info-gordura")
        nome.textContent = document.getElementById("gordura").value
    }
