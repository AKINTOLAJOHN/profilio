import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './publication.css'
import EducationCard from './pubicationCard';

import { publicationData } from '../../data/publicationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Publications</h1>
                    {publicationData.map(pub => (
                        <EducationCard 
                            key={pub.id}
                            id={pub.id}
                            name ={pub.name}
                            course={pub.course}
                            startYear={pub.Year}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
