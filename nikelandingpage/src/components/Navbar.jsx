import { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='md:flex justify-between items-center max-container py-4 md:px-10 px-7'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
          />
        </a>
        <div onClick={()=>setOpen(!open)} className="absolute right-8 top-12 cursor-pointer md:hidden w-7 h-7">
          {
            open ? <XMarkIcon/> : <Bars3BottomRightIcon/>
          }
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-16 ${open ? 'top-16' : 'top-[-490px]'}`}>
          {navLinks.map((item) => (
            <li key={item.label} className='font-montserrat md:md-8 md:my-0 my-7 text-lg hover:text-orange-500'>
              <a
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        </ul>
        
      </nav>
    </header>
  );
};

export default Nav;