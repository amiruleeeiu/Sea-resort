import React from 'react';
import Room from './Room/Room';

const RoomList = (props) => {
    const room=props.room;
    return (
        <section className="roomslist">
                <div className="roomslist-center">
                    {
                        room &&
                        room.map(item=><Room key={item.id} room={item}></Room>)
                        
                    }
                </div>
        </section>
    );
};

export default RoomList;