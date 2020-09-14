import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif'
const Loading = () => {
    return (
        <>
          <h4>Room is loading</h4>
          <img src={loadingGif} alt=""/>  
        </>
    );
};

export default Loading;