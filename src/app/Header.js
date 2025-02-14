import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <div className='navebar-container sticky-top'>
        <nav className='navbar navbar-expand-lg shadow bg-white '>
            <div className='container'>
            <div className="logo-container">
            <Link className="nav-link active" aria-current="page" href="/"><Image src="/assets/nexuspatches.webp" width={150} height={50} alt="Nexus Patches UK" /></Link>
            </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#top-navbar" aria-controls="top-navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="offcanvas offcanvas-end p-3" tabIndex="-1" id="top-navbar" aria-labelledby="top-navbarLabel">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#top-navbar" aria-controls="top-navbar">
                    <div className='d-flex justify-content-between'>
                        <div className="logo-container"></div>
                        <span className="navbar-toggler-icon"></span>
                    </div>
                </button>
               
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Custom Patches</Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="/">Patches Types</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/custom/embroidered-patches">Embroidered Patches</Link></li>
                                <li><Link className="dropdown-item" href="/custom/pvc-patches">PVC Patches</Link></li>
                                <li><Link className="dropdown-item" href="/custom/printed-patches">Printed Patches</Link></li>
                                <li><Link className="dropdown-item" href="/custom/woven-patches">Woven Patches</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="/">Patches Styles</Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link 
                                        className="nav-link" 
                                        href="/custom-police-patches/">Police Patches
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="nav-link" 
                                        href="/custom-military-patches/">Military Patches
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="nav-link" 
                                        href="/custom-velcro-patches/">Velcro Patches
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="nav-link" 
                                        href="/custom-motorcycle-patches/">Motorcycle Patches
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="nav-link" 
                                        href="/custom-sports-patches/">Sports Patches
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="nav-link" 
                                        href="/custom-name-patches/">Name Patches
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" href="/about-us">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact-us">Contact</Link>
                        </li>
                    </ul>

                    
            </div>
            <div className='quote-btn'>
                        <span><Link href="/order-now">Order Now</Link></span>
                    </div>
            

                </div>

        </nav>
    </div>
    </>
  )
}

export default Header
