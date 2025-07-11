import React from 'react'

import checkIcon from './../../assets/check-icon.png'
import closeIcon from './../../assets/xbox-x.png'
import userIcon from './../../assets/users-icon.png'
import babyIcon from './../../assets/baby-icon.png'
import roomIcon from './../../assets/room-icon.png'
import hotelImg from './../../assets/about-1.png'
import bedroomImg from './../../assets/about-2.png'
import explore1 from './../../assets/explore-icon-1.png'
import explore2 from './../../assets/explore-icon-2.png'
import explore3 from './../../assets/explore-icon-3.png'
import explore4 from './../../assets/explore-icon-4.png'
import explore5 from './../../assets/explore-icon-5.png'
import explore6 from './../../assets/explore-icon-6.png'
import element1 from './../../assets/bg-1.png'
import element2 from './../../assets/bg-2.png'

import singleServiceIcon01 from './../../assets/option-icon-1.png'
import singleServiceIcon02 from './../../assets/option-icon-3.png'
import singleServiceIcon03 from './../../assets/option-icon-4.png'
import singleServiceIcon04 from './../../assets/option-icon-5.png'
import singleServiceIcon05 from './../../assets/option-icon-6.png'

// <a onClick={() => handleClick(Room.id)}>Book Now</a></li>


//Data
import Data from './../../Data.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'

import resorts from './../../assets/feature.png'
import user1 from './../../assets/test-1.png'
import user2 from './../../assets/test-2.png'
import user3 from './../../assets/test-3.png'
import quote from './../../assets/quote.png'

import bookingImg from './../../assets/Bookings.png'
import playVideo from './../../assets/play-btn.png'
import blog1 from './../../assets/blog-1.jpg'
import blog2 from './../../assets/blog-2.jpg'
import blog3 from './../../assets/blog-3.jpg'
import brand1 from './../../assets/logo1.png'
import brand2 from './../../assets/logo2.png'
import brand3 from './../../assets/logo3.png'
import brand4 from './../../assets/logo4.png'
import brand5 from './../../assets/logo5.png'



