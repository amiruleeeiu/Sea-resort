import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { useRoom } from '../Context/Context';

const SingleRoom = () => {
    const {slug}=useParams();
    console.log(slug);

    const totalRoom=useRoom();
    const rooms=totalRoom.rooms;

    const currectRoom=rooms.find(room=>room.slug===slug);

    if(currectRoom){
        var {name,description,capacity,size,price,extras,breakfast,pets,images}=currectRoom;

        var[mainImg,...defaultImg]=images;
    }
    
    return (
       <>
           
               {
                   name ? 
                   <div className="roomsHero" style={{background: `url(${mainImg})`}} >
                        <Banner title={`${name} room`}>
                           <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                        </Banner>
                   </div>
                   : <section style={{textAlign:'center'}}>
                       <h4>No such room could be found</h4>
                       <Link to="/" className="btn-primary">Back to rooms</Link>
                   </section>
               }
               <section className="single-room">
                   <div className="single-room-images">
                       {
                           images && defaultImg.map((image,index)=>{
                               return <img key={index} src={image} alt={name}/>
                           })
                       }
                   </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price :${price}</h6>
                            <h6>Size :{size} SQF</h6>
                            <h6>
                                max capacity:{""}
                                {
                                    capacity>1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>{pets ?"pets allowed":"no pets allowed"}</h6>
                        </article>
                    </div>
               </section>
               <section className="room-extras">
                   <h6>extras</h6>
                   <ul className="extras">
                       {
                           extras &&  extras.map((item,index)=>{
                           return <li key={index}>-{item}</li>
                           })
                       }
                   </ul>
               </section>
          
      </>
    );
};

export default SingleRoom;