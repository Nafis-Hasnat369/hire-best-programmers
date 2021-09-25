import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Programmer.css";
const Programmer = props => {
    const { image, name, nationality, born, known, salary } = props.programmer;
    return (
        <div className="programmers">
            <img src={image} alt="" />
            <h2>Name: {name}</h2>
            <h4>Nationality: {nationality}</h4>
            <h4><small>Born: {born}</small></h4>
            <p>Known for: {known}</p>
            <h3>Salary: {salary}k/y</h3>
            <button onClick={_ => props.handleAddToHire(props.programmer)} className="btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to Hire</button>
        </div>
    );
};

export default Programmer;