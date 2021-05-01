import { useContext } from 'react';

import { AuthorizationContext } from '../contexts/authorization';

export const useAuth = () => {
    return useContext(AuthorizationContext);
}
