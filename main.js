// 1° PASSO - CAPTURA O FORMULARIO NO HTML

const formulario = document.getElementById
    ("formulario");

formulario.addEventListener("submit", function
    (event) {

    event.preventDefault()

    // CAPTURAR OS VALORES DIGITADOS PELO ÚSUARIO

const nome = document.getElementById("nome").value
const email = document.getElementById("email").value
const telefone = document.getElementById("telefone").value
const cargos = document.getElementById("cargos").value
const mensagem = document.getElementById("mensagem").value

if(telefone.trim() === ""){
    alert("Digite seu número")
    return
}

const textoWhatsapp = `
Olá! Gostaria de me candidatar a essa vaga de emprego
Nome:${nome}
E-mail:${email}
Telefone:${telefone}
Cargo:${cargos}
Observações:${mensagem}`

// CODIFICAR A MENSAGEM PARA SER  UTILIZADA NA URL
const mensagemCodificada = encodeURIComponent(textoWhatsapp)

//NUMERO DO WHATSAPP
const numeroWhatsapp = "5511964547965"

//MONTA O LINK WHATSAPP

const link = "https://wa.me/" + numeroWhatsapp 
+ "?text=" + mensagemCodificada

window.location.href = link
})

