
document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let errores = [];
  // Obtengo los valores de los campos del formulario y los guardo en variables
  const apellido = document.getElementById('apellido').value.trim();
  const nombre = document.getElementById('nombre').value.trim();
  const dni = document.getElementById('dni').value.trim();
  const fecha = document.getElementById('fecha').value;
  const email = document.getElementById('email').value.trim();

  // En esta parte solo realizo la validacion de apellido Validación Apellido y Nombre (solo letras)
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
    errores.push("El apellido solo debe contener letras.");
  }
  // En esta parte realizo la Validación Nombre (solo letras)
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
    errores.push("El nombre solo debe contener letras.");
  }
  // En esta parte realizo de  Validación DNI (solo números, 8 dígitos)
  if (!/^\d{8}$/.test(dni)) {
    errores.push("El DNI debe contener solo números y tener 8 dígitos.");
  }

  // En esta parte realizo la Validación Fecha (mayor a 2006)
  if (!fecha || new Date(fecha).getFullYear() <= 2006) {
    errores.push("La fecha de nacimiento debe ser posterior al año 2006.");
  }
  // En esta parte realizo la Validación Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errores.push("El email no es válido.");
  }
// En esta parte realizo la Validación de que no haya campos vacíos
  document.getElementById('errores').innerText = errores.join('\n');
  if (errores.length === 0) {
    alert("¡Registro exitoso!");
    this.reset();
  }
});

// Realizo Preguntas
document.getElementById('preguntasBtn').addEventListener('click', function() {
  const respuestas = [];
  const nacionalidad = prompt("¿Cuál es tu nacionalidad?");
  if (nacionalidad === null) return;
  respuestas.push(nacionalidad);

  const color = prompt("¿Cuál es tu color favorito?");
  if (color === null) return;
  respuestas.push(color);

  const mascota = prompt("¿Cómo se llama tu mascota?");
  if (mascota === null) return;
  respuestas.push(mascota);

  document.getElementById('respuestas').value = respuestas.join(' - ');
});
