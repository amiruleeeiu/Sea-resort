import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../Services';
import FeaturedRooms from '../FeaturedRooms/FeaturedRooms';

const Home = () => {


    return (
        <>
            <div className="defaultHero">
                <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </div>
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>
        </>

    );
};

export default Home;