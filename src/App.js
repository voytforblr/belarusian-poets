import {useTranslation} from 'react-i18next'

import React, {Suspense} from 'react';
import {Route} from "react-router-dom";
import Home from "./pages/Home"
import List from "./pages/List"

import Authors from "./pages/Authors";
import WriterPage from '../src/components/WriterPage'

export default function App() {

    const {t} = useTranslation();

    return (
        <div className="App">
            <Suspense fallback={null}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/List" component={List}/>
                <Route exact path="/List/:id" component={Authors}/>
            </Suspense>
        </div>
    );
}