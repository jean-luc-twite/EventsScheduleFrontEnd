import React from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} 
from 'mdb-react-ui-kit';
import {FaMicrosoft, FaApple, FaGoogle} from 'react-icons/fa';

import '../Auth.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function Register() {


  const handleRegister =()=>{
    Swal.fire({
      timer:2000,
      title: "Registration!",
      text: "Register successfully",
      icon: "success"
    });
  }
 const handleTermsConditions =async ()=>{
  const { value: accept } = await Swal.fire({
          title: "Terms and conditions",
          input: "checkbox",
          inputValue: 1,
          inputPlaceholder: `
          By creating an account on Satoti, I agree to provide accurate and complete information during the registration process.
          I shall use Satoti in a manner consistent with all applicable laws and regulations.
          I acknowledge that the AI model, Satori, and the underlying technology are the intellectual property of FluidIntellect Academy.
          I may not reproduce, distribute, or use Satori for commercial purposes without explicit permission.
          FluidIntellect Academy reserves the right to suspend or terminate my account for violation of these terms.
          I may terminate my account at any time, adhering to the provided account closure procedures.
          These terms may be updated periodically, and I will be notified of any significant changes.
          Continued use of Satoti after the modification of terms implies acceptance of the update.
          `,
          confirmButtonText: `
            Continue&nbsp;<i class="fa fa-arrow-right"></i>
          `,
          inputValidator: (result) => {
            return !result && "You need to agree with T&C";
          }
        });
        if (accept) {
          Swal.fire({
            icon: "info",
            title: "Please the terms and conditions to proceed",
            timer:3000
          });
        }
 }
  
  return ( 
    <> 
    <MDBContainer className="my-1">

      <MDBRow className='main-bac ' >
      <MDBCol col='6' className="mb-5">
        
          <div className="d-flex flex-column  justify-content-center  h-100 mb-4">
          <div className="text-center">
            
            <h4 className="mt-4 mb-2 text-white">Join <span className='text-red'>Satori</span>, Experience Generative AI</h4>
          </div>
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4 text-white">We are more than just a company</h4>
              <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Empower Your Business with Satori, FluidIntellect's Cutting-Edge 
                  Generative AI. Drive Innovation, <br/>Enhance 
                   Efficiency,<br/> and Achieve Unprecedented Success. 
                  Explore the  <br/> Future of AI for Business Today!
          </p>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5  mt-3 m-4">
          <div className="d-flex flex-column ms-5">
          <div className="text-center">
             <h4 className="mt-4 mb-4 pb-1 text-white text-2xl">Register</h4>
          </div> 
            <label>Email address<span className='text-red'>*</span></label>
            <MDBInput 
                    wrapperClass='mb-4 mt-2' 
                    placeholder='Email address' 
                    id='form1' type='email' 
                    feedback='Please provide a valid email address'
                    required
                    />
            <label>Password <span className='text-red'>*</span></label>
            <MDBInput  
                    wrapperClass='mb-4 mt-2' 
                    placeholder='Password' 
                    id='form2' 
                    type='password'
                    required
            />
            <label>Confirm password <span className='text-red'>*</span></label>
            <MDBInput wrapperClass='mb-4 mt-2' placeholder='Confirm Password' id='form2' type='password'/>


            <div className='d-flex  mb-4 text-white'>
            <MDBCheckbox required name='flexCheck' value='' id='flexCheckDefault' label='Terms & conditions' className='hover:underline' />
              <p onClick={handleTermsConditions} className='px-1'>view</p>
          </div>

                <div className="text-center pt-1 mb-2 pb-1 row">
                  <MDBBtn className="mb-4 w-50 text-white " onClick={handleRegister}>
                  <Link to='/signin'>Sign Up</Link> 
                  </MDBBtn>
                  <a className=" text-white" href="#!">Forgot password?</a>
                </div>

            <div className="d-flex flex-row align-items-center justify-content-center  ">
              <p className="mb-0 text-white">Have an account?</p>
                <MDBBtn outline className='mx-2 text-white' to='/login'>
                  <Link to='/signin'>Sign In</Link> 
                </MDBBtn>
            </div>
            <div className="text-center flex"> 
                <p>or sign up with:</p> 
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                  <FaMicrosoft size={28}/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                  <FaGoogle size={28}/>
                </MDBBtn> 
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                  <FaApple size={28}/>
                </MDBBtn> 

              </div> 
          </div>

        </MDBCol> 
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Register;