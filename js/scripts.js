// Validación del formulario de contacto
$(document).ready(function() {
  $('#contactoForm').on('submit', function(e) {
    e.preventDefault();
    let nombre = $('#nombre').val().trim();
    let email = $('#email').val().trim();
    let mensaje = $('#mensaje').val().trim();
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
    if (!emailValido) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    alert('¡Mensaje enviado correctamente!');
    this.reset();
  });

  // Lógica del test de seguridad
  $('#testForm').on('submit', function(e) {
    e.preventDefault();
    let p1 = $('#pregunta1').val();
    let p2 = $('#pregunta2').val();
    let resultado = '';
    if (p1 === 'b' && p2 === 'b') {
      resultado = '<div class="alert alert-success">¡Excelente! Has respondido correctamente.</div>';
    } else {
      resultado = '<div class="alert alert-warning">Revisa tus respuestas y vuelve a intentarlo.</div>';
    }
    $('#resultadoTest').html(resultado);
  });
}); 