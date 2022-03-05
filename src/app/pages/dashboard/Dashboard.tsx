import React from 'react';

import { Button, DarkModeCheckbox } from '../../shared/components';
import { useAuth } from '../../shared/hooks';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    return (
        <div className="dashboard-base flex-content-center flex-items-center flex-column">
            Olá dashboard

            <Button onClick={logout}>
                Logout
            </Button>

            <DarkModeCheckbox />
        </div>
    );
}
