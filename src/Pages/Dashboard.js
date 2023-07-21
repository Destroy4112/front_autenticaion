import { Bienvenida } from "../Components/Bienvenida";
import Sidebar from "../layouts/Sidebar";
import { Footer } from "../layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removerStorage } from "../Utils/localStorage";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../Models/routes";
import { resetUser } from "../Redux/userSlice";
import Swal from "sweetalert2";

function Dashboard() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const logout = () => {
        Swal.fire({
            title: '¿Desea salir del sistema?',
            text: "Si, lo hace tendra que iniciar sesion nuevamente",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, salir!',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                removerStorage("usuario");
                removerStorage("token");
                dispatch(resetUser());
                navigate(PublicRoutes.LOGIN, { replace: true });
            }
        })
    }

    return (
        <>
            <Sidebar cerrarSesion={logout} nombre={userState.nombres} />
            <Bienvenida />
            <Footer />
        </>
    );
}
export default Dashboard;