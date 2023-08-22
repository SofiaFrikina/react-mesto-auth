import headerLogo from '../images/header__image.svg';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <img src={headerLogo} className="header__logo" alt="Логотип" />
            <Routes>
                <Route path="/sign-up" element={<Link to="/sign-in" className="header__link">Войти</Link>} />
                <Route path="/sign-in" element={<Link to="/sign-up" className="header__link">Регистрация</Link>} />
                <Route path="/" element={
                    <>
                        <div className="header__email">{props.userEmail}</div>
                        <button onClick={props.onSignOut} className="header__exit">Выйти</button>
                    </>} />
            </Routes>
        </header>
    )
}

export default Header;