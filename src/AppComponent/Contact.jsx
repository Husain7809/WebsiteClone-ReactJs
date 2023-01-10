import React from 'react';
import { useState } from 'react';

const Contact = () => {

    const [Data, setData] = useState(
        {
            name: "",
            email: "",
            number: "",
            msg: ""
        });


    const Event = (e) => {
        const { name, value } = e.target;

        setData((preVal) => {
            return {
                ...preVal, [name]: value,
            }
        });

    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value.length>=0 && e.target.email.value>=0 && e.target.number.value>=0 && e.target.msg.value>=0) {
            alert('All Filed Are Required...')
        }else{
            alert(`Your Name is ${Data.name} and Email id ${Data.email} and Mobile Number ${Data.number} and Message ${Data.msg}`);
            setData(() => {
                return {
                    name: "",
                    email: "",
                    number: "",
                    msg: ""
                }
            });
        }
    }

    return (
        <div className='container-fluid animate__animated  animate__pulse' id='contact-block'>
            <div className='row' >
                <div className='col-10 mx-auto'>
                    <div className='contact-name text-center mt-4 pb-3'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='col-md-5 col-12 mx-auto mt-3'>
                        <form id='contact_form' autoComplete='off' onSubmit={formSubmit} method="post" >
                            <div className="mb-3">
                                <input type="text" className="form-control" value={Data.name} onChange={Event} name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" value={Data.email} onChange={Event} name='email' id="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" value={Data.number} onChange={Event} name='number' id="number" placeholder="Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="msg" value={Data.msg} onChange={Event} name='msg' rows="7" placeholder='Enter Your Message...'  ></textarea>
                            </div>
                            <div className="mb-3">
                                <input type='submit' className='btn btn-primary mx-auto  d-flex' id='submit-btn' value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
