document.addEventListener('DOMContentLoaded', function() {
  var botao = document.getElementById('botao-informacao');

  // Adicione um ouvinte de evento de clique ao botão
  botao.addEventListener('click', function() {
    // Código a ser executado quando o botão for clicado
    alert('Iremos retornar pelo email.');
  });
});