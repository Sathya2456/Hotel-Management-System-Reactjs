import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
           {/* Page section */}
    <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-wrap text-center">
                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>
                        <div className="section-wrap d-flex align-items-center justify-content-center">
                            <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                <li><Link  id='abcd' href="#">Home</Link> &nbsp; / &nbsp; <span className='fw-bold'>Contact</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-page mb-5">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 order-1 mb-4">
                    <hr />


                    <div className="mb-4 d-flex align-items-start">
                        <div className="contact-icon rounded-circle text-while d-flex align-items-center justify-content-center me-3" style={{width:70,height:70}}>
                            <i className="bi bi-map"></i>
                        </div>
                        <div className="contact-info">
                            <h5 className="mb-1">Office Address</h5>
                            <p className="mb-0">Rmk Layout Mahadevapura <br />Bengaluru</p>
                        </div>
                    </div>
                    <hr />

                     
                    <div className="mb-4 d-flex align-items-start">
                        <div className="contact-icon rounded-circle text-while d-flex align-items-center justify-content-center me-3" style={{width:70,height:70}}>
                            <i className="bi bi-clock"></i>
                        </div>
                        <div className="contact-info">
                            <h5 className="mb-1">Working Hours</h5>
                            <p className="mb-0">Monday to Friday 09:00 to 18:00 <br />Saturday 15:00</p>
                        </div>
                    </div>
                     
                    <hr />


                    <div className="mb-4 d-flex align-items-start">
                        <div className="contact-icon rounded-circle text-while d-flex align-items-center justify-content-center me-3" style={{width:70,height:70}}>
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div className="contact-info">
                            <h5 className="mb-1">Message Us</h5>
                            <p className="mb-0">Support@example.com<br />info@example.com</p>
                        </div>
                    </div>
                    <hr />
                     
                    



                    
                </div>

                <div className="col-lg-8 order-2 contact-form-wrap" style={{backgroundColor:"#f7f5f1"}}>
                    <h1 className="mb-5 text-center fs-1 dw-bolder">Get In Touch</h1>
                    <form>
                        <div className="row mb-4 contact-wrap">
                            <div className="col input-box">
                                <input type="text" className='form-control' placeholder='First Name' />
                            </div>
                            <div className="col input-box">
                                <input type="email" className='form-control' placeholder='Email' />
                            </div>
                        </div>

                        <div className="row mb-4 contact-wrap">
                            <div className="col input-box">
                                <input type="text" className='form-control' placeholder='Phone no' />
                            </div>
                            <div className="col input-box">
                                <input type="email" className='form-control' placeholder='Subject' />
                            </div>
                        </div>
                        <div className="mb-4 input-box">
                            <textarea className='form-control' rows={4} placeholder='write comments'></textarea>
                        </div>
                        <button type='submit' className='btn btn-dark w-100'>Submit Now</button>
                    </form>
                </div>


            </div>
        </div>
    </div>


    {/* news letter*/}
    <div className="newsletter-section py-5 bg-light text-center">
  <div className="container">
    <small className="text-uppercase fw-semibold text-muted">News letters</small>
    <h2 className="fw-bold my-3">Subscribe to our Newsletter</h2>
    <p className="text-muted mb-4">
      With the subscription, enjoy your favourite hotels without having to think about it.
    </p>

    <div className="d-flex justify-content-center">
      <div className="input-group" style={{ maxWidth: '600px' }}>
        <input
          type="email"
          className="form-control p-3"
          placeholder="Enter your email address"
        />
        <button className="btn px-4 text-white" style={{ backgroundColor: '#6c4329' }}>
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact