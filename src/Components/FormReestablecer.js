import { Button, Card, Container, Form } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Title } from './Title';
import { PublicRoutes } from '../Models/routes';

function FormReestablecer({
    usuario, handleChange, handlesubmit
}) {
    const titulo = "Reestablecer Contraseña";

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', width: '100%' }}>
            <Card className="w-70">
                <Card.Body>
                    <NavLink to={PublicRoutes.SEARCH}> <FaArrowLeft /> Volver</NavLink>
                    <Title titulo={titulo} />                    
                    <p> {usuario.nombres + " " + usuario.apellidos} </p>
                    <Form onSubmit={handlesubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" name="clave" autoComplete="clave" required
                                onChange={handleChange} placeholder="Ingresa tu nueva contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-submit">
                            Actualizar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export { FormReestablecer };