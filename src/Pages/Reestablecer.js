import { FormReestablecer } from "../Components/FormReestablecer";
import { useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../Services/login';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../Redux/userSlice';
import Swal from 'sweetalert2';
import { PublicRoutes } from '../Models/routes';

function Reestablecer() {

    const userState = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(updateUser(target.value));
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {                        
            const resultado = await registrarUsuario(userState);
            if (resultado === "error") {
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
                navigate(PublicRoutes.LOGIN, { replace: true });
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