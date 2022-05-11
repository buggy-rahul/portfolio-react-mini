import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.facebook.com/officialcoderrahul/" target="_blank" rel="noreferrer"><BsFacebook/></a>
            <a href="https://github.com/coder-with-rahul" target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/coder-rahul/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </div>
    )
}

export default HeaderSocials