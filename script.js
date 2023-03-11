let fotos = {
Isaías: "isaias.png",
Leozão: "leo.png",
Maykon: "may.png",
Gabriel: "gabirel.png",
Manu: "manu[.png"
}

function resultado() {
    let pessoa = document.getElementById("nome").value

    if(pessoa.includes("desconhecido")){
        document.getElementById("expulsao").style.display = "block"
        document.getElementById("boasvindas").style = ""
    }

    else{
        document.getElementById("expulsao").style = ""

        for(option of document.getElementsByTagName("option")){
            option.value += "-" + option.innerHTML
            console.log(option)
        }

        pessoa = document.getElementById("nome").value


        boasvindas = document.querySelector("#boasvindas h2")

        console.log(boasvindas)

        boasvindas.innerHTML = "Bem vind"

        boasvindas.innerHTML += pessoa[0]

        boasvindas.innerHTML += ", " + pessoa.split("-")[1]

        document.getElementById("boasvindas").style.display = "block"

        if (pessoa.split("-")[1] != 'Dani'){
            document.getElementsByTagName("img")[0].src = "imgs/" + fotos[pessoa.split("-")[1]]
        }

        else{
            document.getElementsByTagName("img")[0].src = "https://cdn-icons-png.flaticon.com/512/71/71768.png"
        }
    }
}