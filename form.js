const formulario = document.querySelector('form')

function deuRuim() {
  formulario.innerHTML = 'Deu ruim'
}

function formularioEnviado(resposta) {
  if(resposta.ok) {
    formulario.innerHTML = '<p class="font-2-l" style="grid-column: 1 / -1; padding: 1rem; border-radius: 4px; background: #f7f7f7"> <span style="color: #317a00">foi....?!</span> Em breve entraremos em contato. Geralmente respondemos em até 24h</p>'
  }else {
    formulario.innerHTML = '<p class="font-2-l" style="grid-column: 1 / -1; padding: 1rem; border-radius: 4px; background: #f7f7f7"><span style="color:#E00000">Erro no envio,</span> você pode enviar diretamente para o nosso e-mail em: bikcraft@cesaraugusto.dev</p>'
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
  }).then(formularioEnviado).catch(deuRuim)
}

formulario.addEventListener('submit', enviarFormulario)