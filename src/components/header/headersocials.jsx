import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/george-hill-web-developer/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/georgeophill" target="_blank"><FaGithub/></a>
      <a href="https://www.upwork.com/freelancers/~01c386165367a68626" target="_blank"><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials
