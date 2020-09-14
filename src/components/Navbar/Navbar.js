import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { FiMenu } from "react-icons/fi";

const Header = () => {

    const [toggle,setToggle]=useState(false);

    const handleToggle=()=>{
        if(toggle===false){
            setToggle(true);
        }
        else{
            setToggle(false);
        }
        
    }
    return (
        <div className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={handleToggle}>
                        <FiMenu size={30}/>
                        {/* <FiMenu/> */}
                    </button>
                </div>
                <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>

                </ul>
            </div>
        </div>
        
            // <div className="navbar">
            //     <div className="nav-center">
            //         <div className="nav-header">
            //             <Link to="/">
            //                 <img src={logo} alt="Beach Resort"/>
            //             </Link>
            //             <button type="button" className="nav-btn" onClick={handleToggle}>
            //                 <FaAlignRight className="nav-icon"/>
            //             </button>
            //         </div>
            //         <ul className={toggle ? "nav-links show nav" : "nav-links"}>
            //             <li>
            //                 <Link to="/">Home</Link>
            //             </li>
            //             <li>
            //                 <Link to="/rooms">Rooms</Link>
            //             </li>
            //         </ul>
            //     </div>
                
            // </div>
    );
};

export default Header;