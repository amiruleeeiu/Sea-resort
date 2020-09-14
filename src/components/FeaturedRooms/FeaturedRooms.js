import React, { useState } from 'react';
import { useRoom } from '../Context/Context';
import Loading from '../Loading';
import Room from '../Room/Room';
import Title from '../Title';

const FeaturedRooms = () => {
   
    const {loading,featuredRooms}=useRoom();
    
    console.log(featuredRooms);
    if(loading===false){
        var rooms=featuredRooms.map(room=>{
            return <Room key={room.id} room={room}></Room>
        })
        
    }

    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms"></Title>
            <div className="featured-rooms-center">
                {
                    loading ? <Loading></Loading> : rooms
                }
            </div>
        </section>
    );
};

export default FeaturedRooms;