import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer";


import './App.scss';
import {Filters} from "./components/Filters/Filters";


export const App = () => {
    return (
        <>
            <Header/>
            <Filters/>
            <Body/>
            <Footer/>
        </>
    );
};
