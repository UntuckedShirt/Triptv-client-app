import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

// the redux store will have a true or false boolean, and decide wheter the usrr 
// is signed in or signed out
// another approach would be to have our action creators manage
// accrss to the gapi 

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Triptv
            </Link>
            <div className="right menu">
                <Link to ="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;