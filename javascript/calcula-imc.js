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



var nomes = document.querySelectorAll(".info-nome");

function buscar(){
    for (var i = 0; i < nomes.length; i++) {
    nome = nomes[i]
    classe = nome.textContent
    var classeValor = classe.value
    nome.classList.add(classe)
    console.log(nome)
}

    var buscarClasse = document.getElementById("conteudo-busca").value
    if (buscarClasse.textContent = "João"){
        document.querySelector(".João").classList.add("maior")
    }
    
}


