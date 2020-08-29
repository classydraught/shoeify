import React from 'react';
const Header = (props) => {
    return (
        <>
            <header className="hero">
                <div className="container spacing">
                    <h1 className="primary-title">
                        Amazing shoes at an amazing price
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam perspiciatis facilis beatae laudantium
                    quidem enim sit sequi!</p>
                    <a href="/" className="btn">See what we have</a>
                </div>
            </header>
        </>
    )
}

export default Header;
