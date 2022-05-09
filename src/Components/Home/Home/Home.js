import React from 'react';
import Careers from '../../Careers/Careers';
import PageTitle from '../../PageTitle/PageTitle';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import Inventory from './../../Inventory/Inventory';

const Home = () => {
    return (
        <>
        <PageTitle title='Home'/>
           <Banner/>
           <Inventory/>
           <Reviews/>
           <Careers/>
        </>
    );
};

export default Home;