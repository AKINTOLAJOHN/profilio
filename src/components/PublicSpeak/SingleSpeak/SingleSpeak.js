import React from 'react'
import Fade from 'react-reveal/Fade';


import placeholder from '../../../assets/png/placeholder.png'
import './SingleSpeak.css'

function SingleBlog({ theme, title, desc, image, url, id }) {
  
    return (
        <Fade bottom>
            <a className="singleSpeak" key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.primary400}}>
                <div className="singleSpeak--image" style={{backgroundColor: theme.secondary}}>
                    {/* <div class="ratio ratio-16x9"> */}
                <iframe src={image ? image : placeholder} alt={title}  title="YouTube video" allowfullscreen></iframe>
                    {/* </div> */}



                </div>
                <div className="singleSpeak--body">
                    <h3 style={{color: theme.secondary}}></h3>
                    <h6 style={{color: theme.secondary}}><a href={url}>{desc}</a></h6>
                    <p style={{color: theme.secondary}}>{title}</p>
                </div>
            </a>
        </Fade>
    )
}

export default SingleBlog
