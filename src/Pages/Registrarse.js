import React from 'react';
import { FormRegistro } from '../Components/FormRegistro';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../Services/login';
import { crearStorage } from '../Utils/localStorage';
import { useDispatch } from 'react-redux';
import { createUser } from '../Redux/userSlice';
import Swal from 'sweetalert2';
import { PrivateRoutes } from '../Models/routes';

function Registrarse() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [typeInput, setTypeInput] = useState("password");
    const [classDinamic, setClassDinamic] = useState(false);
    const [usuario, setUsuario] = useState({
        nombres: "",
        apellidos: "",
        identificacion: "",
        usuario: "",
        clave: ""
    })
    const handleChange = ({ target }) => {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        });
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const resultado = await registrarUsuario(usuario);
            console.log(resultado);
            if (resultado.token === '0') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ya se encuentra registrado un usuario con esa identificacion o usuario',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                const userParsed = JSON.parse(resultado.usuario);
                Swal.fire({
                    icon: 'success',
                    title: 'Hecho',
                    text: 'Registrado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                dispatch(createUser(userParsed));
                crearStorage("token", resultado.token);
                navigate(PrivateRoutes.DASHBOARD, { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const mostrar = () => {
        let tipo = typeInput === 'text' ? "password" : "text";
        setTypeInput(tipo)
        setClassDinamic(!classDinamic);
    }

    return (
        <FormRegistro
            typeInput={typeInput}
            setTypeInput={setTypeInput}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            classDinamic={classDinamic}
            mostrar={mostrar}
        />
    );
}

export default Registrarse;