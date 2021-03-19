// g3d1tc4ay053
// API 210d2a156ea6429681382204606643d7
import React from 'react';
import './facerecognition.css';


const FaceRecognition = ({ box, imageUrl }) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div className='bounding_box' 
                style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                </div>
            </div>
        </div>
    )
}

// Sample Pic
// https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI
// https://api.time.com/wp-content/uploads/2020/02/Brad-Pitt-Leonardo-DiCaprio.jpg

export default FaceRecognition;