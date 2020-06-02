import React, { useState } from 'react';

import api from '../../services/api';
import './styles.css';

export default function CadastroProduto() {
    const [cdgBarras, setCdgBarras] = useState('');
    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [qntdEstoque, setQntdEstoque] = useState('');
    const [unidade, setUnidade] = useState('');
    const [fotoProduto, setFotoProduto] = useState('');
    const [valorVenda, setValorVenda] = useState('');

    async function lidarComCadastroProduto(e) {
        e.preventDefault();

        const data = {
            cdgBarras,
            nome,
            desc,
            qntdEstoque,
            unidade,
            fotoProduto,
            valorVenda
        };

        try{
            await api.post('cadastroProduto', data);               // POST na API com o ENDPOINT


         } catch (err) {
            alert('Erro no cadastro, tente novamente.');
         }
    }


    return (
        <div className="movinventory-container">
        <div className="content">
            <section>
                <h1>CADASTRO DE PRODUTO</h1>

                <form onSubmit={lidarComCadastroProduto}>

                    
                </form>
            </section>
        </div>
        </div>
    );
}