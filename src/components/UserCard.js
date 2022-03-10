import React from 'react';

const UserCard = (props) => {


    return (
        <div className="col-3">
            <div className="card">
                <h6 className="card-header">{props.name}</h6>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><span className="font-weight-bold">Nom : </span>{props.tab.nom}</li>
                        <li className="list-group-item"><span className="font-weight-bold">Prenom : </span>{props.tab.prenom}</li>
                        <li className="list-group-item"><span className="font-weight-bold">email : </span>{props.tab.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserCard;