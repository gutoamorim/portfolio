const formulario = document.querySelector('form')

const modal = document.querySelector('#contact-modal')

function formularioEnviado(resposta) {
  if(resposta.ok) {
    modal.classList.add('show')
  }else {
    const h2 = document.querySelector('.modal-title')
    const p = document.querySelector('.modal-text')
    h2.innerText = 'Erro no envio'
    p.innerText = 'você pode enviar diretamente para o nosso e-mail em: bikcraft@cesaraugusto.dev'
    // formulario.innerHTML = '<p class="font-2-l" style="grid-column: 1 / -1; padding: 1rem; border-radius: 4px; background: #f7f7f7"><span style="color:#E00000">Erro no envio,</span> você pode enviar diretamente para o nosso e-mail em: bikcraft@cesaraugusto.dev</p>'
  }
}

function enviarFormulario(event) {
  event.preventDefault()
  const botao = document.querySelector('form button')
  botao.disabled = true
  botao.innerText = "Enviando..."

  const data = new FormData(formulario)
  
  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado)
}

formulario.addEventListener('submit', enviarFormulario)

