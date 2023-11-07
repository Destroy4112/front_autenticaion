import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { Title } from "./Title";
import { PublicRoutes } from "../Models/routes";
import '../Assets/login.css';
import Spinner from "../Utils/Spinner";

function FormLogin({
    usuario, typeInput, handleSubmit, handleChange, classDinamic, mostrar, loading
}) {
    const titulo = "Login";
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', width: '100%' }}>
            <Card className="w-50">
                <Card.Body>
                    <Title titulo={titulo} />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" name="usuario" autoComplete="usuario" required
                                onChange={handleChange} placeholder="Ingresa tu usuario" value={usuario.usuario} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <InputGroup>
                                <Form.Control type={typeInput} name="clave" autoComplete="current-password" required
                                    onChange={handleChange} placeholder="Ingresa tu contraseña" value={usuario.clave} />
                                <Button type='button' className={`btn-eye ${classDinamic ? 'btn-active' : ''} `}
                                    onClick={mostrar}>
                                    <FaEye />
                                </Button>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-submit">
                            {loading ? <Spinner/> : "Iniciar sesión"}
                        </Button>
                    </Form>
                    <div className="container-accioones">
                        <NavLink to={PublicRoutes.REGISTER}>Registrarse</NavLink>
                        <NavLink to={PublicRoutes.SEARCH} > Olvidaste la contraseña</NavLink>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export { FormLogin };