import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            {/* Tilt from npmjs.com */}
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa5"> 
                    <img src={brain} alt='logo'/> 
                </div>
            </Tilt>
        </div>

        // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    )
}

export default Logo;
