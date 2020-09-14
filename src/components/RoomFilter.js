import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { useRoom } from './Context/Context';
import Loading from './Loading';
import fakeData from '../roomsData'
import Room from '../components/Room/Room'
import RoomList from './RoomList';

const RoomFilter = () => {
    
    const context=useRoom();
    const {loading,rooms}=context;

    
    const [room,setRoom]=useState();
    console.log(room);

    const [roomInfo,setRoomInfo]=useState(
        {
            "type":"All",
            "capacity":1,
            "price":600,
            "breakfast":false,
            "pets":false
        }
    )
    console.log(roomInfo);

    const price=roomInfo.price;
    const breakfast=roomInfo.breakfast;
    const pets=roomInfo.pets;

    useEffect(()=>{

       if(roomInfo.type!=="All"){
            const tempRoom=rooms.filter(item=>item.type===roomInfo.type && item.capacity >= roomInfo.capacity && item.price<=price); 
            setRoom(tempRoom)
       }
       else if(roomInfo.type==="All"){
        const tempRoom=rooms.filter(item=>item.capacity >= roomInfo.capacity && item.price<=price);
          setRoom(tempRoom)
       }
       else{
        setRoom(rooms);
       }

    },[roomInfo.capacity,roomInfo.type,breakfast,pets,price,rooms])
    
    if(loading){
        return <Loading></Loading>
    }
    
    const handleChange=(e)=>{
      const newRoomInfo={...roomInfo};
      newRoomInfo[e.target.name]=e.target.value
      setRoomInfo(newRoomInfo);
       
    }

    const handleChangeCheck=(e)=>{
        const newRoomInfo={...roomInfo};
        newRoomInfo[e.target.name]=e.target.checked
        setRoomInfo(newRoomInfo);
        
    }


    const getUnique=(items,value)=>{
        return [...new Set(items.map(item=>item[value]))];
    }

    let type=getUnique(rooms,"type")
    
    type=["All",...type]
    
    const option =type.map(item=>{
        return <option value={item}>{item}</option>
      })

      //people
      let peopleNumbers=getUnique(rooms,"capacity");
      let people =peopleNumbers.map(item=>{
        return <option value={item}>{item}</option>
      })
     

    return (
        <>
            <section className="filter-container">
                <Title title="Serach Rooms"></Title>
                <form className="filter-form">
                    {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type" className="form-control" style={{width:'150px'}} onChange={handleChange} >
                            {option}
                        </select>
                    </div>
                    {/* guests  */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        onChange={handleChange}
                        className="form-control"
                       
                    >
                        {people}
                    </select>
                    </div>
                    {/* end of guests */}
                    {/* room price */}
                    <div className="form-group">
                    <label htmlFor="price">room price ${price} </label>
                    <input
                        type="range"
                        name="price"
                        min="0"
                        max="600"
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                    </div>
                    {/* end of room price*/}
                    {/* extras */}
                    <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                       
                        onChange={handleChangeCheck}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="pets"
                        
                        onChange={handleChangeCheck}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                    </div>
                    {/* end of extras type */}
                </form>
            </section>
            
            <RoomList room={room}></RoomList>
            
        </>
    );
};

export default RoomFilter;