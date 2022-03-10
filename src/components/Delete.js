import axios from 'axios';
import React from 'react';

const Delete = ({ id }) => {

    const handleDelete = () => {
        axios.delete("http://localhost:3004/contacts/" + id)
            .then(() => {
                window.location.reload();
            })
    }

    return (
        <>
            <button type="button" onClick={() => {
                if (window.confirm('Etes-vous sur de vouloir supprimer ce contact ?')) {
                    handleDelete();
                }
            }} className="btn btn-danger">Supprimer</button>
        </>
    );
};

export default Delete;