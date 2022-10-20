import React from 'react';
import DropDown from '../../components/DropDown/DropDown';

/**
 * Affichage de la page A propos
 * @returns 
 */
const About = () => {
    return (
            <main>
                <section className='banner about'>
                </section>

                <section className="section-dropdown about">

                    <article>
                        <DropDown details="Les annonces postées sur Kasa garantissent une faibilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." label="Fiabilité" type="text" />
                    </article>
                    <article>
                        <DropDown details="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." label="Respect" type="text" />
                    </article>
                    <article>
                        <DropDown details="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.." label="Service" type="text" />
                    </article>
                    <article>
                        <DropDown details="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." label="Sécurité" type="text" />
                    </article>
                    
                    
                </section>
            </main>
    );
};

export default About
