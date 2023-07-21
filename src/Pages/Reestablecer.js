import { FormReestablecer } from "../Components/FormReestablecer";
import { useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../Services/login';
import { crearStorage } from '../Utils/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../Redux/userSlice';
import Swal from 'sweetalert2';
import { PrivateRoutes } from '../Models/routes';
import { useState } from "react";

function Reestablecer() {

    const userState = useSelector((state) => state.user);
    const [clave, setClave] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        setClave(target.value);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUser(clave));
            console.log(userState);
            const resultado = await registrarUsuario(userState);
            console.log(resultado);
            const userParsed = JSON.parse(resultado.usuario);
            if (resultado.token === '0') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo actualizar la contraseña',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Hecho',
                    text: 'Contraseña actualizada correctamente',
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

    return (
        <FormReestablecer
            usuario={userState}
            handleChange={handleChange}
            handlesubmit={handlesubmit}
        />
    );
}

export default Reestablecer;