import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

export default class Tax extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openTax: false,
            rotate: 0
        }
    }
    onClick(){
        let value = this.state.rotate + 180
        this.setState({
            openTax: !this.state.openTax,
            rotate: value
        })
    }
    render(){
        let explanation;
        if(this.state.openTax===true){
            explanation = <p className="extra-explanation">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        }
        return(
            <div id="tax" className="extra-paragraph">
            <div>Tax(CA)</div>
            <div onClick={()=>this.onClick()}><i className="fa fa-angle-down" aria-hidden="true" style={{transform: "rotate("+this.state.rotate+"deg)"}}></i></div>
                <div className="float-right">$2,657.22</div>
                    <CSSTransitionGroup
                transitionName="transition"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={300}>
                    {explanation}
                    </CSSTransitionGroup>
            </div>

    )
}
}
