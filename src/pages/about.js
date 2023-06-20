import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
    return (
        <>
        <div className='bodyTitle'>
        <h3>Dashboard</h3>
        <h5>Here are the Current Activities on your Store.</h5>
        </div>

        <div className="dashcard1 card card text-white bg-primary mb-3">
        <img src="https://shopify-trunk.webkul.com/shopify-mp/img/admin_sliced/icon-dashboard.png" style={{padding: "30px"}} className="card-img-top" alt="Card" />
        <div className="card-body">
            <h3 className="card-title">Holla!</h3>
            <p style={{fontSize: "13px"}} className="card-text">Here are the Current Activities on your Store.</p>
            <a href="#" className="btn btn-primary">Today's Total Sales  </a>
            <a href="#" className="btn btn-primary">This Week's Total Sales   </a>
            <a href="#" className="btn btn-primary">Overall Sales  </a>
        </div>
        </div>
        </>
    )
}


export default About;