import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideBar = (props) => {
    return (
        <>
            {
                props.open &&
                <div className="full-page opacity80" onClick={props.onItemClick}></div>
            }
            <div id="sidebarMenu" className={props.open ? "open" : ""}>
                <ul className="sidebarMenuInner">
                    <li><span>Practice your Hacking skills Tenno</span></li>
                    <li><NavLink to="/" exact={true} activeClassName='is-active' onClick={props.onItemClick}>Home</NavLink></li>
                    <li><NavLink to="/corpus" activeClassName='is-active' onClick={props.onItemClick}>Corpus</NavLink></li>
                    <li><NavLink to="/grineer" activeClassName='is-active' onClick={props.onItemClick}>Grineer</NavLink></li>
                    <li><a href="https://vanila.io" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://instagram.com/plavookac" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </>
    );
}