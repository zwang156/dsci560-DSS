import React from 'react';
import { Link } from 'react-router-dom'
import smile from '../resource/smile.png';

export default function Welcome() {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Link to="/map">
                <img src={smile} alt='logo' style={{ display: 'block', margin: 'auto' }}/>
            </Link>
        </div>
        
    )
    
}