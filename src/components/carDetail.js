import React from 'react';
import './carAndFinancingDetail.css';

export default function CarDetail(props){
    return(
        <li className="car-wanted-financing">
            <h3>2017 Toyota Prius Three</h3>
            <p className="condition">Condition: New, 5 miles </p>
            <p className="exterior">Exterior: Blizzard Pearl</p>
            <p className="dealer">Sold by: Nalley Toyota of Roswell</p>
            <p className="vin">VIN: 1G1Y12D71H5102966</p>
        </li>
    )
}
