import React from 'react';

const Navigation = () => {
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        {/* Styled using tachyons. Imported to index.js */}
        <p className='f3 link dim black underline pa3 pointer'>Sign Out</p> 
    </nav>
    )
}

export default Navigation;