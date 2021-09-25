import React from 'react';

const Calculate = props => {
    const { selected } = props;
    const totalReducer = (previous, current) => previous + current.salary;
    const total = selected.reduce(totalReducer, 0);

    return (
        <div>
            <h3>Total money needed: ${total}k/y</h3>
        </div>
    );
};

export default Calculate;