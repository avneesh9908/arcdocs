import React, { useState, useEffect } from 'react';
import '../../assets/css/animate.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/flaticon.css';
import '../../assets/css/fontawesome-all.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/main.css';
import '../../assets/css/nice-select.css';
import '../../assets/css/owl.carousel.min.css';
import '../../assets/css/price_rangs.css';
import '../../assets/css/responsive.css';
import '../../assets/css/slick.css';
import '../../assets/css/slicknav.css';
import '../../assets/css/style.css';
import '../../assets/css/themify-icons.css';
// import '../../assets/css/preloader.css';

// Import images
import loaderImg from '../../assets/img/logo/loder.jpg';
import logoImg from '../../assets/img/logo/logo.png';
import services1Img from '../../assets/img/gallery/services1.png';
import services2Img from '../../assets/img/gallery/services2.png';
import services3Img from '../../assets/img/gallery/services3.png';
import team1Img from '../../assets/img/gallery/team1.png';
import team2Img from '../../assets/img/gallery/team2.png';
import team3Img from '../../assets/img/gallery/team3.png';
import testiLogoImg from '../../assets/img/gallery/testi-logo.png';
import brand1Img from '../../assets/img/gallery/brand1.png';
import brand2Img from '../../assets/img/gallery/brand2.png';
import brand3Img from '../../assets/img/gallery/brand3.png';
import brand4Img from '../../assets/img/gallery/brand4.png';
import brand5Img from '../../assets/img/gallery/brand5.png';
import homeBlog1Img from '../../assets/img/gallery/home_blog1.png';
import homeBlog2Img from '../../assets/img/gallery/home_blog2.png';
import logoFooterImg from '../../assets/img/logo/logo2_footer.png';
import instagram1Img from '../../assets/img/gallery/instagram1.png';
import instagram2Img from '../../assets/img/gallery/instagram2.png';
import instagram3Img from '../../assets/img/gallery/instagram3.png';
import instagram4Img from '../../assets/img/gallery/instagram4.png';
import instagram5Img from '../../assets/img/gallery/instagram5.png';
import instagram6Img from '../../assets/img/gallery/instagram6.png';

