import React, {useState} from 'react';
import {
    AiOutlineMenu,
    BsChevronDown,
    AiOutlineSearch,
    AiFillShopping
} from "react-icons/all";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
    const [showSearchForm, setShowSearchForm] = useState(false);
    const toggleSearchForm = () => {
        setShowSearchForm(!showSearchForm);
    }
    return (
        <NavBarContainer className="nav-wrapper">
            <div className="nav-container w-3/4 m-auto h-full flex items-center">
                <div className="container-left flex items-center">
                    <button className="block lg:hidden mobile-menu-toggle focus:outline-none text-2xl mr-2"><AiOutlineMenu/></button>
                    <Link exact to="/" className="logo">
                        <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="Logo" className="w-32 h-8"/>
                    </Link>
                    <nav className="main-nav hidden lg:block">
                        <MegaMenu className="mega-menu uppercase flex items-center">
                            <li className="text-sm cursor-pointer">
                                <Link exact to="/"
                                      className="flex items-center pr-8 pl-16 py-10 hover:text-primary duration-200">
                                    home
                                    <BsChevronDown className="ml-1"/>
                                </Link>
                            </li>
                            <Li className="text-sm flex relative cursor-pointer">
                                <Link exact to="/shop"
                                      className="flex items-center pr-8 pl-8 py-10 hover:text-primary duration-200">
                                    shop
                                    <BsChevronDown className="ml-1"/>
                                </Link>
                                <ul className="dropdown absolute bg-gray-50 top-20 left-0 right-0 pl-8 overflow-auto w-44 shadow-sm hidden transition duration-200 transform animate-fade-in-up">
                                    <li className="py-6 text-xs font-normal hover:text-primary duration-200">Drop down
                                        1
                                    </li>
                                    <li className="py-6 text-xs font-normal hover:text-primary duration-200">Drop down
                                        2
                                    </li>
                                    <li className="py-6 text-xs font-normal hover:text-primary duration-200">Drop down
                                        3
                                    </li>
                                </ul>
                            </Li>
                            <li className="text-sm flex hover:text-primary duration-200">
                                <Link exact to="/products" className="flex items-center pr-8 pl-8 py-10">
                                    product
                                    <BsChevronDown className="ml-1"/>
                                </Link>
                            </li>
                        </MegaMenu>
                    </nav>
                </div>
                <div className="container-right ml-auto flex items-center">
                    <div className="header-search flex items-center">
                        {
                            showSearchForm ? <input
                                className="h-8 w-64 m-auto border border-solid border-gray-600 focus:outline-none text-sm animate-fade-in-left"
                                type="text" name="search" id="female"/> : ""
                        }
                        <button
                            className="search-button m-auto flex items-center mt-1.5 focus:outline-none ml-6 hover:text-primary duration-200"
                            onClick={toggleSearchForm}
                        >
                            <AiOutlineSearch/>
                        </button>
                    </div>
                    <div className="cart cart-drop-down pl-6">
                        <div className="cart-wrapper hover:text-primary duration-200">
                            <AiFillShopping className="cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </NavBarContainer>
    );
};

export default NavBar;
const NavBarContainer = styled.div`
  .logo {
    display: block;
    margin-top: 2.55rem;
    margin-bottom: 2.95rem;
    flex-shrink: 0;
    min-height: 25px;
  }
`
const MegaMenu = styled.ul`
  a {
    font-weight: 600 !important;
  }
`
const Li = styled.li`
  &:hover .dropdown {
    display: block !important;
  }
`