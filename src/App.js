import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { CssBaseline } from '@mui/material';
import Footer from './components/Footer';
import { Container } from '@mui/system';
import React from 'react';

const App = () => {
    return (
        <>
            <CssBaseline></CssBaseline>
            <Header />
            <Container component="main" maxWidth="xl">
                <Main />
            </Container>
            <Footer />
        </>
    );
};

export default App;
