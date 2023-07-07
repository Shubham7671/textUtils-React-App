import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  
    document.querySelector("body").style.backgroundColor=`${props.Mode? "grey":"white"}`

    return (
        <>
            <nav className={`navbar navbar-expand-lg p-3 mb-2 bg-${props.Mode? "dark text-white":"body-secondary"}`}>
                <div className="container-fluid ">
                    <a className={`navbar-brand ${props.Mode? "text-white":"text"}`} href="/">{props.logo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className={`nav-link active ${props.Mode? "text-white":"text"}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${props.Mode? "text-white":"text"}`} href="/">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <div className="form-check form-switch">
                                <input className="form-check-input ms-2" type="checkbox" role="switch" id="switchMode" onClick={props.checkMode}/>
                                    <label className="form-check-label" htmlFor="switchMode">Dark</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

