import {useRef, useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/images/Logo-2.png'
import { BiSearchAlt2, BiCart, BiUser, BiMenuAltLeft} from "react-icons/bi";
import { IconContext } from 'react-icons/lib';

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/'
    },
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ kiện',
        path: '/accessories'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    }
]

const Header = () => {
    const headerRef = useRef(null)
    const [openMenu, setOpenMenu] = useState(false)

    const handleScroll = () => {
        if(document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('shink')
        }
        else {
            headerRef.current.classList.remove('shink')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return ( 
        <IconContext.Provider value={{size: 26, className: "header__icon" }}>
        <header className="container header" ref={headerRef}>
            <div 
                onClick={handleToggleMenu}
                className="header__mobile__menu"
            >
                <BiMenuAltLeft/>

                 {/* show menu navigate when screen tablet / mobile  */}
                {
                    openMenu && 
                    <div className="header__mobile__menu__container" >
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key = {index} 
                                    className = "header__mobile__menu__container__item" 
                                >
                                    <Link to = {item.path}  >
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ) )
                        }
                    </div>
                }


            </div>

            <div className="header__left">
                {
                    mainNav.map((item, index) => (
                        <div
                            key = {index} 
                            className = "header__left__item" 
                        >
                            <NavLink to = {item.path}  >
                                <span>{item.display}</span>
                            </NavLink>
                        </div>
                     ) )
                }
            </div>

            <div className="header__logo">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

                <div className="header__right">
                    <div className=" header__right__item">
                        <BiSearchAlt2/>
                    </div>

                    <div className=" header__right__item">
                        <NavLink to="/cart">
                            <BiCart/>
                        </NavLink>
                    </div>
                    
                    <div className=" header__right__item">
                        <NavLink to="/user">
                            <BiUser/>
                        </NavLink>
                    </div>
                </div>
        </header>
        </IconContext.Provider>
     );
}
 
export default Header;