import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import User from '../components/User';

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {


        axios.get('http://localhost:3004/contacts')
            .then((res) => setData(res.data));


    }, []);



    return (
        <>
            <Header />

            <main>
                <Navigation />
                <div className="contain">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#id</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                                <th scope="col">Modifié le</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((target) => (
                                <User user={target} key={target.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export default List;