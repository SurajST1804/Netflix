import React from 'react'

const Header = () => {
    return (
        <div className="Header">
            <img src="netflix.svg" alt="logo"/>
            
            <ul>
                <li><a href="#" className="english"><i class="fas fa-globe"></i>English<i class="fas fa-caret-down"></i></a></li>
                <li><a href="#" className="signin">Sign In</a></li>
            </ul>
            
        </div>
    )
}

export default Header
