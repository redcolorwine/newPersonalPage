import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cmedia from './header.module.css'

const Header = (props) => {
    // Навигационное меню приложения. Реализовано при помощи NavLink 
    // который добавит в адресную строку нужные данные, 
    // которые в последующем попадут в Routes

    return (
        <div className={cmedia.header}>
            <p>redcolorwine</p>
            <ul className={cmedia.navmenu}>
                <li><NavLink id="1" to="/" className={({ isActive }) => `${isActive ? cmedia.active : ''}`}>HOME</NavLink></li>
                <li><NavLink id="2" to="/about" className={({ isActive }) => `${isActive ? cmedia.active : ''}`}>ABOUT ME</NavLink></li>
                <li><NavLink id="3" to="/blog" className={({ isActive }) => `${isActive ? cmedia.active : ''}`}>BLOG</NavLink></li>
                <li><NavLink id="4" to="/contacts" className={({ isActive }) => `${isActive ? cmedia.active : ''}`}>CONTACTS</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;