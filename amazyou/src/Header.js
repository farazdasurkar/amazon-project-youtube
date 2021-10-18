import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input className="header__searchINput" type="text" />
                <SearchIcon className="header__searchIcon" />
                {/* LOGO */}

            </div>
            <div className="header_nav">
                <div className='header__option'>
                    <span className="header__optionlineone">Hello Guest</span>
                    <span className="header__optionlinetwo">Sign IN</span>
                </div>

                <div className='header__option'>
                    <span className="header__optionlineone">Returns</span>
                    <span className="header__optionlinetwo">& order</span>
                </div>

                <div className='header__option'>
                    <span className="header__optionlineone">Your</span>
                    <span className="header__optionlinetwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />

                        <span className="header__optionlinetwo header__basketCount ">0</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
