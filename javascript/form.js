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

        document.getElementById("nome").value = ""
        document.getElementById("peso").value = ""
        document.getElementById("altura").value = ""
        document.getElementById("gordura").value = ""
        
    }
    else{
        alert("Todos os campos são requeridos")
    }



    

}   

)

