import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import items from '../../data';

const RoomContext=createContext()

export const RoomContextProvider=(props)=>{
            
        const room=Room();
   
    return <RoomContext.Provider value={room}>{props.children}</RoomContext.Provider>
}

export const useRoom=()=>useContext(RoomContext);

const Room=()=>{
    const [room,setRoom]=useState(
        {
            rooms:[],
            sortedRooms:[],
            feturedRooms:[],
            loading:true

        }
    );
        useEffect(()=>{
            const rooms=items.map(item=>{
                const id=item.sys.id;
                const images=item.fields.images.map(image=>image.fields.file.url)
                const room={...item.fields,images,id};
                return room;
            })
              const featuredRooms=rooms.filter(room=>room.featured===true);
            setRoom({
                rooms,featuredRooms,sortedRooms:rooms,loading:false
            })
        },[])
        console.log(room);
        return room;
}