const Index = () => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/RoomsDetails/${id}`)
    }





  return (
    <>
    <Nav/>
    
        {/* Hero */}
    <header className="pt-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="hero-content">
                        <h1>Enjoy A Luxuary Experience</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi praesentium repudiandae dolore id magni excepturi labore laudantium eum in?</p>
                        <button className="btn">Visit Us</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="booking-form bg-white p-5 rounded">
                        <h2>Book A Room</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="booking-box">
                                    <p><img src={checkIcon} alt="" /> Check In Date</p>
                                    <input type="date" />
                                </div>
                            </div>

                           <div className="col-md-6">
                                <div className="booking-box">
                                    <p><img src={closeIcon} alt="" /> Check In Date</p>
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="booking-box">
                                <p><img src={userIcon} alt="" /> Adults</p>
                                    <select className='w-100'>
                                        <option value="Adults">Adults</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="booking-box">
                                <p><img src={babyIcon} alt="" /> Child</p>
                                    <select className='w-100'>
                                        <option value="Child">Child</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                            </div>

                            </div>

                            <div className="col-md-6">
                                <div className="booking-box">
                                <p><img src={roomIcon} alt="" /> Room</p>
                                    <select className='w-100'>
                                        <option value="Room">Room</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                            </div>

                            </div>



                        </div>

                        <button className='btn mt-5 chechk-btn'>CHECK AVAILABILITY</button>
                    </div>
                </div>
            </div>
        </div>
    </header>


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

    {/* Explore */}

    <div className="explore my-5 py-4 mb-0 position-relative">
        <div className="container">
            <img src={element1} className='element element1 position-absolute' alt="" />
            <div className="row">
                <div className="section-title text-center explore-title d-flex flex-column align-items-center">
                    <span>Explore</span>
                    <h2>The Hotel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda, odit consequuntur vero cumque quam accusantium consequatur iste natus tenetur expedita! Facilis, esse maxime quaerat obcaecati facere sed reiciendis quibusdam.</p>
                </div>

                <div className="explore-wrapper mt-5">
                    <div className="row">
                        {/* card 1 */}
                        <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                            <div className="explore-card p-4 shadow">
                                <img src={explore1} className='img-fluid' alt="" />
                                <h2 className='my-2'>Quality Room</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, suscipit?</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                             {/* card 2 */}
                        <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                            <div className="explore-card p-4 shadow">
                                <img src={explore2} className='img-fluid' alt="" />
                                <h2 className="my-2">Private Beach</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nihil.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                            <div className="explore-card p-4 shadow">
                                <img src={explore3} className='img-fluid' alt="" />
                                <h2 className="my-2">Best Accommodation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ut.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                            <div className="explore-card p-4 shadow">
                                <img src={explore4} className='img-fluid' alt="" />
                                <h2 className="my-2">Wellness & Spa</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ea?</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        {/* card 5 */}
                        <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                            <div className="explore-card p-4 shadow">
                                <img src={explore5} className='img-fluid' alt="" />
                                <h2 className="my-2">Restaurants & Bar</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptates.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        {/* card 6 */}
                        <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                            <div className="explore-card p-4 shadow">
                                <img src={explore6} className='img-fluid' alt="" />
                                <h2 className="my-2">Special Offers</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, amet?</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* Rooms */}

    <div className="container py-5">
        <div className="row">
            <div className="section-title text-center explore-title d-flex flex-column align-items-center">
                <span>The Plessure Of Luxury</span>
                <h2>Rooms & Suits</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi mollitia laboriosam illum, aliquam blanditiis neque rerum repudiandae nesciunt nulla!</p>
            </div>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            }}
            className='mt-5 border p-3 rounded'
            
            
            >
                {Data.Rooms.map((Room, index)=>(
                    <SwiperSlide key={index}>
                        <div className="single-service mb-3">
                            <div className="service-thumb">
                                <a href={Room.src} className='gallery-link popup-image' tabIndex={-1}>
                                    <img src={Room.src} alt={Room.name} className='img-fluid' />
                                </a>
                            </div>
                            <div className="service-content p-4">
                                <div className="day-book">
                                    <ul>
                                        <li>{Room.price}/Night</li>
                                        <li style={{cursor:'pointer'}}onClick={() => handleClick(Room.id)}>
                                           Book Now</li> 
                                    </ul>
                                </div>
                                <h5 className="card-title">{Room.name}</h5>
                                <p className="card-text mt-3 room-pers">{Room.description}</p>
                                <div className="icon">
                                    <ul>
                                        <li><img src={singleServiceIcon01} className='img-fluid' alt="" /></li>
                                        <li><img src={singleServiceIcon02} className='img-fluid' alt="" /></li>
                                        <li><img src={singleServiceIcon03} className='img-fluid' alt="" /></li>
                                        <li><img src={singleServiceIcon04} className='img-fluid' alt="" /></li>
                                        <li><img src={singleServiceIcon05} className='img-fluid' alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
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

    {/* Best price */}
    <div className="prices my-5 py-5 position-relative">
        <img src={element1} className='element element1 position-absolute' alt="" />
        <img src={element2} className='element element2 position-absolute' alt="" />
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="section-title price-title">
                        <span>Best Prices</span>
                        <h2>Extra Services</h2>
                    </div>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum neque dicta maxime necessitatibus minus quibusdam delectus ipsa et laboriosam nam?</p>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis perspiciatis culpa temporibus omnis optio commodi excepturi voluptas, illum beatae.</p>

                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="price-box shadow p-4">
                                <div className="price-head">
                                    <div className="price-head-text">
                                        <h2>Room Cleaning</h2>
                                        <p>Perfect for early-stage startups</p>
                                    </div>
                                    <span>Monthly</span>
                                </div>
                                <h1>$39.99</h1>
                                <p className='mt-4'><img src={checkIcon} alt="" /> &nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <p><img src={checkIcon} alt="" /> &nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <p><img src={checkIcon} alt="" /> &nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <button className="btn price-btn mt-2 w-100">GET STARTED <i className='ri-arrow-right-s-line'></i></button>
                            </div>
                        </div>

                        <div className="col-lg-6">
                             <div className="price-box shadow p-4">
                                <div className="price-head">
                                    <div className="price-head-text">
                                        <h2>Drinks Included</h2>
                                        <p>Perfect for early-stage startups</p>
                                    </div>
                                    <span>Monthly</span>
                                </div>
                                <h1>$59.99</h1>
                                <p className='mt-4'><img src={checkIcon} alt="" /> &nbsp; Hotels ipsum dolor sit amet consectetur</p>
                                <p><img src={checkIcon} alt="" /> &nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <p><img src={checkIcon} alt="" /> &nbsp; Lorem ipsum dolor sit amet consectetur</p>
                                <button className="btn price-btn mt-2 w-100">GET STARTED <i className='ri-arrow-right-s-line'></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    {/* Testimonial */}

    <div className="testimonial-section py-5">
        <div className="container">
            <div className="text-center mb-5">
                <small className="text-uppercase text-warning fw-bold">Testimonial</small>
                <h2 className='fw-bold display-5'>What Our Clients Says</h2>
                <p className="text-muted w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus ratione! Molestiae placeat velit nisi vero, adipisci voluptatum dicta minima impedit maiores provident id reiciendis?</p>
            </div>

            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            breakpoints={{
                1399:{slidesPerView:3},
                1199:{slidesPerView:2},
                911:{slidesPerView:1},
                0:{slidesPerView:1},
            }}
            className='test-swiper'
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                        <div className="d-flex align-items-center mb-3 justify-content-between">
                            <img src={user1} className='testimonial-img rounded-circle me-3' alt="" />
                            <div className="testimonial-info">
                                <h5 className='mb-0 fw-bold'>Sathya</h5>
                                <small className="text-muted">Client</small>
                            </div>

                            <img src={quote} alt="" />
                        </div>
                        <div className="stars text-warning mb-3">
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, culpa modi! Fugiat labore perspiciatis saepe praesentium? Molestiae minus nostrum sed!</p>
                    </div>
                </SwiperSlide>
                                {/* slide 2 */}
                <SwiperSlide>
                    <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                        <div className="d-flex align-items-center mb-3 justify-content-between">
                            <img src={user2} className='testimonial-img rounded-circle me-3' alt="" />
                            <div className="testimonial-info">
                                <h5 className='mb-0 fw-bold'>Abd</h5>
                                <small className="text-muted">Client</small>
                            </div>

                            <img src={quote} alt="" />
                        </div>
                        <div className="stars text-warning mb-3">
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, culpa modi! Fugiat labore perspiciatis saepe praesentium? Molestiae minus nostrum sed!</p>
                    </div>
                </SwiperSlide>
                                {/* slide 3 */}
                <SwiperSlide>
                    <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                        <div className="d-flex align-items-center mb-3 justify-content-between">
                            <img src={user3} className='testimonial-img rounded-circle me-3' alt="" />
                            <div className="testimonial-info">
                                <h5 className='mb-0 fw-bold'>Virat Kholi</h5>
                                <small className="text-muted">Client</small>
                            </div>

                            <img src={quote} alt="" />
                        </div>
                        <div className="stars text-warning mb-3">
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, culpa modi! Fugiat labore perspiciatis saepe praesentium? Molestiae minus nostrum sed!</p>
                    </div>
                </SwiperSlide>
                                {/* slide 4 */}
                <SwiperSlide>
                    <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                        <div className="d-flex align-items-center mb-3 justify-content-between">
                            <img src={user3} className='testimonial-img rounded-circle me-3' alt="" />
                            <div className="testimonial-info">
                                <h5 className='mb-0 fw-bold'>Abd</h5>
                                <small className="text-muted">Client</small>
                            </div>

                            <img src={quote} alt="" />
                        </div>
                        <div className="stars text-warning mb-3">
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill"></i>
                        </div>

                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, culpa modi! Fugiat labore perspiciatis saepe praesentium? Molestiae minus nostrum sed!</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

    {/* Book Rooms */}

    <div className="py-5 bg-white">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 mb-4 d-flex flex-column">
                    <div className="section-title book-title">
                        <span>Make Appointment</span>
                        <h2>Book A Room</h2>
                    </div>    
                
                <form>
                    <div className="row mb-3 mt-4">
                        <div className="col-md-6 mb-3">
                            <label className="form-label d-flex align-items-center">
                                <i className="bi bi-calendar me-2 text-warning"></i>
                                Check In Date
                            </label>
                            <input type="date" className='form-control p-3' />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label d-flex align-items-center">
                                <i className="bi bi-calendar2-check me-2 text-warning"></i>
                                Check Out Date
                            </label>
                            <input type="date" className='form-control p-3' />
                        </div>
                        
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                             <label className="form-label d-flex align-items-center">
                                <i className="bi bi-people-fill me-2 text-warning"></i>
                                Adults
                            </label>
                            <select className='form-select p-3'>
                                <option>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3+</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                             <label className="form-label d-flex align-items-center">
                                <i className="bi bi-door-closed me-2 text-warning"></i>
                                Room
                            </label>
                            <select className='form-select p-3'>
                                <option>Room</option>
                                <option>Single</option>
                                <option>Double</option>
                                <option>Suites</option>
                            </select>


                        </div>
                    </div>
                    <button type='submit' className="btn text-white px-4 py-2 mt-2 w-100">Book Table Now</button>

                </form>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
                <img src={bookingImg} className='img-fluid booking-img' alt="" />
            </div>
                </div>
        </div>
    </div>

    {/* Banner */}

    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center banner-box">
                    <img src={playVideo} className='img-fluid' alt="" />
                    <h1>Take A Tour Of Luxury</h1>
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

    {/* Brands */}

    <div className="brand-container position-relative">
        <div className="container">
            <div className="row">
                <Swiper
                slidesPerView={4}
                spaceBetween={1}
                loop={true}
                autoplay={true}
                breakpoints={{
                    1399:{slidesPerView:4},
                    768:{slidesPerView:3},
                    575:{slidesPerView:2},
                    0:{slidesPerView:1},
                }}
                className='brand-swiper w-100'
                >
                    <SwiperSlide>
                        <div className="brand-img w-100">
                            <img src={brand1} className='img-fluid' alt="" />
                        </div>
                    </SwiperSlide>
                      <SwiperSlide>
                        <div className="brand-img w-100">
                            <img src={brand2} className='img-fluid' alt="" />
                        </div>
                    </SwiperSlide>
                      <SwiperSlide>
                        <div className="brand-img w-100">
                            <img src={brand3} className='img-fluid' alt="" />
                        </div>
                    </SwiperSlide>
                      <SwiperSlide>
                        <div className="brand-img w-100">
                            <img src={brand4} className='img-fluid' alt="" />
                        </div>
                    </SwiperSlide>
                      <SwiperSlide>
                        <div className="brand-img w-100">
                            <img src={brand5} className='img-fluid' alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
    



    </>
    
  )
}

export default Index