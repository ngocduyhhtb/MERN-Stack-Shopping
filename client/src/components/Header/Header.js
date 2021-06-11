import React from 'react';
import {
    AiOutlineHeart,
    AiOutlinePhone,
    AiOutlineUser
} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderTop className="header-top text-secondary-100">
            <div className="header-container m-auto w-3/4 flex items-center h-full border-b border-header">
                <div className="header-left">
                    <ul className="top-menu-left list-none flex items-center uppercase">
                        <li className="hidden lg:flex lg:items-center hover:text-primary duration-200 cursor-pointer mr-5 font-light">
                            <AiOutlinePhone className="mr-1"/>
                            call: +0123 456 789
                        </li>
                        <li className="hover:text-primary duration-200 cursor-pointer mr-5 font-light">
                            <Link to="/about">
                                about us
                            </Link>
                        </li>
                        <li className="hover:text-primary duration-200 cursor-pointer font-light">contact us</li>
                    </ul>
                </div>
                <div className="header-right ml-auto">
                    <ul className="top-menu-right flex items-center uppercase">
                        <li className="hover:text-primary duration-200 cursor-pointer font-light">
                            <Link to="/wishlist" className="flex items-center">
                                <AiOutlineHeart className="mr-1"/>
                                my wishlist
                            </Link>
                        </li>
                        <li className="hover:text-primary duration-200 cursor-pointer ml-5 font-light">
                            <Link to="/login" className="flex items-center">
                                <AiOutlineUser className="mr-1"/>
                                login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </HeaderTop>
    );
};

export default Header;

const HeaderTop = styled.div`
  font-size: 14px;
  height: 39px;
`