import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaMicrosoft, FaApple, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const forgotPassword = async () =>{
    Swal.fire({
      title: "Submit your email address",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Click to reset",
      showLoaderOnConfirm: true,
 
     
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  };

  const handleRegister = async () => {
    
      let response;
      if(email !== "" || password!==""){
      if (confirmPassword === password) {
        try {
          // Make an API request to your backend
          response = await axios.post('https://13.246.51.121:5000/register', {
            email: email,
            password: password,
          });
        
        
          // Display success message
          Swal.fire({
            timer: 3000,
            title: 'Registration!',
            text: response.data.user || 'Registration successful', 
            icon: 'success',
          });
          window.location.href = '/signin';
        } catch (error) {
          // Display error message
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: error.response.data.error,
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: "Passwords don't match",
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Empty Form',
        text: "Please Fill the Form",
      });
    }
  };
  

  const handleTermsConditions = async () => {
    const { value: accept } = await Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
            By creating an account on Satoti, I agree to provide accurate and complete information during the registration process.
            I shall use Satoti in a manner consistent with all applicable laws and regulations.
            I acknowledge that the AI model, Satori, and the underlying technology are the intellectual property of FluidIntellect Academy.
            Terms of use
            I, hereby declare that:
            By creating an account on Satoti, I agree to provide accurate and complete information during the registration process.
            I shall use Satoti in a manner consistent with all applicable laws and regulations.
            I am responsible for maintaining the confidentiality of my account credentials.
            I may utilize the AI model (Satori) for informational purposes.
            I acknowledge that the AI model's responses are generated based on data from my FluidIntellect Academy's database, and I am aware of its limitations.
            I agree that my queries and interactions with Satori may be logged for quality improvement and analytical purposes.
            FluidIntellect Academy will adhere to data protection laws and guidelines in handling my information.
            Administrators have the responsibility to monitor and manage user interactions within Satoti.
            Administrators shall ensure the integrity and security of data in FluidIntellect Academy's database.
            I may not engage in any activity that disrupts the functionality of Satoti or compromises its security.
            Unauthorized access, attempts to manipulate the AI model, or any form of malicious activity is strictly prohibited.
            I acknowledge that the AI model, Satori, and the underlying technology are the intellectual property of FluidIntellect Academy.
            I may not reproduce, distribute, or use Satori for commercial purposes without explicit permission.
            FluidIntellect Academy reserves the right to suspend or terminate my account for violation of these terms.
            I may terminate my account at any time, adhering to the provided account closure procedures.
            These terms may be updated periodically, and I will be notified of any significant changes.
            Continued use of Satoti after the modification of terms implies acceptance of the updated terms.
            Privacy Policy:
            Information Collection:
            1.1 Satori collects user-provided information, including but not limited to, name, IP address, and email address.
            1.2 Satori may collect data from the FluidIntellect Academy for the purpose of enhancing the AI model.
             
            Cookies:
            2.1 Satori uses cookies to enhance user experience and tailor operations based on preferences.
             
            User Rights:
            3.1 I may exercise rights such as access, deletion, and rectification by contacting Satori at satori@fluidintellect.com.
            3.2 Identity verification may be required for certain requests.
             
            Do Not Track:
            4.1 Satoti supports Do Not Track (DNT). I can enable or disable DNT through browser settings.
             
            By registering and using Satoti, I signify my agreement to these rules and regulations. FluidIntellect Academy reserves the right to enforce these terms to maintain a secure and respectful environment within the Satoti web application.
            `,
      confirmButtonText: `
              Continue&nbsp;<i class="fa fa-arrow-right"></i>
            `,
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      },
    });
  
    if (accept) {
      setCheckboxChecked(true);
      Swal.fire({
        icon: "info",
        title: "Please accept the terms and conditions to proceed",
        timer: 3000,
      });
    }
  };
  
  return ( 
    <> 
      <MDBContainer className="p-[5%]">
        <MDBRow className='main-bac'>
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
                    onChange={(e) => setEmail(e.target.value)}
                    />
            <label>Password <span className='text-red'>*</span></label>
            <MDBInput  
                    wrapperClass='mb-4 mt-2' 
                    placeholder='Password' 
                    id='form2' 
                    type='password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm password <span className='text-red'>*</span></label>
            <MDBInput 
                    wrapperClass='mb-4 mt-2'
                    placeholder='Confirm Password'
                    id='form3'
                    type='password' 
                    onChange={(e) => setconfirmPassword(e.target.value)}
              />

              <div className='d-flex  mb-4 text-white'>
              <MDBCheckbox
                required
                name='flexCheck'
                value=''
                id='flexCheckDefault'
                label='By continuing, you agree to the '
                className='hover:underline'
                onChange={() => setCheckboxChecked(!checkboxChecked)}
              />
              <p onClick={handleTermsConditions} className='px-1'>Terms of use and Privacy Policy. </p>
              </div>
              <div className="text-center pt-1 mb-2 pb-1 row">
                <MDBBtn
                  className={`mb-4 w-50 text-white ${!checkboxChecked && 'disabled-btn'}`}
                  onClick={handleRegister}
                  disabled={!checkboxChecked}
                >
                  <Link >Sign Up</Link>
                </MDBBtn>
                <a className="text-white" href="#!" onClick={forgotPassword}>Forgot password?</a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="mb-0 text-white">Have an account?</p>
                <MDBBtn outline className='mx-2 text-white'>
                  <Link to={'/signin'} >Sign In</Link> 
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
