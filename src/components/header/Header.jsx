import React from 'react';

export const Header = (props) => {

    return (
        <header className="app-header">
            <section>
                <div id="hamburger-menu" className={props.hamburgerOpen ? "open" : ""} onClick={props.hamburgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h1 className="title">TennoDex Hacking</h1>
            </section>
        </header>
    );
}