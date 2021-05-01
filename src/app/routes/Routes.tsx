import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../shared/hooks';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const Routes: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <BrowserRouter>
            {isAuthenticated
                ? <PrivateRoutes />
                : <PublicRoutes />
            }
        </BrowserRouter>
    );
}
