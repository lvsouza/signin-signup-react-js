import React from 'react';

import { DarkModeCheckbox } from '../../shared/components/dark-mode-checkbox/DarkModeCheckbox';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-base flex-content-center flex-items-center">
            Olá dashboard
            <DarkModeCheckbox />
        </div>
    );
}
