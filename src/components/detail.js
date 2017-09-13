import React from 'react';
import CarDetail from './carDetail';
import FinancingDetail from './financingDetail'
import Subtotal from './subtotal'
import Total from './total';
import DueOnPickup from './dueOnPickup';
import Signature from'./signature'
import './detail.css';
import './breakDownDetail.css'

export default function Detail(props){
    return(
        <li className="detail">
            <ul>
                <CarDetail/>
                <FinancingDetail/>
                <Subtotal/>
                <Total/>
                <DueOnPickup/>
                <Signature/>
            </ul>
        </li>
    )
}
