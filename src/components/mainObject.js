import React from 'react';
import IntroReview from './introReview';
import PlaceOrder from './placeOrder';
import Detail from './detail';
import LittleNotes from './littleNotes';

export default function MainObjecct (props){
    return(
        <section className="review">
            <ul>
                <IntroReview/>
                <Detail/>
                <PlaceOrder/>
                <LittleNotes/>
            </ul>
        </section>
    )
}
