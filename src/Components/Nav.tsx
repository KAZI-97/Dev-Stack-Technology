// import React from 'react';
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className='flex justify-around items-center mt-4 mb-24'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex gap-4'>
                <a href="#" className='plus-jakarta-sans'><span className='text-[#DB2777]'>Home</span></a>
                <a href="#" className='plus-jakarta-sans'>Technologies</a>
                <a href="#" className='plus-jakarta-sans'>Projects</a>
                <a href="#" className='plus-jakarta-sans'>About</a>
                <a href="#" className='plus-jakarta-sans'>Contact</a>
            </div>
                 
            <div className='flex gap-3'>
                <button>Sign In </button> 
                <button className="btn btn-active btn-secondary rounded-3xl w-24 h-10">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;