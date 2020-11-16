import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

function LoaderPage() {

    return (
        <div className='d-flex flex-row justify-content-center align-items-center violet-gradient text-light' style={{height:"100vh"}}>
            <h1>Cargando . . .</h1>
            <LoadingOverlay active={true} spinner text=''></LoadingOverlay>
        </div>
    );

}

export default LoaderPage;