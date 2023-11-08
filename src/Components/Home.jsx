import React from 'react';
import Banner from './Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Carrier-Hub|Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;