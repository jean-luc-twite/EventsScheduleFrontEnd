import React from "react"; 
import { Link } from "react-router-dom";



const Banner = () => {
 
  return (
    <>
   
      {/* ================== BannerThree Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}
      >
         
        <img className='bg-img-2' src='assets/img/banner-3/4.png' alt='img' />
        
        <div className='container'>
          
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
             
              <div className='banner-inner pe-xl-5'>
                <h6
                  className='subtitle '
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  DESIGNING YOUR FUTURE
                </h6>
                <h2
                  className='title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                >
                  Welcome to  <span>Event Scheduler</span> 
                </h2>
                <p
                  className='content pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                 Your Premier Destination for Seamless Event Planning!
                Browse, Book, and Organize Your Events with Ease. Let's Make Every Moment Unforgettable Together!
                </p>
                <Link
                  className='btn btn-border-base ml-4'
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  to='/start'
                >
                  GET STARTED
                </Link>
                
               
              </div>
            </div>
            <div className='col-lg-6 col-md-10' >
              <div
                className='banner-thumb-3'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-3/2.svg'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/banner-3/3.svg'
                    alt='img'
                  />
                  <img
                    className='main-img'
                    src='assets/img/banner-3/1.png'
                    alt='img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
    </>
  );
};

export default Banner;
