import userEvent from "@testing-library/user-event";
import React from "react";
// import PropTypes from 'prop-types';
import "./contact.css";

// function Contact({gender, avatar, name, online}) {
//   return (
//     <div className="Contact" style={gender==="female" ? {background:"pink"} : {background:"lightblue"}}>
//       <img
//         className="avatar"
//         src={avatar ? avatar : "https://hr-geneve.ch/wp-content/uploads/2016/08/default-avatar.jpg"} 
//         alt={name}
//       />
//       <div>
//         <h4 className="name">{name}</h4>
//         <div className="status">
//           <span className={online ? "status-online" : "status-offline"}></span>
//           <p className="status-text">{online ? "online" : "offline"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     online: PropTypes.bool,
//   };

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    }
  }

  
  render() {
    return (
      <div className="Contact" style={this.props.gender==="female" ? {background:"pink"} : {background:"lightblue"}}>
        <img
          className="avatar"
          src={this.props.avatar ? this.props.avatar : "https://hr-geneve.ch/wp-content/uploads/2016/08/default-avatar.jpg"} 
          alt={this.props.name}
        />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div 
            className="status"
            onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
              }}
            >
              <span className={this.state.online ? "status-online" : "status-offline"}></span>
              <p className="status-text">{this.state.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  }
}








export default Contact;
