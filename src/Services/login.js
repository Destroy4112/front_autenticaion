const URL_AUTH = 'http://localhost:8080/api/login';
const URL_USERS = 'http://localhost:8080/api/usuarios';
const URL_USERS_CONSULTA = 'http://localhost:8080/api/usuarios/';

export async function validarSesion(user) {
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user)
    };
    const res = await fetch(URL_AUTH, options);
    return await res.json();
}

export async function registrarUsuario(user) {
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user)
    };
    const res = await fetch(URL_USERS, options);
    return await res.json();
}

export async function consultarUsuario(identificacion) {
    const options = {
        headers: {
            "Content-type": "application/json",
        },
    }
    const res = await fetch(URL_USERS_CONSULTA + identificacion, options);
    if (res.status === 200) {
        return await res.json();
    } else {
        return await res.text();
    }
} 