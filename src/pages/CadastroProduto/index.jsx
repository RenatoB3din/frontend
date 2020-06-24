import React, { useState } from 'react';

import api from '../../services/api';
import './styles.css';

export default function CadastroProduto() {
    const [cdgBarras, setCdgBarras] = useState('');
    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [unidade, setUnidade] = useState('');
    const [fotoProduto, setFotoProduto] = useState('');
    const [valorVenda, setValorVenda] = useState('');

    async function lidarComCadastroProduto(e) {
        e.preventDefault();

        const data = {
            cdgBarras,
            nome,
            desc,
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

                <div>

                <fieldset >
                <legend>Nome do Produto</legend>
                    <input 
                        type="text"
                        placeholder="Nome Produto "
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />  
                </fieldset> 

                <div className="input-group">

                <fieldset>
                <legend>Código de barras do Produto</legend>
                    <input 
                        type="number"
                        placeholder="Código de Barras"
                        value={cdgBarras}
                        onChange={e => setCdgBarras(e.target.value)}
                    />  
                </fieldset> 

                <fieldset style={{ width: 220 }}>
                <legend>Unidade</legend>
                    <select 
                        value={unidade}
                        onChange={e => setUnidade(e.target.value)}
                    >
                            <option value="" data-default disabled selected></option>

                            <option                  
                                value="UnidadeA"
                                >Unidade A
                            </option>

                            <option
                                value="UnidadeB"
                                >Unidade B
                            </option>
                    </select>
                </fieldset>

                </div>

                <fieldset>
                <legend>Descrição do Produto</legend>
                    <textarea 
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    /> 
                </fieldset>

                <div className="input-group">
                    <fieldset>
                        <legend>Imagem Produto</legend>

                            <input id="img_produto" style={{ width: 450 }} type="file" name="arquivos" class="btn btn-success"  accept="image/png, image/jpeg" value={fotoProduto} onChange={e => setFotoProduto(e.target.value)} multiple />      
                    </fieldset>


                    <fieldset>
                    <legend>Porcentagem sobre as vendas</legend>
                        <input 
                            type="number"
                            placeholder="% Porcentagem sobre vendas"
                            value={valorVenda}
                            onChange={e => setValorVenda(e.target.value)}
                        />  
                    </fieldset> 
                </div>


                    <div className="operacaoProduto">
                            <button id="btn_add" type="submit">Adicionar Produto</button>

                            <button id="btn_cancel" >Cancelar Operação</button>
                    </div>
                </div>
                    
                </form>
            </section>
        </div>
        </div>
    );
}