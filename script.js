var date = new Date()
var hora = date.getHours()
//var hora = testa hora do dia
var texto = window.document.getElementById("texto")
var imagem = window.document.getElementById("imagem")


if (hora >= 6 && hora < 12) {
  texto.innerHTML = `<h2>Agora são ${hora} horas da manhã.</h2>`
  imagem.innerHTML = `<img src="imagens/morning.jpg" alt="">`
} else if (hora >= 12 && hora < 18) {
  texto.innerHTML = `<h2>Agora são ${hora} horas da tarde.</h2>`
  imagem.innerHTML = `<img src="imagens/afternoon.jpg" alt="">`
} else if (hora >= 18 && hora < 0) {
  texto.innerHTML = `<h2>Agora são ${hora} horas da noite.</h2>`
  imagem.innerHTML = `<img src="imagens/night.jpg" alt="">`
} else {
  texto.innerHTML = `<h2>Agora são ${hora} horas da madrugada.</h2>`
  imagem.innerHTML = `<img src="imagens/night.jpg" alt="">`
}