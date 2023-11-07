import React from 'react';
import { FormRegistro } from '../Components/FormRegistro';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../Services/login';
import Swal from 'sweetalert2';
import { PublicRoutes } from '../Models/routes';

function Registrarse() {

    const navigate = useNavigate();
    const [typeInput, setTypeInput] = useState("password");
    const [classDinamic, setClassDinamic] = useState(false);
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState({
        nombres: "",
        apellidos: "",
        identificacion: "",
        usuario: "",
        clave: "",
        rol:"ADMIN"
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
            setLoading(true);
            const resultado = await registrarUsuario(usuario);
            setLoading(false);
            console.log(resultado);
            if (resultado === "error") {
                Swal.fire({
                    icon: 'warning',
                    title: 'No completado!',
                    text: 'Ya se encuentra registrado un usuario con esa identificacion o usuario',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Hecho',
                    text: 'Registrado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(PublicRoutes.LOGIN, { replace: true });
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
        <FormRegistro
            loading={loading}
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