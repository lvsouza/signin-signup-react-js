import React from 'react';

import './Signin.css';

export const Signin: React.FC = () => {
    return (
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g shadow-m border-red flex-column">
                <h2>Fazer login</h2>

                <div className="margin-top-m">
                    <form className="login-form flex-column">
                        <input
                            placeholder="Digite seu email"
                            className="background padding-m font-size-m"
                        />

                        <input
                            placeholder="Digite sua senha"
                            className="background padding-m font-size-m margin-top-s"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
