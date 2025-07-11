import React from 'react';

import stars from './../../assets/stars.png';
import Nav from './../Nav/Nav';

import defaultRoomImage from './../../assets/room-1.jpg';
import bookingImg from './../../assets/about-1.png';
import RoomImg01 from './../../assets/single-room-img02.png';
import RoomImg02 from './../../assets/single-room-img03.png';

import Data from '../../Data.json';
import { Link, useParams } from 'react-router-dom';

const RoomsDetails = () => {
  const { id } = useParams();
  const foundRoom = Data.Rooms.find((item) => item.id == id);

  if (!foundRoom) {
    return (
      <div className="container mt-5 text-center">
        <h3>Room Not Found</h3>
        <Link to="/rooms" className="btn btn-primary mt-3">
          Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Page banner */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>Rooms Details</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li>
                      <Link to="/">Home</Link> &nbsp;/&nbsp;
                      <span className="fw-bold"> Rooms Details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Detail Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={foundRoom.image || defaultRoomImage}
              alt={foundRoom.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h3>{foundRoom.title}</h3>
            <img src={stars} alt="rating stars" className="mb-3" />
            <p>{foundRoom.description}</p>
            <p>
              <strong>Price:</strong> ₹{foundRoom.price}
            </p>
            <p>
              <strong>Guests:</strong> {foundRoom.guests}
            </p>
            <p>
              <strong>Beds:</strong> {foundRoom.beds}
            </p>
          </div>
        </div>
      </div>

      {/* Room Images and Feature Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={foundRoom?.src || defaultRoomImage}
              alt={foundRoom?.name}
              className="img-fluid mb-3 rounded"
            />
          </div>
          <div className="col-lg-6">
            <img src={RoomImg01} className="img-fluid mb-2 rounded" alt="Room Extra 1" />
            <img src={RoomImg02} className="img-fluid mb-2 rounded" alt="Room Extra 2" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8">
            <h2>{foundRoom.name}</h2>
            <p><strong>Price:</strong> ₹{foundRoom.price}/Night</p>
            <img src={stars} alt="rating" className="mb-3" />
            <p>{foundRoom.description}</p>
            <h4 className="mt-4">Room Features</h4>
            <ul className="room-feature d-flex flex-wrap gap-3 mt-2 p-0 list-unstyled">
              <li>Tv</li>
              <li>Free Wifi</li>
              <li>Air Conditioner</li>
              <li>Heater</li>
              <li>Phone</li>
              <li>Laundry</li>
              <li>Adults: {foundRoom.guests}</li>
              <li>Size: 24 m²</li>
              <li>Bed Type: {foundRoom.beds}</li>
            </ul>
            <a href="#" className="btn btn-warning mt-3">Book Now</a>
          </div>
        </div>
      </div>

      {/* Booking Sidebar */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="sidebar services-sidebar">
              <div className="sidebar-widget categories">
                <div className="widget-title">Book A Room</div>
                <div className="section-title book-title mb-4">
                  <span>Make Appointment</span>
                  <h2>Book A Room</h2>
                </div>

                <form>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                      <label className="form-label d-flex align-items-center">
                        <i className="bi bi-calendar me-2 text-warning"></i>
                        Check In Date
                      </label>
                      <input type="date" className="form-control p-3" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label d-flex align-items-center">
                        <i className="bi bi-calendar2-check me-2 text-warning"></i>
                        Check Out Date
                      </label>
                      <input type="date" className="form-control p-3" />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                      <label className="form-label d-flex align-items-center">
                        <i className="bi bi-people-fill me-2 text-warning"></i>
                        Adults
                      </label>
                      <select className="form-select p-3">
                        <option value="">Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3+">3+</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label d-flex align-items-center">
                        <i className="bi bi-door-closed me-2 text-warning"></i>
                        Room
                      </label>
                      <select className="form-select p-3">
                        <option value="">Room</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Suites">Suites</option>
                      </select>
                    </div>
                  </div>

                  {/* Button and Image Side-by-Side */}
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <button type="submit" className="btn btn-primary px-4 py-2">
                      Book Table Now
                    </button>
                    <img
                      src={bookingImg}
                      alt="booking"
                      className="img-fluid rounded"
                      style={{ width: '100px', height: 'auto' }}
                    />
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsDetails;
