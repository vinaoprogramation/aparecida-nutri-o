var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso > 0 && peso < 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}



for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!validaPeso(peso)) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("campo-invalido");
    }

    if (!validaAltura(altura)) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("campo-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}








let botaoAdicionar = document.getElementById("adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){

    var form = document.getElementById("form-adiciona")
    var tabela = document.getElementById("tabela-pacientes")

    var nome = document.getElementById("nome").value
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var gordura = document.getElementById("gordura").value

    var pacienteTr = document.createElement("tr")
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    if (nomeTd.textContent != "" && pesoTd.textContent != "" && alturaTd.textContent != "" && gorduraTd.textContent != ""){


        if (!validaPeso(peso) || !validaAltura(altura)) {
            alert("Peso ou Altura inválidos")
        }
        else{
            var imc = calculaImc(peso, altura)
        imcTd.textContent = imc

        pacienteTr.appendChild(nomeTd)
        pacienteTr.appendChild(pesoTd)
        pacienteTr.appendChild(alturaTd)
        pacienteTr.appendChild(gorduraTd)
        pacienteTr.appendChild(imcTd)

        tabela.appendChild(pacienteTr)
        }
        
    }
    else{
        alert("Todos os campos são requeridos")
    }



    

}   

)

