import axios from 'axios';
import React, { useState } from 'react';
import Delete from './Delete';

const User = ({ user }) => {

    const [isEditing, setIsEditing] = useState(false);

    const [editNom, setEditNom] = useState("");
    const [editPrenom, setEditPrenom] = useState("");
    const [editAddress, setEditAddress] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editTel, setEditTel] = useState("");
    const [editCategory, setEditCategory] = useState("");

    const [isModify, setIsModify] = useState("");

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });

        return newDate;
    };

    const handleEdit = () => {

        const data = {
            nom: editNom ? editNom : user.nom,
            prenom: editPrenom ? editPrenom : user.prenom,
            address: editAddress ? editAddress : user.address,
            email: editEmail ? editEmail : user.email,
            tel: editTel ? editTel : user.tel,
            category: editCategory ? editCategory : user.category,
            isModify: Date.now()
        }

        setIsModify(Date.now());

        axios.put("http://localhost:3004/contacts/" + user.id, data)
            .then(() => {
                setIsEditing(false);
            });
    };

    return (
        <>
            <tr>
                <th scope="row">{user.id}</th>
                <td>{editNom ? editNom : user.nom}</td>
                <td>{editPrenom ? editPrenom : user.prenom}</td>
                <td>{editCategory ? editCategory : user.category}</td>
                <td>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#modal_${user.id}`}>Voir plus</button>
                    <Delete id={user.id} key={user.id} />
                </td>
                <td>{isModify ? dateParser(isModify) : user.isModify ? dateParser(user.isModify) : ""}</td>
            </tr>
            <div className="modal fade" id={`modal_${user.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Utilisateur - #{user.id}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul data-id="client-list" className="list-group list-group-flush">
                                {isEditing ? (
                                    <>
                                        <div className="form-group">
                                            <label htmlFor="nom">Nom* :</label>
                                            <input type="text" onChange={(e) => setEditNom(e.target.value)} className="form-control" defaultValue={editNom ? editNom : user.nom} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="prenom">Prénom* :</label>
                                            <input type="text" onChange={(e) => setEditPrenom(e.target.value)} className="form-control" defaultValue={editPrenom ? editPrenom : user.prenom} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">Address :</label>
                                            <input type="text" onChange={(e) => setEditAddress(e.target.value)} className="form-control" defaultValue={editAddress ? editAddress : user.address} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email* :</label>
                                            <input type="mail" onChange={(e) => setEditEmail(e.target.value)} className="form-control" defaultValue={editEmail ? editEmail : user.email} required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="tel">Tél :</label>
                                            <input type="tel" onChange={(e) => setEditTel(e.target.value)} className="form-control" defaultValue={editTel ? editTel : user.tel} />
                                        </div>
                                        <div className="form-group col-6 mt-2">
                                            <label htmlFor="category">Choose category :</label>
                                            <select onChange={(e) => setEditCategory(e.target.value)} defaultValue={user.category} id="category" className="form-select" aria-label="Default select example">
                                                <option value="Autres">autres</option>
                                                <option value="Famille">Famille</option>
                                                <option value="Ami">Ami</option>
                                                <option value="Travail">Travail</option>
                                            </select>
                                        </div>

                                        <button type="submit" data-bs-dismiss="modal" onClick={() => handleEdit()} className="btn btn-primary ajout-contact mt-3">Ajouter</button>

                                    </>
                                ) : (
                                    <>
                                        <li className="list-group-item"><strong>Nom :</strong> {editNom ? editNom : user.nom}</li>
                                        <li className="list-group-item"><strong>Prénom :</strong> {editPrenom ? editPrenom : user.prenom}</li>
                                        <li className="list-group-item"><strong>Adresse :</strong> {editAddress ? (editAddress) : (user.address ? user.address : "NON FOURNI")}</li>
                                        <li className="list-group-item"><strong>mail :</strong> {editEmail ? editEmail : user.email}</li>
                                        <li className="list-group-item"><strong>tél :</strong> {editTel ? (editTel) : (user.tel ? user.tel : "NON FOURNI")}</li>
                                        <li className="list-group-item"><strong>Category :</strong> {editCategory ? editCategory : user.category}</li>
                                    </>
                                )}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => setIsEditing(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {isEditing ? (
                                <button type="button" onClick={() => setIsEditing(false)} className="btn btn-primary">Annuler</button>

                            ) : (
                                <button type="button" onClick={() => setIsEditing(true)} className="btn btn-primary">Edit</button>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;