import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import reactLogo from '../../assets/images/react.svg';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div>
                    <img alt="Logo" className={classes.logo} src={logo} />
                </div>
                <div className="textRight">
                    <img alt="React" className={classes.reactLogo} src={reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </header>
    )
}

export default Header;
