import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const Routes: React.FC = () => {
    const isAuthenticated = false;

    return (
        <BrowserRouter>
            {isAuthenticated
                ? <PrivateRoutes />
                : <PublicRoutes />
            }
        </BrowserRouter>
    );
}
