import React from 'react';

import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className='col-lg-4 col-sm-4 g-4 align-item-center mx-auto' >
                <div className="card" style={{ width: '20rem' }}>
                    <img src={props.images} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-primary btn-sm">Go somewhere</NavLink>
                    </div>
                </div>
            </div>

            {/* {console.log(props.images)} */}
        </>
    );
}

export default Card;
