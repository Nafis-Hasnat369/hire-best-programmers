import React from 'react';
import "./Selected.css";
const Selected = props => {
    const { name } = props.person;
    return (
        <div className="list-items">
            <li>{name}</li>
        </div>
    );
};

export default Selected;