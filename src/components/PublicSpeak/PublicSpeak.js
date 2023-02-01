import React,{ useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';


import './publicSpeak.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { publicSpeakData } from '../../data/publicSpeakData'
import SingleBlog from './SingleSpeak/SingleSpeak';


function PublicSpeak() {

    const { theme } = useContext(ThemeContext);


    return (
        <>
            {publicSpeakData.length > 0 && (
                <div className="speak" id="speak" style={{backgroundColor: theme.secondary}}>
                    <div className="speak--header">
                        <h1 style={{color: theme.primary}}>Public Speaking</h1>
                    </div>
                    <div className="speak--body">
                        <div className="speak--bodyContainer">
                            {publicSpeakData.slice(0, 3).reverse().map(speak => (
                                
                                <SingleBlog 
                                    theme={theme}
                                    desc={speak.description}
                                    image={speak.url}
                                    url = {speak.url}
                                    key={speak.id}
                                    id={speak.id}
                                />
                            ))}
                        </div> 


                    </div>
                </div>
            )}

        </>
    )
}


export default PublicSpeak
