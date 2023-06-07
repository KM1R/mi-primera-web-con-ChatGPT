var form = document.getElementById("join-form");

    // Agregar evento al formulario cuando se haga submit
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      // Validar los campos del formulario
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;

      if (name.trim() === "" || email.trim() === "") {
        alert("Por favor, completa todos los campos del formulario.");
      } else {
        // Aquí puedes realizar acciones adicionales, como enviar los datos del formulario a un servidor
        alert("¡Registro exitoso! Bienvenido a la Comunidad de Lectura.");
        form.reset(); // Limpiar el formulario después del envío
      }
    });