import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../RoomContainer';

const Rooms = () => {
    return (
        <>
            <div className="roomsHero">
                <Banner title="Our Rooms" subtitle="Return Home">
                    <Link to="/" className="btn-primary">
                        Return home
                    </Link>
                </Banner>
            </div>

         
            <RoomContainer></RoomContainer>
        </>
    );
};

export default Rooms;