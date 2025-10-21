

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

function inserir(){
    let linhaPaciente = document.createElement("tr");
    linhaPaciente.className = "paciente";

    let nome = document.createElement("td")
    nome.className = "info-nome"
    let nomeContent = document.querySelector("#inserir-texto")
    console.log(nomeContent)
    linhaPaciente.appendChild(nome)

    let peso = document.createElement("td")
    peso.className = "info-peso"
    linhaPaciente.appendChild(peso)

    let altura = document.createElement("td")
    altura.className = "info-altura"
    linhaPaciente.appendChild(altura)

    let gordura = document.createElement("td")
    gordura.className = "info-gordura"
    linhaPaciente.appendChild(gordura)

    let imc = document.createElement("td")
    imcclassName = "info-imc"
    linhaPaciente.appendChild(imc)


    let tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(linhaPaciente)
    console.log(linhaPaciente)
}
