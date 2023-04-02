import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <h2 className='text-center text-7xl mt-3 text-sky-500 mb-3'>Price Option</h2>
            <nav>
                <Navigation></Navigation>
            </nav>
        </div>
    );
};

export default Header;