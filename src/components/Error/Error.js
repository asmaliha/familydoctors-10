import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img src='https://image.freepik.com/free-psd/3d-female-character-with-404-error-message_23-2148938897.jpg' alt='' />
            <Link to="/home"><button>Go Back</button>
            </Link>

        </div>
    );
};

export default Error;