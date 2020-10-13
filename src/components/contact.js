import React from 'react';
import './contact.css';


function Contact() {
    return (
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/men/83.jpg"  alt="Avatar"/>
        <div>
            <h4 className="name" >Name</h4>
            <div className="status">
                <span className="status-online"></span>
                <p className="status-text">online</p>
            </div>
        </div>
    </div>    
    )
}

export default Contact;