import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Greeting from './pages/Greeting';
import Logon from './pages/Logon';
import Register from './pages/Register';
import InventoryMovement from './pages/InventoryMovement';
import CadastroProduto from './pages/CadastroProduto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/newinventory" component={InventoryMovement} />
                <Route path="/novoproduto" component={CadastroProduto} />
                <Route path="/greeting" component={Greeting} />
            </Switch>
        </BrowserRouter>
    );
}