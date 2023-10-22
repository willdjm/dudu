import Image from 'next/image';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Linki from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FaLinkedin, FaPhone } from "react-icons/fa";
import { PiFacebookLogo } from 'react-icons/pi';

export function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div id='home'>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:block">
              {/* LOGO */}
                <Link className='cursor-pointer' to="/" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>
                  <picture>
                    <img className='w-52 lg:w-60' src="/6.png" alt="" />
                  </picture>
                </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <div className="h-screen md:h-auto md:items-end items-center justify-center md:grid gap-5">
              <ul className='md:flex md:items-center md:justify-end gap-5'>
                <li className="text-xl text-emerald-500 py-2 px-6 md:py-0 md:px-0 text-center border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <a className='flex items-center justify-center gap-0.5 cursor-pointer text-lg' href="https://wa.me/551142930396" target='_blank' rel="noreferrer"><FaWhatsapp className='cursor-pointer' size={25} />(11) 4293-0396</a>
                </li>
                <li className="text-xl text-emerald-500 py-2 px-6 md:py-0 md:px-0  text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <a className='flex items-center justify-center cursor-pointer text-lg' href="#" target='_blank' aria-label='acesso para a página do intagram' rel="noreferrer"><AiOutlineInstagram size={30} /></a>
                </li>
                <li className="text-xl text-emerald-500 py-2 px-6 md:py-0 md:px-0  text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <a className='flex items-center justify-center cursor-pointer text-lg' href="#" target='_blank' aria-label='acesso para a página do linkedin' rel="noreferrer" ><PiFacebookLogo size={30} /></a>
                </li>
                </ul>
                <ul className='md:flex md:items-center md:justify-end gap-10'>
                <li className="text-xl text-emerald-500 py-2 px-6 md:py-0 md:px-0 text-center  border-b-2 md:border-b-2 md:border-opacity-0 hover:border-emerald-500 hover:border-b-2  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link className='cursor-pointer' to="sobre" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Sobre</Link>
                </li>
                <li className="text-xl text-emerald-500 py-2 px-6 md:py-0 md:px-0 text-center  border-b-2 md:border-b-2 md:border-opacity-0 hover:border-emerald-500 hover:border-b-2  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link className='cursor-pointer' to="serviços" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Serviços</Link>
                </li>
                <li className="text-xl text-emerald-500 py-2 px-6 md:py-0 md:px-0 text-center  border-b-2 md:border-b-2 md:border-opacity-0 hover:border-emerald-500 hover:border-b-2  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link className='cursor-pointer' to="contato" spy={true} smooth={true} offset={-100} duration={500} delay={100} onClick={() => setNavbar(!navbar)}>Contato</Link>
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
