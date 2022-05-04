import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faEnvelope, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row text-white g-4">
                    <div className="col-md-6 col-lg-3">
                        <a className="text-uppercase text-decoration-none brand text-white" href="index.html">brite exprees inc</a>
                        <p className="text-white text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit dolor ipsam?</p>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light">Links</h5>
                        <ul className="list-unstyled">
                            <li className="my-3">
                                <NavLink to='/' className="text-white text-decoration-none text-muted">
                                    <FontAwesomeIcon className='me-1' icon={faChevronRight} /> Home
                                </NavLink>
                            </li>
                            <li className="my-3">
                                <NavLink to='/' className="text-white text-decoration-none text-muted"> <FontAwesomeIcon className='me-1' icon={faChevronRight} /> Collection
                                </NavLink>
                            </li>
                            <li className="my-3">
                                <NavLink to='/' className="text-white text-decoration-none text-muted">
                                    <FontAwesomeIcon className='me-1' icon={faChevronRight} /> Blogs
                                </NavLink>
                            </li>
                            <li className="my-3">
                                <NavLink to='/' className="text-white text-decoration-none text-muted">
                                    <FontAwesomeIcon className='me-1' icon={faChevronRight} /> About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light mb-3">Contact Us</h5>
                        <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span className="me-3">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </span>
                            <span className="fw-light">
                                Albert Street, New York, AS 756, United States of America
                            </span>
                        </div>
                        <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span className="me-3">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span className="fw-light">
                                briteexpress.support@gmail.com
                            </span>
                        </div>
                        <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span className="me-3">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </span>
                            <span className="fw-light">
                                +9786 6776 236
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light mb-3">Follow Us</h5>
                        <div>
                            <ul className="list-unstyled d-flex">
                                <li>
                                    <NavLink to='/' className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <FontAwesomeIcon icon={faPinterest} />
                                    </NavLink>
                                </li>
                            </ul>
                    <p>Copyright@2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;