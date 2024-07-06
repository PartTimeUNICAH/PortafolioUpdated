document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {

        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        var birthdate = document.getElementById('birthdate').value;
        var mensaje = document.getElementById('mensaje').value;

        if (!nombre || !correo || !birthdate || !mensaje) {
            alert('Por favor, completa todos los campos.');
            event.preventDefault();
        }

        var correoPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoPattern.test(correo)) {
            alert('Por favor, introduce un correo electrónico válido.');
            event.preventDefault();
        }
    });
});