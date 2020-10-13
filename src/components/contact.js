import React from "react";
import PropTypes from 'prop-types';
import "./contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.image}
        alt={props.name}
      />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <span className={props.isConnected ? "status-online" : "status-offline"}></span>
          <p className="status-text">{props.isConnected ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isConnected: PropTypes.bool.isRequired,
  };

export default Contact;
