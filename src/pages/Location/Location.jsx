import React from 'react';
import { useParams } from 'react-router-dom';
import DropDown from '../../components/DropDown/DropDown';
import Star from '../../components/Star/Star';
import Tag from '../../components/Tag/Tag';
import Slide from '../../components/Slide/Slide';

/**
 * Affichage du détail du logement sélectionné
 * @param {array} locationDatas (from json)
 * @returns 
 */
const Location = ({ datas }) => {

    //identifiant du logement
    const { id } = useParams()
    const dataLocation = datas.filter((location) => location.id === id)[0]
    
    return (
        <main>
            <Slide pictures = {dataLocation.pictures} title = {dataLocation.title} />

            <section className='section-container'>
                <div className='part-left'>
                    <h1>{dataLocation.title}</h1>
                    <p>{dataLocation.location}</p>
                    <div>
                        <Tag tagsValue = {dataLocation.tags} />
                    </div>
                </div>
                <div className='part-right'>
                    <div className='host'>
                        <span className="host-name">{dataLocation.host.name}</span>
                        <img src = {dataLocation.host.picture} alt = {dataLocation.host.name} width="20"/>
                    </div>
                    <Star rating={dataLocation.rating}/>
                </div>
            </section>

            <section className="section-dropdown">
                <article>
                    <DropDown details={dataLocation.description} label="Description" type="text" />
                </article>
                <article>
                    <DropDown details={dataLocation.equipments} label="Equipements" type="list" />
                </article>    
            </section>
        </main>
    );
};

export default Location;