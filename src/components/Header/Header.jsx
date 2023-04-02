import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <nav className='mt-5'>
                <Navigation></Navigation>
            </nav>
            <h2 className='text-center text-7xl mt-2 text-sky-500 mb-5'>DATA ANALYSIS</h2>
        </div>
    );
};

export default Header;