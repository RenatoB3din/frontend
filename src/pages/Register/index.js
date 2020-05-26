import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [perfil, setPerfil] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault(); // Não atualiza a pág ao dar submit

        const data = {
            name,
            user,
            password,
            email,
            cpf,
            perfil
        };

        try{
            const response = await api.post('users', data);

            alert(`Seu Usuário é: ${response.data.id}`);

            history.push('/');
         } catch (err) {
            alert('Erro no cadastro, tente novamente.');
         }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logoSa" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude-nos a crescer cada vez mais.</p>

                </section>
                
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome Completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Usuário"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                        <select 
                            name="perfil" 
                            style={{ width: 180 }}
                            value={perfil}
                            onChange={e => setPerfil(e.target.value)}
                        >
                            <option value="" data-default disabled selected></option>

                            <option                  
                                value="Vendedor"
                            >Vendedor</option>

                            <option
                                value="Admin"
                            >Admin</option>
                        </select>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}