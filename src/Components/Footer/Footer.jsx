import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
                        <div className="footer-widget mb-3">
                            <a href="#" className="logo">
                                Luxe<span>Hub</span>
                            </a>
                        </div>
                        <div className="f-content">
                            <ul>
                                <li className='mb-3'>
                                    <i className="ri-phone-line"></i>
                                    <span>1800=121-3637 <br />+9-7052-101-768</span>
                                </li>
                                <li className='mb-3'>
                                    <i className="ri-mail-line"></i>
                                    <span>info@example <br />info@example</span>
                                </li>
                                <li className='mb-3'>
                                    <i className="ri-map-pin-line"></i>
                                    <span>20/plot No. 20, 5th phase, <br />RMK Lyout, Bengaluru</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-xl-2 col-lg-2 col-sm-6 mb-3">
                        <div className="f-widget-title">
                            <h2 className="fs-3">Our Links</h2>
                        </div>
                        <div className="footer-link">
                            <ul className="p-0 d-flex flex-column gap-3">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-sm-6 mb-3">
                        <div className="f-widget-title">
                            <h2 className="fs-3">Our Services</h2>
                        </div>
                        <div className="footer-link">
                            <ul className="p-0 d-flex flex-column gap-3">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-sm-6 mb-3">
                        <div className="f-widget-title">
                            <h2 className="fs-3">Subscribe To Our Newsletter</h2>
                        </div>
                        <div className="footer-link">
                            <div className="subscribe position-relative">
                                <form className='w-100 position-relative'>
                                    <input type="text" placeholder='Your Email...' className='w-100' />
                                    <button className="header-btn">
                                        <i className="fa-solid fa-location-arrow"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>

        <div className="copyright-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 copyright-text">
                        Copyright Ⓒ 2025. All Rights Reserved By <a href="#">Sathya</a>
                    </div>
                    <div className="col-lg-6 col-md-6 text-right">
                        <div className="footer-social">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer