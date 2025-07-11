import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../../assets/blog-1.jpg'
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg'

const Blogs = () => {
    return (
        <>
           {/* Page section */}
    <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-wrap text-center">
                        <div className="section-title">
                            <h2>Blogs</h2>
                        </div>
                        <div className="section-wrap d-flex align-items-center justify-content-center">
                            <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                <li><Link  id='abcd' href="#">Home</Link> &nbsp; / &nbsp; <span className='fw-bold'>Our Blogs</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Blog Section */}

    <div className="container py-5">
        <div className="row">
            <div className="col-lg-8 blog-left">

                {/* blog post-1 */}
                <div className="blog-page-item mb-3">
                    <div className="blog-image overflow-hidden">
                        <img src={blog1} alt="blog-imgage" className='img-fluid' />
                    </div>
                    <div className="blog-content">
                        <div className="blog-date">
                            22th April 2022
                        </div>
                        <h4 className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati distinctio hic.</p>
                        <button className="blog-btn">
                            Read More
                        </button>

                    </div>
                </div>

                {/* blog post-2 */}

                   <div className="blog-page-item mb-3">
                                                <div className="blog-image overflow-hidden">
                                                    <img src={blog2} className='img-fluid' alt="" />
                                                </div>
                                                <div className="blog-content">
                                                    <div className="blog-date">
                                                        23th May 2025
                                                    </div>
                                                    <h4 className="mb-3">Holding tea, holding thoughts, gently unfolding stories</h4>
                                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus consequatur ut tempora ea.</p>
                                                    <button className="blog-btn">Read More</button>
                                                </div>
                                            </div>

                                            {/* blog post-3 */}

                                             <div className="blog-page-tem mb-3">
                                                                            <div className="blog-image overflow-hidden">
                                                                                <img src={blog3} className='img-fluid' alt="" />
                                                                            </div>
                                                                            <div className="blog-content">
                                                                                <div className="blog-date">
                                                                                    22th June 2025
                                                                                </div>
                                                                                <h4 className="mb-3">Holding tea, holding thoughts, gently unfolding stories</h4>
                                                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus consequatur ut tempora ea.</p>
                                                                                <button className="blog-btn">Read More</button>
                                                                            </div>
                                                                        </div>


            </div>

            <div className="col-lg-4">
                <div className="mb sidebar-widget widget">
                    <h5>Search</h5>
                    <div className="search-input-group position-relative">
                        <input type="text" className='form-control' placeholder='Search...' />
                        <button className="btn-dark">Search</button>
                    </div>
                </div>
                <div className="mb sidebar-widget widget">
                    <h5>Follow Us</h5>
                    <div className="d-flex gap-3 sidebar-widget-icon">
                        <i className='bi bi-twitter'></i>
                        <i className='bi bi-facebook'></i>
                        <i className='bi bi-instagram'></i>
                        <i className='bi bi-pinterest'></i>
                        <i className='bi bi-behance'></i>
                    </div>
                </div>

                <div className="mb-4 sidebar-widget widget">
                    <h5>Categories</h5>
                    <ul className="list-unstyled d-flex flex-column w-100 gap-2 categories-wrap">
                        <li>
                            Branding
                            <span>(4)</span>
                        </li>
                        <li>
                            Corporate
                            <span>(3)</span>
                        </li>
                        <li>
                            Design
                            <span>(2)</span>
                        </li>
                        <li>
                            Gallery
                            <span>(5)</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-4 sidebar-widget widget">
                    <h5>Recent Posts</h5>
                    <ul className="list-unstyled">
                        <li className="border-bottom py-2">User Experience Pyschology & Performance <br /> <small>August 19,2024</small></li>
                        <li className="border-bottom py-2">Monthly Web Development Up Cost Of Python <br /> <small>May 23,2024</small></li>
                        <li className="border-bottom py-2">There r many Variaton Passages Of Like Available <br /> <small>June 22,2024</small></li>
                    </ul>
                </div>

                <div className="mb-4 sidebar-widget widget">
                    <h5>Tag</h5>
                    <div className="d-flex flex-wrap gap-2">
                        {['App','Branding','Corporate','Design','Gallery','Video','Web Design'].map(tag =>(
                            <span key={tag} className="border small tag fw-normal p-2">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Blogs
