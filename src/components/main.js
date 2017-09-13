import React from 'react';
import Header from './header';
import MainObject from './mainObject';
import './main.css'


export default class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500);
    }

    render() {

    return(
        <section className="buying-option">
            <Header/>
            <MainObject/>
        </section>
    )
}
}
