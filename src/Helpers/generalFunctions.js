export const verificarCampos = () => {
    const ids = ['username', 'email', 'password', 'password2'];
    
    if (ids.some(id => !document.getElementById(id).value)) {
        alert('Por favor, rellene todos los campos.');
        return;
    }

    const username = document.getElementById('username').value;
    if (!/^[a-zA-Z0-9_.]+$/.test(username)) {
        alert('El nombre de usuario solo debe contener letras, números, guiones bajos (_) y puntos.');
        return;
    }

    const email = document.getElementById('email').value;
    if (!esCorreoValido(email)) {
        alert('Por favor, ingrese un correo válido.');
        return;
    }

    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    if (password !== password2) {
        alert('La contraseña y la confirmación de contraseña deben ser iguales.');
    }
};


export const esCorreoValido = correo => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);



