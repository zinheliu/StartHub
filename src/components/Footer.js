import React from 'react';
import {useForm} from 'react-hook-form';
import './Footer.css';
import logo from '../assets/images/logo-light.png';
function Footer(){

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <>
      <footer className="footer" id="contacts">
        <div className="container">
          <div className="address">
            <div className="logo">
              <img src={logo} alt="logo" width="192"/>
            </div>
            <br />
            <address>
              <div className="location">
                <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                <p>14th Floor, 1 Boulevard Plaza Tower, Sheikh Mohammed Bin Rashid Boulevard Downtown, Dubai, Arab Emirates</p>
              </div>
              <br />
              <br />
              <div className="phonenumber">
                <span className="icon"><i className="fas fa-phone-alt"></i></span>
                <p>+971 4 368 0833 +971 4 455 8556</p>
              </div>
            </address>
          </div>
          <div className="contactus">
            <h2>SEND US A MESSAGE</h2>
            <div className="form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-info">
                  <input type="text" placeholder="Name" {...register("name", {max: 20, min: 3, maxLength: 20})} />
                  {errors.name?.type === 'required' && "Name is required"}
                  <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
                  {errors.email && "Email name is required"}
                </div>
                <div className="message">
                  <textarea placeholder="Your message here..." {...register("message", { min: 18, max: 99 })} />  
                </div>
                <input className="btn submit" type="submit" value="SEND"/>
              </form>
            </div>
          </div>
        </div>
        <div class="title">
          <h4>StartHub Agency © 2023 by ISAP Solutions</h4>
        </div>
      </footer>
    </>
  )
}

export default Footer;