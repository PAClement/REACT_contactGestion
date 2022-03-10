import axios from 'axios';
import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Add = () => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [category, setCategory] = useState("autres");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3004/contacts', {
            id: Date.now(),
            nom: nom,
            prenom: prenom,
            address: address,
            email: email,
            tel: tel,
            category: category
        }).then(() => {
            setNom("");
            setPrenom("");
            setAddress("");
            setEmail("");
            setTel("");
            setCategory("autres");
        })
    }

    return (
        <>
            <Header />
            <main>
                <Navigation />
                <div className="contain">
                    <div className="col-md-9">
                        <h2 className="mb-3">Ajout de contact</h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="nom">Nom* :</label>
                                    <input onChange={(e) => setNom(e.target.value)} value={nom} type="text" className="form-control" name="nom" id="nom" required />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="prenom">Prénom* :</label>
                                    <input onChange={(e) => setPrenom(e.target.value)} value={prenom} type="text" className="form-control" name="prenom" id="prenom" required />
                                </div>
                                <div className="form-group col-6 mt-5">
                                    <label htmlFor="prenom">Address :</label>
                                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" name="address" id="address" />
                                </div>
                                <div className="form-group col-6 mt-5">
                                    <label htmlFor="prenom">Email* :</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="mail" className="form-control" name="email" id="email" required />
                                </div>
                                <div className="form-group col-6 mt-5">
                                    <label htmlFor="prenom">Tél :</label>
                                    <input onChange={(e) => setTel(e.target.value)} value={tel} type="tel" className="form-control" name="tel" id="tel" />
                                </div>
                                <div className="form-group col-6 mt-5">
                                    <label htmlFor="category">Choose category :</label>
                                    <select onChange={(e) => setCategory(e.target.value)} defaultValue={'autres'} id="category" className="form-select" aria-label="Default select example">
                                        <option value="autres">autres</option>
                                        <option value="famille">Famille</option>
                                        <option value="ami">Ami</option>
                                        <option value="travail">Travail</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary ajout-contact mt-3">Ajouter</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Add;