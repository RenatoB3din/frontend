import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

import Menu from '../../components/Header/Menu';
import logo from '../../components/Header/logo.png';


export default function Register() {
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault(); // Não atualiza a pág ao dar submit

        const data = {
            nome,
            login,
            senha,
            email,
            cpf,
            cargo
        };

        try{
            const response = await api.post('usuario', data);

            alert(`Seu Usuário é: ${response.data.id}`);

            history.push('/');
         } catch (err) {
            alert('Erro no cadastro, tente novamente.');
         }
    }

    let links = [
        { label: 'Usuário', link: '/register', active: true },
        { label: 'Fornecedor', link: '/novofornecedor'},
        { label: 'Produtos', link: '/novoproduto'},     
        { label: 'Vendas', link: '#home' },
        { label: 'Movimentação de Inventário', link: '/newinventory' },
        { label: 'Relatórios', link: '#contact-us' },
      ];

    return (
        <div>
        <header>
            <Menu links={links} logo={logo} />
        </header>
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
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        placeholder="Usuário"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
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
                            value={cargo}
                            onChange={e => setCargo(e.target.value)}
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
        </div>
    );
}