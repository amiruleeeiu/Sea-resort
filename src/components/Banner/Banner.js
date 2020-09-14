import React from 'react';

const Banner = (props) => {

    const {title,subtitle}=props;

    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
           {props.children}
        </div>
    );
};

export default Banner;