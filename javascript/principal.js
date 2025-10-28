

var pacientes = document.querySelectorAll(".paciente")
console.log(pacientes)

function calculoImc(peso, altura){
    var calculoImc = ((peso / (altura * altura)))
        var imcArredondado = calculoImc.toFixed(1)
        imc = parseFloat(imcArredondado)
        return imc
}


for (var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes[i]

    
    var tdPeso = paciente.querySelector(".info-peso");
    peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura");
    altura = tdAltura.textContent

    var tdGordura = paciente.querySelector(".info-gordura");
    gordura = tdGordura.textContent

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
        calculoImc(peso, altura)
        imcTexto = paciente.querySelector(".info-imc")
        imcTexto.textContent = imc
    }

}

    


    function adicionar(){
        let linha = document.createElement("tr")
        linha.classList.add("paciente")

        let nome = document.createElement("td")
        nome.classList.add("info-nome")
        nome.textContent = document.getElementById("nome").value
        linha.appendChild(nome)

        let peso = document.createElement("td")
        peso.classList.add("info-peso")
        nome.textContent = document.getElementById("peso").value
        linha.appendChild(peso)

        let altura = document.createElement("td")
        altura.classList.add("info-altura")
        nome.textContent = document.getElementById("altura").value
        linha.appendChild(altura)

        let gordura = document.createElement("td")
        gordura.classList.add("info-gordura")
        nome.textContent = document.getElementById("gordura").value
        linha.appendChild(gordura)

        console.log(linha)
    }

    botao = document.getElementById("adicionar-paciente")
    
    function alerta(){
        console.log("Tá funcionando")
    }
