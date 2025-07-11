import React from 'react'
import { Link } from 'react-router-dom'

import hotelImg from '../../assets/about-1.png'
import bedroomImg from '../../assets/about-2.png'
// import skillImg from '../../assets/skills-img.png'
import element1 from '../../assets/bg-1.png'
import element2 from '../../assets/bg-2.png'
import resorts from '../../assets/feature.png'
import blog1 from '../../assets/blog-1.jpg'
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg'
import RioImg from '../../assets/skills-img.png'
// then use <img src={RioImg} ... />



const About = () => {
  return (
    <>
    {/* Page section */}
    <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-wrap text-center">
                        <div className="section-title">
                            <h2>About Us</h2>
                        </div>
                        <div className="section-wrap d-flex align-items-center justify-content-center">
                            <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                <li><Link id='abcd1' href="#">Home</Link> &nbsp; / &nbsp; <span className='fw-bold'>About</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        {/* About */}
    
        <div className="about-section my-5 py-5" id='about'>
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-6 position-relative image-wrapper">
                        <img src={hotelImg} alt="" className='img-fluid shadow-sm main-img'/>
                        <img src={bedroomImg} alt="" className='overlay-img shadow-sm p-1 bg-white'/>
                    </div>
                    <div className="col-lg-6 text-wrapper">
                        <div className="section-title about-title">
                            <span>About Us</span>
                            <h2>Most Safe & Rated <br />Hotel In Bengaluru</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus soluta dignissimos consectetur in accusantium hic magnam ea, officiis totam reiciendis culpa ducimus laudantium natus ut asperiores non fugiat porro quidem.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, asperiores consequuntur error at ab distinctio dignissimos ullam doloremque expedita suscipit doloribus enim eius sint aspernatur illum atque harum architecto sit.</p>
    
                        <div className="feature-peregraphs mt-4 mb-4">
                            <p><i className="ri-check-line"></i>24 Month / 24,000km Nationwide Warranty monotone</p>
                            <p><i className="ri-check-line"></i>28 Month / 28,000km Nationwide Warranty monotone</p>
                            <p><i className="ri-check-line"></i>Customer Rewards Program and Execellent Technology</p>
                        </div>
                        <button className="btn discover-btn mt-3">Discover More</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Progess bars */}   
        {/* starting1 */}

        <div className="rio-section py-5">
  <div className="container-fluid">
    <div className="row">
      
      {/* Left Content */}
      <div className="col-md-6 text-white p-5" style={{ backgroundColor: "#2f1c13" }}>
        <small  className="text-uppercase text-warning fw-semibold" >Rio We Use</small>
        <h2 className="fw-bold display-5 my-3">We Offer Wide<br />Selection of Hotel</h2>
        <p className="mb-5 text-light">
          Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.
        </p>

        {/* Progress Bars */}
        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Quality Production</strong><span>80%</span>
          </div>
          <div className="progress" style={{ height: "10px", background: "#ddd" }}>
            <div className="progress-bar" style={{ width: "80%", backgroundColor: "#c49364" }}></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Maintenance Services</strong><span>90%</span>
          </div>
          <div className="progress" style={{ height: "10px", background: "#ddd" }}>
            <div className="progress-bar" style={{ width: "90%", backgroundColor: "#c49364" }}></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <strong>Product Management</strong><span>70%</span>
          </div>
          <div className="progress" style={{ height: "10px", background: "#ddd" }}>
            <div className="progress-bar" style={{ width: "70%", backgroundColor: "#c49364" }}></div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-md-6 p-0">
        <img
          src={RioImg} // Replace with your local image path
          alt="Hotel Interior"
          className="img-fluid w-100 h-100 object-fit-cover"
          style={{ maxHeight: "100%" }}
        />
      </div>

    </div>
  </div>
</div>


        

           {/* Resort */}
            <div className="resort my-5 mb-0">
                <div className="container-fluid position-relative">
                    <img src={element2} className='element element2 position-absolute' alt="" />
                    <div className="row p-0 align-items-center">
                        <div className="col-lg-6 image-wrapper p-0">
                            <img src={resorts} className='img-fluid shadow-sm resort-img' alt="" />
                        </div>
                        <div className="col-lg-4 ps-5 pt-3 text-wrapper resort-content">
                            <div className="section-title about-title">
                                <span> Luxury Hotels & Resorts</span>
                                <h2>Pearl Of The Adriatic</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur possimus dolores doloribus illum repellendus reiciendis excepturi tempore atque fuga fugit?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis rerum ipsam sed harum distinctio aperiam voluptatem quo, adipisci nemo neque.</p>
                            <button className="btn discover-btn mt-3">DISCOVER MORE</button>
                        </div>
                    </div>
                </div>
            </div>

                {/* Blog */}
            
                <div className="blog py-5 position-relative">
                    <div className="container">
                        <img src={element1} className='element element1 position-absolute' alt="" />
                        <div className="row">
                            <div className="section-title text-center d-flex flex-column align-items-center">
                                <span>Our Blog</span>
                                <h2>Latest Blog & News</h2>
                                <p style={{maxWidth: '800px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus ratione! Molestiae placeat velit nisi vero, adipisci voluptatum dicta minima impedit maiores provident id reiciendis?</p>
                            </div>
                            <div className="blog-wrapper mt-5">
                                <div className="row">
                                    {/* 1 */}
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <div className="blog-item">
                                            <div className="blog-image overflow-hidden">
                                                <img src={blog1} className='img-fluid' alt="" />
                                            </div>
                                            <div className="blog-content">
                                                <div className="blog-date">
                                                    24th March 2025
                                                </div>
                                                <h4 className="mb-3">Holding tea, holding thoughts, gently unfolding stories</h4>
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus consequatur ut tempora ea.</p>
                                                <button className="blog-btn">Read More</button>
                                            </div>
                                        </div>
            
                                    </div>
                                    
                                    {/* 2 */}
                                    <div className="col-lg-4 col-md-6 mb-3">
                                        <div className="blog-item">
                                            <div className="blog-image overflow-hidden">
                                                <img src={blog2} className='img-fluid' alt="" />
                                            </div>
                                            <div className="blog-content">
                                                <div className="blog-date">
                                                    22th April 2025
                                                </div>
                                                <h4 className="mb-3">Sipping tea, sharing thoughts and little moments</h4>
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus consequatur ut tempora ea.</p>
                                                <button className="blog-btn">Read More</button>
                                            </div>
                                        </div>
            
                                    </div>
                                    {/* 3 */}
                                     <div className="col-lg-4 col-md-6 mb-3">
                                        <div className="blog-item">
                                            <div className="blog-image overflow-hidden">
                                                <img src={blog3} className='img-fluid' alt="" />
                                            </div>
                                            <div className="blog-content">
                                                <div className="blog-date">
                                                    23th May 2025
                                                </div>
                                                <h4 className="mb-3">Pouring thoughts like tea, glass to glass</h4>
                                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus consequatur ut tempora ea.</p>
                                                <button className="blog-btn">Read More</button>
                                            </div>
                                        </div>
            
                                    </div>
            
            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    </>
  )
}

export default About