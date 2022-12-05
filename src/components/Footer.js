import React from 'react'
import element from '../img/element.png'
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { ImDribbble } from "react-icons/im";
import { BsGithub } from "react-icons/bs";



export default function Footer() {
  return (
    <footer className="footer-div px-20 py-12">
      <div className='footer-container flex gap-[109px] sm:block md:block lg:flex'>
        <img className='absolute mt-[-27px] ml-[-35px]' src={element} />
        <div className='footer-container-div w-[864px] h-[234px] bg-button-title rounded-[30px] px-12 py-20 sm:w-[480px] lg:w-[864px]'>
          <h5 className="text-xl font-semibold text-regal-blue">Sign Up to Receive Product Updates and More</h5>
          <p className="text-regal-blue text-base mt-4">youremail@gmail.com</p>
        </div>
        <div className='footer-contact-title flex items-center text-white'>
          <div>
          <h3 className="text-lg mb-4 font-semibold sm:mt-10 md:mt-0 lg:mt0">Office</h3>
          <p className="text-base leading-7">545, Street 11, Block F California, U.S.A</p>
          </div>
          <div className='footer-contact-title'>
          <h3 className="text-lg mb-4 font-semibold">Contact</h3>
          <p className="text-base mb-2">+92 302 300 3215</p>
          <p className="text-base">ouradress@email.com</p>
          </div>
        </div>
      </div>
      <div className='footer-text flex items-center justify-between text-text-title mt-[52px]'>
          <h6>2022. All Rights Reserved</h6>
          <h6>Terms & Conditions Privacy</h6>
          <div>
            <ul className='flex gap-7'>
              <li><FaTwitter className="w-[21px] h-[21px]"/></li>
              <li><BsFacebook className="w-[21px] h-[21px]"/></li>
              <li><ImDribbble className="w-[21px] h-[21px]"/></li>
              <li><BsGithub className="w-[21px] h-[21px]"/></li>
            </ul>
          </div>
      </div>
    </footer>
  )
}
