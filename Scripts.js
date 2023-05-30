function redireccionar(pagina) {
    window.location.href = pagina;
}
function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    }

    function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    }

    window.onclick = function (event) {
    var modal = document.getElementById("modal");
     if (event.target == modal) {
         modal.style.display = "none";
        }
}
function obtenerInformacionUsuario() {
    var nombre = sessionStorage.getItem('nombre');
    var edad = sessionStorage.getItem('edad');
    var curso = sessionStorage.getItem('curso');
    var contrasena = sessionStorage.getItem('contrasena');
  
    return {
      nombre: nombre ? nombre : 'Sin identificar',
      edad: edad ? edad : '',
      curso: curso ? curso : '',
      contrasena: contrasena ? contrasena : ''
    };
  }

  function mostrarInformacionUsuario() {
    var informacionUsuario = obtenerInformacionUsuario();
    document.getElementById('nombre').value = informacionUsuario.nombre;
    document.getElementById('edad').value = informacionUsuario.edad;
    document.getElementById('curso').value = informacionUsuario.curso;
    document.getElementById('contrasena').value = informacionUsuario.contrasena;
  }
  
  function guardarInformacion() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var curso = document.getElementById('curso').value;
    var contrasena = document.getElementById('contrasena').value;
  
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('edad', edad);
    sessionStorage.setItem('curso', curso);
    sessionStorage.setItem('contrasena', contrasena);
  }
  
  mostrarInformacionUsuario();

  window.onload = function () {
        mostrarInformacionUsuario();
      };

      function aplicarCambios() {
        // mostramos en consola los valores recogidos en la pagina
        var color = document.getElementsByName('colorElegido')[0];
        var colorElegido = color.value;
        var tam = document.getElementsByName('tamFuente')[0];
        var tamelegido = tam[tam.selectedIndex].value;

        // aplicamos el color y el tamaño a todo el documento
        document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
        document.documentElement.style.setProperty("--colorNormal", color.value);
        sessionStorage.setItem('colorElegido', colorElegido);
        sessionStorage.setItem('tamFuente', tamelegido);
        document.getElementById('mensaje').innerHTML = "APLICADO";

    }