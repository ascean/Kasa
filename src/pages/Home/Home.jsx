import React from 'react';
import locationDatas from '../../assets/logements.json'
import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <div>

            <main>
                <section className='banner'>
                    <div className="bg-black"></div>
                    <h1>Chez vous, partout et ailleurs</h1>
                </section>

                <section className='card-wrapper'>
                    {
                        locationDatas && locationDatas.map(location => {
                            return (
                                <Card key={location.id} location={location} />
                                )
                            })
                        }
                </section>
            </main>
        </div>
    );
};

export default Home;