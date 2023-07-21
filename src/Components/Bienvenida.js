import React from 'react';
import { Container } from 'react-bootstrap';

function Bienvenida() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '85vh', width: '100%' }}>
            <h1>Bienvenido</h1>
        </Container>
    );
}

export { Bienvenida };