import React from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';



const Services = () => {

    const services=[
        {
            icon:<FaCocktail/>,
            title:"Free cocktails",
            info:'Lorem ipsum dolor sir amet consectetur adipisicing elit magi corporist.'
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hicking",
            info:'Lorem ipsum dolor sir amet consectetur adipisicing elit magi corporist.'
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free shuttle",
            info:'Lorem ipsum dolor sir amet consectetur adipisicing elit magi corporist.'
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:'Lorem ipsum dolor sir amet consectetur adipisicing elit magi corporist.'
        }
    ]

    return (
        <div className="services">
            <Title title="services"></Title>
            <div className="services-center">
                {
                    services.map(item=>{
                        return <article className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })
                }
            </div>
        </div>
    );
};

export default Services;