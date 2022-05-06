import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Inventory from './../../Inventory/Inventory';

const Home = () => {
    return (
        <>
           <Banner/>
           <Inventory/>
           <Services/>
           <Footer/>
        </>
    );
};

export default Home;