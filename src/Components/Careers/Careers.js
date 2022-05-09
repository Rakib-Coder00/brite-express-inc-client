import React from 'react';
import career from '../../Asset/career.jpg';

const Careers = () => {
    return (
        <div className='careers py-5'>
                <div className="title text-center pt-3 pb-5">
                    <h2 className="position-relative d-inline-block ms-4">Careers</h2>
                </div>
            <div className="container">
                <div className="row gy-lg-5 align-items-center">
                    <div className="col-lg-6 order-lg-1 text-center text-lg-start">

                        <p className="lead text-muted">We look forward to hearing from you!</p>
                        <p>BRITE Express is a successful, dynamic and fast growing company. We are a team of talented and passionate professionals, working in a safe and productive environment based on trust and respect. Our goal is to be a leading freight services provider - something that we’re achieving every day through a combination of our own modern fleet, highly skilled & diverse staff, as well as strong work ethics.</p>
                        <button className="btn">Apply Now</button>
                    </div>
                    <div className="col-lg-6 order-first  order-lg-0">
                        <img src={career} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;