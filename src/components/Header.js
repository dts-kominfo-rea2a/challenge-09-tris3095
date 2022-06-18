// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2 className='isi'>Call a Friend</h2>
            <p>your friendly contact app</p>
        </div>
    )
}

export default Header;