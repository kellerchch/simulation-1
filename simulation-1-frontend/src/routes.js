import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bin from './components/Bin';
import Shelf from './components/Shelf';
import Item from './components/Item';

export default (
    <Switch>
        <Route component={ Shelf } exact path="/" />
        <Route component={ Bin } path="/bins/:id" /> 
        <Route component={ Item } path="/bin/:id" /> 
    </Switch>
)

