import React from 'react';
import s1 from '../asset/image/s1.jpg';
import s2 from '../asset/image/s2.jpg';
import s3 from '../asset/image/s3.jpg';
import s4 from '../asset/image/s4.jpg';
import s5 from '../asset/image/s5.jpg';
import s6 from '../asset/image/s6.jpg';
import Card from '../AppComponent/card'

const ImageData=[
    {
        Id:1,
        Name:'Web Development',
        Image:s1
    },
    {
        Id:2,
        Name:'App Development',
        Image:s2
    },
    {
        Id:3,
        Name:'Software Development',
        Image:s3
    },
    {
        Id:4,
        Name:'UI/UX Development',
        Image:s4
    },
    {
        Id:5,
        Name:'Marketing ',
        Image:s5
    },
    {
        Id:6,
        Name:'Digital Marketing',
        Image:s6
    }
];


const Services = () => {
    return (
        <>
            <div className='container-fluid nav_bg' id='card-row'>
                <div className='row'>
                    <div className='name text-center mt-4'>
                        <h1>Services</h1>
                    </div>
                    <div className='col-lg-9 col-12 mx-auto'>
                        <div className='row'>
                          
                           {ImageData.map((val,index)=>{
                               return <Card  key={index} name={val.Name} images={val.Image} />
                                //console.log(val.Image);
                           })}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
