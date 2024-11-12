import {close,menu,logo} from '../assets';
import {navLinks} from '../constants';
import { useState } from 'react';


const Nav = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <header className='w-full absolute z-10 top-0'>
      <nav className="flex flex-1 justify-between
            items-center mx-[5%] max-container sm:py-4 py-8 sm:px-6 px-3" >
         <a href='/'>
         <img 
            src={logo} 
            alt="hoobank logo"
            className='w-[124px] h-[32px]' 
         />
         </a>
         <ul className={`text-white sm:flex hidden
                  gap-9 lg:gap-11 items-center 
                text-xl text-normal leading-normal cursor-pointer`}>
            {navLinks.map((link,index)=>(
               <li key={link.label} 
                className={`font-poppins cursor-pointer 
                     ${index===navLinks.length-1 ? 'mr-0':'mr-10'}`}>
                 <a href={link.href}>
                     {link.label}
                 </a>
              </li>
          ))}
         </ul>
         <div className="sm:hidden cursor-pointer">
           
                <img 
                    src={toggle ? close:menu} 
                    alt="hamburger menu"
                    height={25}
                    width={25}
                    className='object-contain'
                    onClick={()=>setToggle((prev)=>!prev)}
                />
               
           
              <div className={`${toggle ? 'flex':'hidden'}
                    min-w-[100px] top-20 mx-6 bg-black-gradient
                    absolute rounded-lg right-0 sidebar py-2 `}>
                    <ul className='flex flex-1 flex-col items-start pl-3
                       gap-2 py-3 px-2 cursor-pointer'>
                    {navLinks.map((link)=>(
                          <li key={link.label} className='list-none
                           text-white font-monserrat text-xl'>
                            <a href={link.href}>
                            {link.label}
                            </a>
                               
                          </li>
                    ))} 
                  </ul>   
             </div> 
         </div>
         
      </nav> 
    </header>
  )
}

export default Nav;