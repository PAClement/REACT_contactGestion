import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataCard from '../components/DataCard';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import UserCard from '../components/UserCard';
import GraphChart from '../components/GraphChart';


const Board = () => {

    const [data, setData] = useState([]);
    const [isCharge, setIsCharge] = useState(false);


    useEffect(() => {

        axios.get('http://localhost:3004/contacts')
            .then((res) => {
                setData(res.data);

                setIsCharge(true);
            });

    }, []);


    let edited = 0;

    data.map((target) => {
        if (target.isModify) {
            edited++;
        }
    });

    const [chartData, setChartData] = useState({

        labels: ["Autres", "Amis", "Famille", "Travail"],
        datasets: [
            {
                label: "Price in USD",
                data: [45, 85, 78, 78],
                backgroundColor: [
                    'rgb(0, 184, 255)',
                    'rgb(214, 0, 255)',
                    'rgb(111, 0, 0)',
                    'rgb(82, 194, 52)'
                ]
            },
        ],
    });


    return (
        <>
            <Header />
            <main>
                <Navigation />
                <div className="contain">
                    <div className="row">
                        <DataCard name="Nombre d'utilisteurs" value={data.length} />
                        <DataCard name="Nombre d'utilisteurs modifiés" value={edited} />
                    </div>
                    <div className="row mt-3">
                        {isCharge ? (
                            <>
                                <UserCard name="Premier Utilisateur" tab={data[0]} />
                                <UserCard name="Dernier Utilisateur" tab={data[data.length - 1]} />
                                <div className="col-6">
                                    <h2 className="mb-5 text-left">Nombre de catégorie</h2>

                                    <div className="graphic">
                                        <GraphChart chartData={chartData} />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="col-8 mt-3">
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Board;