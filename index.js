const guardar = () => {
    const actividad = document.getElementById("actividad").value;
    const nota = document.getElementById("nota").value;

    const tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();
    const celdaBotonEditar = nuevaFila.insertCell(0);
    const celdaBotonBorrar = nuevaFila.insertCell(1);
    const celdaActividad = nuevaFila.insertCell(2);
    const celdaNota = nuevaFila.insertCell(3);

    celdaBotonEditar.innerHTML = `<button>
            <img src="https://cdn-icons-png.flaticon.com/512/4226/4226577.png" width="18">
        </button>`;
    
    celdaBotonBorrar.innerHTML = `<button>
            <img src="https://png.pngtree.com/png-vector/20190121/ourmid/pngtree-vector-garbage-icon-png-image_332912.jpg" width="17">
        </button>`;

    celdaActividad.textContent = actividad;
    celdaNota.textContent = nota;

    document.getElementById("formulario").reset();
}

