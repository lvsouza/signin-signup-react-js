import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../shared/components/Button';
import { useTheme } from '../../shared/hooks/useTheme';
import './Signup.css';

export const Signup: React.FC = () => {
    const repeatedPasswordRef = useRef<HTMLInputElement>(null);

    const { isDark, toggleDarkMode } = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [keepConnected, setKeepConnected] = useState(true);
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const handleOnChangePassword = useCallback((value: string) => {
        setPassword(value);

        if (value !== repeatedPassword) {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('As senhas precisam estar iguais.');
            }
        } else {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('');
            }
        }
    }, [repeatedPassword]);

    const handleOnChangeRepeatedPassword = useCallback((value: string) => {
        setRepeatedPassword(value);

        if (password !== value) {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('As senhas precisam estar iguais.');
            }
        } else {
            if (repeatedPasswordRef.current) {
                repeatedPasswordRef.current.setCustomValidity('');
            }
        }
    }, [password]);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(email, password);

    }, [email, password, repeatedPassword]);

    return (
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g  translate-in-y shadow-m border-radius-soft flex-column flex-items-center background-paper">
                <h2>Fazer login</h2>

                <div className="margin-top-m">
                    <form className="login-form flex-column" onSubmit={handleSubmit}>
                        <input
                            required
                            type="text"
                            value={name}
                            minLength={2}
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            className="padding-m margin-top-s font-size-m"
                        />

                        <input
                            type="text"
                            minLength={2}
                            maxLength={80}
                            value={username}
                            placeholder="Digite seu nome de usuário"
                            onChange={(e) => setUserName(e.target.value)}
                            className="padding-m margin-top-s font-size-m"
                        />

                        <input
                            required
                            type="email"
                            minLength={2}
                            value={email}
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="padding-m margin-top-s font-size-m"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            value={password}
                            placeholder="Digite sua senha"
                            className="padding-m font-size-m margin-top-s"
                            onChange={(e) => handleOnChangePassword(e.target.value)}
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            value={repeatedPassword}
                            ref={repeatedPasswordRef}
                            placeholder="Digite sua senha novamente"
                            className="padding-m font-size-m margin-top-s"
                            onChange={(e) => handleOnChangeRepeatedPassword(e.target.value)}
                        />

                        <label className="font-size-m margin-top-s padding-top-s padding-bottom-s display-flex flex-items-center">
                            <input
                                type="checkbox"
                                checked={keepConnected}
                                className="margin-right-s"
                                onChange={() => setKeepConnected(!keepConnected)}
                            />
                            Manter conectado
                        </label>

                        <Button>Cadastrar</Button>
                    </form>

                </div>

                <Link to="/sign" className="font-size-m margin-top-m font-weight-g">
                    Lagar-se
                </Link>
            </div>

            <div className="dark-mode-container">
                <label className="font-size-m padding-g display-flex flex-items-center">
                    <input
                        type="checkbox"
                        checked={isDark}
                        className="margin-right-s"
                        onChange={() => toggleDarkMode()}
                    />
                    Tema escuro
                </label>
            </div>
        </div>
    );
}
