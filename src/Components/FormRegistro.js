import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaArrowLeft, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Title } from './Title';
import Spinner from '../Utils/Spinner';

function FormRegistro({
    typeInput, handleSubmit, handleChange, classDinamic, mostrar, loading
}) {
    const titulo = "Registrese";
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', width: '100%' }}>
            <Card className="w-50">
                <Card.Body>
                    <NavLink to="/"> <FaArrowLeft /> Volver</NavLink>
                    <Title titulo={titulo} />                    
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" name="nombres" autoComplete="nombres" required
                                    onChange={handleChange} placeholder="Ingrese sus nombres" />
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" name="apellidos" autoComplete="apellidos" required
                                    onChange={handleChange} placeholder="Ingrese sus apellidos" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Identificacion</Form.Label>
                            <Form.Control type="text" name="identificacion" autoComplete="identificacion" required
                                onChange={handleChange} placeholder="Ingrese su numero de identificacion" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" name="usuario" autoComplete="usuario" required
                                onChange={handleChange} placeholder="Ingresa tu usuario" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <InputGroup>
                                <Form.Control type={typeInput} name="clave" autoComplete="current-password"
                                    onChange={handleChange} placeholder="Ingresa tu contraseña" required />
                                <Button type='button' className={`btn-eye ${classDinamic ? 'btn-active' : ''} `}
                                    onClick={mostrar}>
                                    <FaEye />
                                </Button>
                            </InputGroup>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn-submit">                            
                            {loading ? <Spinner/> : "Registrarse"}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export { FormRegistro };