
import './App.css';
import React from 'react';
import Header from './component/Header/Header';
import Live from './component/Live/Live';
import Hoist from './component/Hoist/Hoist';
import Discover from './component/Dicover/Discover';
import Info from './component/Info/Info';
import FooterInfo from './component/FootInfo/FooterInfo';
import Footer from './component/Footer/Footer';

const App = () => {
    return (
        <>
           <Header />
           <Live />
           <Hoist />
           <Discover />
           <Info />
           <FooterInfo />
           <Footer />
        </>
    );
}

export default App;