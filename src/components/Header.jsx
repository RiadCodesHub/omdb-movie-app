import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { links, SinglePage } from '../data'
import SearchForm from '../utils/SearchForm'
import { useLocation } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react';


const Header = () => {
 const location = useLocation();
 const isSinglePage = location.pathname.startsWith('/movie/');
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [searchOpen, setSearchOpen] = useState(false);

 // Desktop Header Component
const desktopHeader = () => {
return (
    <div className="hidden relative top-0 md:flex items-center lg:px-[40px] sm:px-[20px] justify-between sm:py-[30px]">
            <h1 className='text-white sm:text-[24px] md:text-[30px] font-bold '><a href="/">Popcorn Verdict</a></h1>
            <div className='flex items-center gap-8 w-1/2 justify-end'>
               { !isSinglePage && <SearchForm className="h-[50px]" />}
          <nav>
            <ul className='flex items-center text-[12px] sm:text-[14px] md:text-[16px] gap-[20px] text-white font-semibold '>
                {links.map((link) => (
                    <li key={link.path} className='border-b-2 border-transparent hover:border-white px-3 py-2'>
                        <NavLink to={link.path}>
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
          </nav>
          
    </div>
   
        </div>
)
}
 
// mobile Header Component
 const mobileHeader = () => {
    return(
        <div className='sticky top-0 md:hidden flex w-full h-auto items-center flex-col px-10 py-10'>
        <div className='flex items-center justify-between w-full'>
        <h1 className='text-white text-[20px] font-bold '><a href="/">Popcorn Verdict</a></h1>
         <div className='flex items-center gap-4'>
        <button type="button" className={`${isSinglePage ? 'hidden' : 'flex'}`} onClick={() => setSearchOpen(!searchOpen)}>{searchOpen ? <X className='text-white' /> : <Search className='text-white' size={25} />}</button>
        <button type='button' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className='text-white' /> : <Menu className='text-white' />}
        </button>
        {mobileMenuOpen && !searchOpen && (
            <div className='absolute inset-x-0 top-0 py-10 mt-30 w-[100%] bg-[var(--primary-color)] rounded-md shadow-lg z-100 transform -translate-y-[30px]'>
                <nav className='flex flex-col'>
                    {links.map((link) => (
                        <NavLink to={link.path} key={link.path} className='px-10 text-white py-2 text-[16px] font-semibold  border-b-2 border-transparent hover:border-white'>
                            {link.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        )}
         </div>
         </div>
        {searchOpen && !isSinglePage && <SearchForm searchOnMobile={true} className="mt-6 w-full h-[40px] text-sm" />}
        </div>
    )
 }


  return (
    <div className='w-full h-auto bg-[var(--primary-color)] sticky top-0 mx-auto z-100'>
        {desktopHeader()}
        {mobileHeader()}
    </div>
  )
}

export default Header