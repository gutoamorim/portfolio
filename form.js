const formulario = document.querySelector('form')
const modal = document.querySelector('#contact-modal')
const close = document.querySelector('.closed')
const botao = document.querySelector('form button')

function formularioEnviado(resposta) {
  const h2 = document.querySelector('.modal-title')
  const p = document.querySelector('.modal-text')
  if (resposta.ok) {
    h2.classList.add('cor-p4')
    modal.classList.add('show')
  } else {
    h2.classList.add('error')
    h2.innerHTML = 'Erro no envio'
    p.classList.add('color-0')
    p.innerHTML =
      'Você pode enviar diretamente para o nosso e-mail em: <a class="color-p5" href="mailto: contato@cesaraugusto.dev">contato@cesaraugusto.dev</a>'
    modal.classList.add('show')
  }
  resetForm()
}

function enviarFormulario(event) {
  event.preventDefault()
  botao.innerText = 'Enviando...'
  botao.disabled = true

  const data = new FormData(formulario)

  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado)
}

function closeModal() {
  modal.classList.remove('show')
}

function resetForm() {
  formulario.reset()
  botao.innerText = 'Enviar'

}

formulario.addEventListener('submit', enviarFormulario)
close.addEventListener('click', closeModal)