// Import additional images
import sectionBg02Img from '../../assets/img/gallery/section_bg02.jpg';
import sectionBg04Img from '../../assets/img/gallery/section_bg04.jpg';
import gallery1Img from '../../assets/img/gallery/gallery1.png';
import gallery2Img from '../../assets/img/gallery/gallery2.png';
import gallery3Img from '../../assets/img/gallery/gallery3.png';
import gallery4Img from '../../assets/img/gallery/gallery4.png';
import gallery5Img from '../../assets/img/gallery/gallery5.png';
import gallery6Img from '../../assets/img/gallery/gallery6.png';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="body-bg">
      {/* Preloader Start */}
      {isLoading && (
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src={loaderImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}

      <header>
        {/* Header Start */}
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="logo">
                  <a href="index.html"><img src={logoImg} alt="" /></a>
                </div>
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="work.html">Gallery</a></li>
                      <li><a href="blog.html">Blog</a>
                        <ul className="submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                          <li><a href="elements.html">Elements</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>          
                {/* Header-btn */}
                <div className="header-btns d-none d-lg-block f-right">
                  <a href="#" className="btn header-btn">Contact Us</a>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </header>

      <main>
        {/* slider Area Start*/}
        <div className="slider-area">
          <div className="slider-active dot-style">
            {/* Single Slider */}
            <div className="single-slider slider-height hero-overly d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay=".4s">Welcome to Intorior</span>
                      <h1 data-animation="fadeInLeft" data-delay=".6s">Modern Interior & Design</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Slider */}
            <div className="single-slider slider-height hero-overly d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero__caption">
                      <span data-animation="fadeInLeft" data-delay=".4s">Welcome to Intorior</span>
                      <h1 data-animation="fadeInLeft" data-delay=".6s">Modern Interior & Design</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video icon */}
          <div className="video-icon">
            <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><i className="fas fa-play"></i></a>
          </div>
        </div>
        {/* slider Area End*/}
        
        {/* our info Start */}
        <div className="our-info-area pt-170 pb-100 section-bg" style={{ backgroundImage: `url(${sectionBg02Img})` }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-60">
                  <div className="info-caption">
                    <h4>Clean and Services</h4>
                    <p>For each project we establish relationships with partners who we know will help us. </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-60">
                  <div className="info-caption">
                    <h4>Clean and Modern</h4>
                    <p>For each project we establish relationships with partners who we know will help us. </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-info mb-60">
                  <div className="info-caption">
                    <h4>Clean and Modern</h4>
                    <p>For each project we establish relationships with partners who we know will help us. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Info start */}
        
        {/* Professional Services Start */}
        <div className="professional-services section-bg d-none d-md-block" style={{ backgroundImage: `url(${sectionBg04Img})` }}></div>
        <div className="profession-caption">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                {/* Section Tittle */}
                <div className="section-tittle profession-details">
                  <span>Our Professional Services</span>
                  <h2>We will create modern and first class intorior.</h2>
                  <p>Aorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <a href="about.html" className="btn btn3">Discover More About Ous</a>
              </div>
            </div>
          </div>
        </div>
        {/* Professional Services End */}
        {/* our info End */}
        
        {/* Services Ara Start */}
        <div className="services-area section-padding3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                {/* Section Tittle */}
                <div className="section-tittle text-center mb-70">
                  <span>Our Professional Services</span>
                  <h2>Best Interitor Services</h2>
                </div> 
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="single-services mb-200">
                  <div className="services-img">
                    <img src={services1Img} alt="" />
                  </div>
                  <div className="services-caption">
                    <h3><a href="services.html">Lighting</a></h3>
                    <p className="pera1">For each project we establish </p>
                    <p className="pera2">For each project we establish relationships with partners who we know will help us. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="single-services mb-200">
                  <div className="services-img">
                    <img src={services2Img} alt="" />
                  </div>
                  <div className="services-caption">
                    <h3><a href="services.html">Interior Design</a></h3>
                    <p className="pera1">For each project we establish </p>
                    <p className="pera2">For each project we establish relationships with partners who we know will help us. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="single-services mb-200">
                  <div className="services-img">
                    <img src={services3Img} alt="" />
                  </div>
                  <div className="services-caption">
                    <h3><a href="services.html">Office Decoretion</a></h3>
                    <p className="pera1">For each project we establish </p>
                    <p className="pera2">For each project we establish relationships with partners who we know will help us. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Ara End */}
        
        {/* Gallery Area Start */}
        <div className="gallery-area">
          <div className="container-fluid p-0 fix">
            <div className="row">
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img" style={{ backgroundImage: `url(${gallery1Img})` }}></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3><span>Intorior</span>Burj Khalifa</h3>
                      <a href="work.html"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img" style={{ backgroundImage: `url(${gallery2Img})` }}></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3><span>Intorior</span>Burj Khalifa</h3>
                      <a href="work.html"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img" style={{ backgroundImage: `url(${gallery3Img})` }}></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3><span>Intorior</span>Burj Khalifa</h3>
                      <a href="work.html"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img" style={{ backgroundImage: `url(${gallery4Img})` }}></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3><span>Intorior</span>Burj Khalifa</h3>
                      <a href="work.html"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img" style={{ backgroundImage: `url(${gallery5Img})` }}></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3><span>Intorior</span>Burj Khalifa</h3>
                      <a href="work.html"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="single-gallery mb-30">
                  <div className="gallery-img" style={{ backgroundImage: `url(${gallery6Img})` }}></div>
                  <div className="thumb-content-box">
                    <div className="thumb-content">
                      <h3><span>Intorior</span>Burj Khalifa</h3>
                      <a href="work.html"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery Area End */}
        
        {/* Team Start */}
        <div className="team-area section-padding30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                {/* Section Tittle */}
                <div className="section-tittle text-center mb-70">
                  <span>Creative derector</span>
                  <h2>Best Interitor Services</h2>
                </div> 
              </div>
            </div>
            <div className="row">
              {/* single Tem */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={team2Img} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3><a href="#">Jhon Sunsa</a></h3>
                    <span>Creative derector</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={team3Img} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3><a href="#">Jhon Sunsa</a></h3>
                    <span>Creative derector</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={team1Img} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3><a href="#">Jhon Sunsa</a></h3>
                    <span>Creative derector</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        
        {/* Testimonial Start */}
        <div className="testimonial-area testimonial-padding">
          <div className="container">
            {/* Testimonial contents */}
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <img src={testiLogoImg} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                      </div>
                      {/* founder */}
                      <div className="testimonial-founder  ">
                        <div className="founder-img">
                          <span><strong>Christine Eve</strong>   -   Co Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption ">
                      <div className="testimonial-top-cap">
                        <img src={testiLogoImg} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                      </div>
                      {/* founder */}
                      <div className="testimonial-founder  ">
                        <div className="founder-img">
                          <span><strong>Christine Eve</strong>   -   Co Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        
        {/* Brand Area Start */}
        <div className="brand-area pt-120 pb-120">
          <div className="container">
            <div className="brand-active brand-border pt-50 pb-40">
              <div className="single-brand">
                <img src={brand1Img} alt="" />
              </div>
              <div className="single-brand">
                <img src={brand2Img} alt="" />
              </div>
              <div className="single-brand">
                <img src={brand3Img} alt="" />
              </div>
              <div className="single-brand">
                <img src={brand4Img} alt="" />
              </div>
              <div className="single-brand">
                <img src={brand5Img} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Brand Area End */}
        
        {/* Want To work */}
        <section className="wantToWork-area w-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>Are you Searching For a First-Class Consultant?</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="#" className="btn btn-black f-right">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
        {/* Want To work End */}
        
        {/* Blog Area Start */}
        <div className="home-blog-area section-padding30">
          <div className="container">
            {/* Section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-70">
                  <span>Our latest blog</span>
                  <h2>Our recent news</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={homeBlog1Img} alt="" />
                    </div>
                    <ul>
                      <li className="black-bg">October 27, 2020</li>
                      <li>By Admin   -   30 Likes   -   4 Comments</li>
                    </ul>
                    <div className="blog-cap">
                      <h3><a href="blog_details.html">16 Easy Ideas to Use Everyday Stuff in Kitchen.</a></h3>
                      <a href="blog_details.html" className="more-btn">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={homeBlog2Img} alt="" />
                    </div>
                    <ul>
                      <li className="black-bg">October 27, 2020</li>
                      <li>By Admin   -   30 Likes   -   4 Comments</li>
                    </ul>
                    <div className="blog-cap">
                      <h3><a href="blog_details.html">16 Easy Ideas to Use Everyday Stuff in Kitchen.</a></h3>
                      <a href="blog_details.html" className="more-btn">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Area End */}
      </main>

      <footer>
        {/* Footer Start*/}
        <div className="footer-area footer-bg">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    {/* logo */}
                    <div className="footer-logo">
                      <a href="index.html"><img src={logoFooterImg} alt="" /></a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">Grabbing the concsumer's attention isn't enough you have to keep that attention for at least a.</p>
                      </div>
                    </div>
                    <div className="footer-number">
                      <h4><span>+564 </span>7885 3222</h4>
                      <p>youremail@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Useful Links</h4>
                    </div>
                    <div className="footer-cap">
                      <span>New York</span>
                      <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                    </div>
                    <div className="footer-cap">
                      <span>Japan</span>
                      <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                    </div>
                  </div>
                </div>
                {/* Instagram */}
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Instagram Feed</h4>
                    </div>
                    <div className="instagram-gellay">
                      <ul className="insta-feed">
                        <li><a href="#"><img src={instagram1Img} alt="" /></a></li>
                        <li><a href="#"><img src={instagram2Img} alt="" /></a></li>
                        <li><a href="#"><img src={instagram3Img} alt="" /></a></li>
                        <li><a href="#"><img src={instagram4Img} alt="" /></a></li>
                        <li><a href="#"><img src={instagram5Img} alt="" /></a></li>
                        <li><a href="#"><img src={instagram6Img} alt="" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  {/* Footer Social */}
                  <div className="footer-social f-right">
                    <span>Follow Us</span>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fas fa-globe"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End*/}
      </footer>
      
      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
      </div>
    </div>
  );
};

export default Home;