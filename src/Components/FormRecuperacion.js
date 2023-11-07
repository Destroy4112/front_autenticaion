import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import '../Assets/login.css';
import { Title } from './Title';


function FormRecuperacion({ identificacion, handleSubmit, handlechange }) {

    const titulo = "Ingresa tu numero de identificación";
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', width: '100%' }}>
            <Card className="w-70">
                <Card.Body>
                    <NavLink to="/"> <FaArrowLeft /> Volver</NavLink>
                    <Title titulo={titulo} />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" name="identificacion" autoComplete="identificacion" required
                                onChange={handlechange} placeholder="Ingresa tu numero de identificacion" value={identificacion} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-submit">
                            Buscar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default FormRecuperacion;