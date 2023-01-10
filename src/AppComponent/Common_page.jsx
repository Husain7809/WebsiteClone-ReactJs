import React from 'react';
import { NavLink } from 'react-router-dom';

const Common_page = (props) => {
    return (
        <>
            <section id='header' className='py-5 d-flex align-items-center'>
                <div className='container-fluid nav_bg py-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1 className='animate__animated animate__pulse'>{props.name} <strong>Mohammad</strong></h1>
                                    <h2 className='my-3 animate__animated animate__pulse '>We are the team of talented developer making website</h2>
                                    <div className='mt-3'>
                                        <NavLink to='Services' className='btn-get-started'>{props.buttonText}</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <img src={props.Web} className="img-fluid animated" alt="Image" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Common_page;
