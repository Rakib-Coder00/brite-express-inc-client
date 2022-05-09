import React from 'react';
import Careers from '../../Careers/Careers';
import PageTitle from '../../PageTitle/PageTitle';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Inventory from './../../Inventory/Inventory';

const Home = () => {
    return (
        <>
        <PageTitle title='Home'/>
           <Banner/>
           <Inventory/>
           {/* <Services/> */}
           <Careers/>
        </>
    );
};

export default Home;