import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormLogin } from "../Components/FormLogin";
import { useDispatch } from 'react-redux';
import { createUser } from '../Redux/userSlice';
import { PrivateRoutes } from '../Models/routes';
import { crearStorage } from '../Utils/localStorage';
import { validarSesion } from '../Services/login';
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [typeInput, setTypeInput] = useState("password");
    const [classDinamic, setClassDinamic] = useState(false);
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState({
        usuario: "",
        clave: ""
    });

    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const resultado = await validarSesion(usuario);
            setLoading(false);
            if (resultado.token === '0') {
                setUsuario({ usuario: "", clave: "" })
                Swal.fire({
                    icon: 'warning',
                    title: 'Error',
                    text: 'Credenciales invalidas',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                const user = JSON.parse(resultado.usuario);
                dispatch(createUser(user));
                crearStorage("token", resultado.token);
                navigate(PrivateRoutes.DASHBOARD, { replace: true });
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const mostrar = () => {
        let tipo = typeInput === 'text' ? "password" : "text";
        setTypeInput(tipo)
        setClassDinamic(!classDinamic);
    }

    return (
        <FormLogin
            loading={loading}
            usuario={usuario}
            typeInput={typeInput}
            setTypeInput={setTypeInput}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            classDinamic={classDinamic}
            mostrar={mostrar}
        />
    );
}
export default Login;