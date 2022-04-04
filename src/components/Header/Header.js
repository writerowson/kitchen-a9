import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLimk/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='mt-5 p-5'>
                <CustomLink to="/home">Home      </CustomLink>
                <CustomLink to="/review">Review      </CustomLink>
                <CustomLink to="/dashboard">Dashboard    </CustomLink>
                <CustomLink to="/blog">Blog      </CustomLink>
                <CustomLink to="/about">About      </CustomLink>

            </nav>
        </div>
    );
};

export default Header;