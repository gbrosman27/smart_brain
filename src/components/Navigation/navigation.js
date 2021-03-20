import React from 'react';


// Change navigation based on if user is signed in or not.
const Navigation = ({ onRouteChange, isSignedIn }) => {
        if(isSignedIn){
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* Styled using tachyons. Imported to index.js */}
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p> 
            </nav>)
        } 
        else{
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p> 
                </nav>)
        }

}
    

export default Navigation;