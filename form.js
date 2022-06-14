const formulario = document.querySelector('form')

const modal = document.querySelector('#contact-modal')

function formularioEnviado(resposta) {
  const h2 = document.querySelector('.modal-title')
  const p = document.querySelector('.modal-text')
  if (resposta.ok) {
    h2.classList.add('success')
    modal.classList.add('show')
  } else {
    h2.classList.add('error')
    h2.innerHTML = 'Erro no envio'
    p.innerHTML =
      'Você pode enviar diretamente para o nosso e-mail em: <a href="mailto: contato@cesaraugusto.dev">contato@cesaraugusto.dev</a>'
    modal.classList.add('show')
  }
}

function enviarFormulario(event) {
  event.preventDefault()
  const botao = document.querySelector('form button')
  botao.disabled = true
  botao.innerText = 'Enviando...'

  const data = new FormData(formulario)

  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado)
}

formulario.addEventListener('submit', enviarFormulario)
