import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import projetoSaImg from '../../assets/projetosa.png';

export default function Logon(){
    const [user, setUser ] = useState('');
    const [password, setPassword ] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
          const response = await api.post('rota', { user, password });
          
          localStorage.setItem('userId', response.data.id);
          localStorage.setItem('userName', user)

          history.push('/vendas');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logoSa" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Usuário" 
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <input 
                        placeholder="Senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={projetoSaImg} alt="projetoSa" />
        </div>
    );
}