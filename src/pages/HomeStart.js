import React from 'react';
import Logo from '../../assets/mainlogo.png'
import Blob from '../../assets/blob.svg'
import Navbar from '../../components/NavBar';
import Swal from 'sweetalert2'
import Banner from '../../banner/Banner';

function Home() {
  

    return (
        <Banner/>
    );
}

export default Home;


{/* 

  const handleLogin = () => {
        Swal.fire({
          title: 'Sign Up!',
          html: `
            <div class="flex justify-center items-center h-screen bg-white">
              <div class="w-full max-w-md mx-auto p-8 rounded-lg shadow-xl bg-silver">
                <!-- Logo and Title section -->
                <div class="flex inline-block items-center mb-12 justify-center">
                  <img src="${Logo}" alt='' class='rounded-md transition-all duration-300 w-20 items-center'/>
                  <h3 class="text-2xl font-semibold text-center text-brandPrimary ">Sign Up ! </h3>
                </div>
                <!-- Form section -->
                <div class="space-y-4">
                  <!-- Full Name Input -->
                  <input id="name" type="text" placeholder="Full name" class="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary">
                  <!-- Email Input -->
                  <input id="email" type="email" placeholder="Email address" class="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary">
                  <!-- Password Input -->
                  <input id="password" type="password" placeholder="Password" class="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary">
                  <!-- Confirm Password Input -->
                  <input id="confirmPassword" type="password" placeholder="Confirm Password" class="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary">
                  <!-- Terms and Conditions Checkbox -->
                  <div class="flex items-center gap-2">
                    <input type="checkbox" id="remember" class='checkbox checkbox-success checkbox-sm'>
                    <label for="remember" class="text-sm font-medium text-gray-500 dark:text-gray-300">Terms and conditions</label>
                  </div>
                  <!-- Signup Button -->
                  <div class="flex justify-center">
                    <button id="swal-signup" class="bg-greenPrimary text-white py-1 px-8 rounded hover:bg-brandSecondary mb-4">Sign Up</button>
                  </div>
                  <!-- Sign In Link -->
                  <div class="row justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                    registered?&nbsp;
                    <a href="https://www.flowbite-react.com/docs/components/modal" alt='' class="text-cyan-700 hover:underline dark:text-cyan-500">Sign In</a>
                  </div> 
                </div>
              </div>
            </div>
          `,
          showCancelButton: true,
          confirmButtonText: 'Login',
          cancelButtonText: 'Cancel',
          preConfirm: () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const remember = document.getElementById('remember').checked;
    
            // You can handle signup logic here
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            console.log('Remember:', remember);
          }
        });
      };

<div className="flex h-full items-center justify-center ">
        
            <Navbar/>
            <div className="w-1/2 sm:mt-28 lg:ml-28 md:ml-20 sm:ml-8 md:mt-8">
                 <img src={Logo} alt="" className='md:h-48 items-center justify-center md:mt-[20%] md:ml-28 sm:ml-8  '/>
                 <div className='textContent'> Welcome to Satori</div>
                 <div className='description mb-8'>
                 Empower Your Business with Satori, FluidIntellect's Cutting-Edge Generative AI. Drive Innovation, Enhance Efficiency, and Achieve Unprecedented Success. Explore the Future of AI for Business Today!
                 </div>
                 <div className="flex flex-col ">
                        <button className='btn-primary mt-10' onClick={handleLogin}> Login </button>
                        <button className='btn-primary'> Register </button>
                 </div>
                 
            </div> 
           
            <div className="flex justify-end items-center h-screen">
                <div className=''>
                    <img src={Logo} alt="Logo"  />
                </div>
                <div >
                    <img src={Blob} alt="Blob" className="" />
                </div>
            </div>


        </div> */}