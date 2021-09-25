import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <div className="header-container">
            <h1>The Best Programmers in the World</h1>
            <h2>Total budget to Hire them <span className="money">$10 MILLION</span></h2>
        </div>
    );
};

export default Header;