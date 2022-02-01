import React, { Component } from 'react';
import './Nav.css';
import "./../../App.css"
// import { NavLink } from 'react-router-dom';
// import DarkMode from "./DarkMode";


class Nav extends Component {

    state = {
        isactive: false,
        isCheck: false,
        isScroll: false
    }
    

    render() {
        const clickHandler = ()=> {
                if (this.state.isactive) {
                    this.setState({ isactive: false })
                } else {
                    this.setState({ isactive: true })
                }
        }
        return (
            <>

                <div id="Nav" className="nav-container">
                    <nav id="page-top" className={this.state.isScroll ? "onScrollnav" : ""} >
                        <label className="logo" translate="no">Paritosh Kashyap</label>

                        <ul className={"menu-list " + (this.state.isactive ? " show" : "")}>


                            <li onClick={clickHandler}><a href="#">Home</a></li>
                            <li onClick={clickHandler}><a href="#About">About</a></li>
                            <li onClick={clickHandler}><a href="#Portfolio" >Portfolio</a></li>
                            <li onClick={clickHandler}><a href="#Resume">Resume</a></li>
                            <li onClick={clickHandler}><a href="#Contact" >Contact</a></li>

                        </ul>


                        <label id="icon" onClick={clickHandler}> <i className="fas fa-bars" ></i> </label>
                    </nav>
                </div>



                <div onScroll={() => {
                    this.setState({ isScroll: true })
                }} />




            </>
        );
    }
}

export default Nav;