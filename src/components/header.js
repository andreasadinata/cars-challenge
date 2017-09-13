import React from 'react';
import HeaderNav from './headerNav';
import HeaderCarInfo from './headerCarInfo'
import './header.css';

export default function Header(props){
    return(
        <div className="car-detail">
            <img src={require("../images/close.svg")} alt="x" className="close-button"/>
            <img src={require("../images/car.png")} alt="car-image" className="car-image"/>
            <HeaderCarInfo/>
            <img src={require("../images/info.svg")} alt="x" className="info-button"/>
            <HeaderNav/>
        </div>

    )
}
