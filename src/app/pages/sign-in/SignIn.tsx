import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, DarkModeCheckbox } from '../../shared/components';
import { useAuth } from '../../shared/hooks';
import './SignIn.css';

export const SignIn: React.FC = () => {
    const { login } = useAuth();

    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepConnected, setKeepConnected] = useState(true);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        await login(email, password);

        setIsLoading(false);
    }, [email, login, password]);

    return (
        <div className="sign-in-base flex-content-center flex-items-center">
            <div className="padding-g translate-in-y shadow-m border-radius-soft flex-column flex-items-center background-paper">
                <h2 className="font-size-xxg font-weight-g">Fazer login</h2>

                <div className="margin-top-m">
                    <form className="login-form flex-column" onSubmit={handleSubmit}>
                        <input
                            required
                            type="email"
                            minLength={2}
                            value={email}
                            disabled={isLoading}
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="padding-m font-size-m"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            value={password}
                            disabled={isLoading}
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                            className="padding-m font-size-m margin-top-s"
                        />

                        <label className="font-size-m margin-top-s padding-top-s padding-bottom-s display-flex flex-items-center">
                            <input
                                type="checkbox"
                                disabled={isLoading}
                                checked={keepConnected}
                                className="margin-right-s"
                                onChange={() => setKeepConnected(!keepConnected)}
                            />
                            Manter conectado
                        </label>

                        <Button disabled={isLoading}>Entrar</Button>
                    </form>

                </div>

                {!isLoading
                    ? (
                        <Link to="/sign-up" className="font-size-m margin-top-m font-weight-g">
                            Cadastrar-se
                        </Link>
                    )
                    : (
                        <p className="font-size-m margin-top-m font-weight-g text-success">
                            Cadastrar-se
                        </p>
                    )
                }
            </div>

            <DarkModeCheckbox />
        </div>
    );
}
