
import React from 'react';

const Card = (props) => {

    return (
        <>
            <div className="col-4">
                <div className="card">
                    <h6 className="card-header">{props.name}</h6>
                    <div className="card-body">
                        <h5 className="card-text">{props.value}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;