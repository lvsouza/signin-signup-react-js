import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../shared/components/Button';
import { useTheme } from '../../shared/hooks/useTheme';
import './Signin.css';

export const Signin: React.FC = () => {
    const { isDark, toggleDarkMode } = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepConnected, setKeepConnected] = useState(true);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(email, password);
    }, [email, password]);

    return (
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g shadow-m border-radius-soft flex-column flex-items-center background-paper">
                <h2>Fazer login</h2>

                <div className="margin-top-m">
                    <form className="login-form flex-column" onSubmit={handleSubmit}>
                        <input
                            required
                            type="email"
                            minLength={2}
                            value={email}
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="padding-m font-size-m"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            value={password}
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                            className="padding-m font-size-m margin-top-s"
                        />

                        <label className="font-size-m margin-top-s padding-top-s padding-bottom-s display-flex flex-items-center">
                            <input
                                required
                                minLength={2}
                                type="checkbox"
                                checked={keepConnected}
                                className="margin-right-s"
                                onChange={() => setKeepConnected(!keepConnected)}
                            />
                            Manter conectado
                        </label>

                        <Button>Entrar</Button>
                    </form>

                </div>

                <Link to="/signup" className="font-size-m margin-top-m font-weight-g">
                    Cadastrar-se
                </Link>
            </div>

            <div className="dark-mode-container">
                <label className="font-size-m padding-g display-flex flex-items-center">
                    <input
                        required
                        minLength={2}
                        type="checkbox"
                        checked={isDark}
                        className="margin-right-s"
                        placeholder="Digite sua senha"
                        onChange={() => toggleDarkMode()}
                    />
                    Tema escuro
                </label>
            </div>
        </div>
    );
}
