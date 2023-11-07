import React from 'react';

function Spinner() {
    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
    );
}

export default Spinner;