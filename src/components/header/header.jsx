import React, { Component } from 'react';
import './header.css';
import Logo from '../../assets/react-logo.png';
export default class Header extends Component {
    render() {
        return (
            <div className="fluid-container header">
                <section className="jumbotron bg-primary text-white text-left">
                    <div className="mastHead container">
                        <div className=" row">
                            <div className="col-sm-2"><img src={Logo} className="logo" /></div>
                            <div className="col-sm-10 d-none d-sm-block">
                                <h1 className="jumbotron-heading">Country Details</h1>
                                <p className="lead">React App</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

