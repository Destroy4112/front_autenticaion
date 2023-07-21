import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormRecuperacion from '../Components/FormRecuperacion';
import { consultarUsuario } from '../Services/login';
import { useDispatch } from 'react-redux';
import { createUser, resetUser } from '../Redux/userSlice';
import { PublicRoutes } from '../Models/routes';
import Swal from 'sweetalert2';

function Recuperar() {

    const [identificacion, setIdentificacion] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetUser());
    }, []);

    const handlechange = ({ target }) => {
        setIdentificacion(target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await consultarUsuario(identificacion);
            if (data !== "nada") {
                dispatch(createUser(data));
                navigate(PublicRoutes.RESET, { replace: true });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se encontro ningun usuario con el numero de identificacion ' + identificacion,
                    showConfirmButton: false,
                    timer: 1500
                })
                setIdentificacion('');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormRecuperacion
            identificacion={identificacion}
            handleSubmit={handleSubmit}
            handlechange={handlechange}
        />
    );
}

export default Recuperar;