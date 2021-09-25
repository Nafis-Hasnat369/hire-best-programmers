import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate-price/Calculate';
import Programmer from '../Programmer/Programmer';
import Selected from '../Selected/Selected';
import "./Programmers.css";
const Programmers = () => {

    const [programmers, setProgrammers] = useState([]);
    const [selected, setSelected] = useState([]);

    // data load area

    useEffect(_ => {
        fetch("./database.json")
            .then(res => res.json())
            .then(data => {
                setProgrammers(data);
            })
    }, []);

    // handle event listeners area

    const handleAddToHire = programmer => {
        const newSelected = [...selected, programmer];
        setSelected(newSelected);
    }

    return (
        <div className="display-programmers">
            <div className="programmers-container">
                {
                    programmers.map(programmer => <Programmer
                        key={programmer.id}
                        programmer={programmer}
                        handleAddToHire={handleAddToHire}
                    />)
                }
            </div>
            <div className="added-programmers-container">
                <h2>Total selected: {selected.length}</h2>
                <Calculate selected={selected} />
                <hr />
                <h4>Listed programmers name</h4>
                {
                    selected.map(person => <Selected
                        key={person.key}
                        person={person}
                    />)
                }
            </div>
        </div>
    );
};

export default Programmers;