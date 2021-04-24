import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { DarkModeCheckbox } from '../../shared/components/dark-mode-checkbox/DarkModeCheckbox';
import { SignUpService } from '../../shared/services/signup-service/SignupService';
import { Button } from '../../shared/components/Button';
import './Signup.css';

export const Signup: React.FC = () => {
    const repeatedPasswordRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
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

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        const result = await SignUpService.signUp({ name, email, password, username });

        setIsLoading(false);

        if (result.success) {
            history.push('/sign');
        } else {
            if (!result.messages || result.messages.length === 0) {
                alert('Erro no cadastro!');
            } else {
                alert(result.messages.join(',\n'));
            }
        }
    }, [name, username, email, password, history]);

    return (
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g translate-in-y shadow-m border-radius-soft flex-column flex-items-center background-paper">
                <h2>Cadastrar</h2>

                <div className="margin-top-m">
                    <form className="login-form flex-column" onSubmit={handleSubmit}>
                        <input
                            required
                            type="text"
                            value={name}
                            minLength={2}
                            disabled={isLoading}
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            className="padding-m margin-top-s font-size-m"
                        />

                        <input
                            type="text"
                            minLength={2}
                            maxLength={80}
                            value={username}
                            disabled={isLoading}
                            placeholder="Digite seu nome de usuário"
                            onChange={(e) => setUserName(e.target.value)}
                            className="padding-m margin-top-s font-size-m"
                        />

                        <input
                            required
                            type="email"
                            minLength={2}
                            value={email}
                            disabled={isLoading}
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="padding-m margin-top-s font-size-m"
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            value={password}
                            disabled={isLoading}
                            placeholder="Digite sua senha"
                            className="padding-m font-size-m margin-top-s"
                            onChange={(e) => handleOnChangePassword(e.target.value)}
                        />

                        <input
                            required
                            minLength={2}
                            type="password"
                            disabled={isLoading}
                            value={repeatedPassword}
                            ref={repeatedPasswordRef}
                            placeholder="Digite sua senha novamente"
                            className="padding-m font-size-m margin-top-s"
                            onChange={(e) => handleOnChangeRepeatedPassword(e.target.value)}
                        />

                        <Button disabled={isLoading}>
                            {!isLoading ? "Cadastrar" : "Carregando..."}
                        </Button>
                    </form>

                </div>

                {!isLoading
                    ? (
                        <Link to="/sign" className="font-size-m margin-top-m font-weight-g">
                            Fazer login
                        </Link>
                    )
                    : (
                        <p className="font-size-m margin-top-m font-weight-g text-success">
                            Fazer login
                        </p>
                    )
                }
            </div>

            <DarkModeCheckbox />
        </div>
    );
}
