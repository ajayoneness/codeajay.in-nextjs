import React from 'react'

const Footer = () => {
  return (
    
<div>
  <section className="contact pt-5 pb-5" id="contact">
    <br /><br /><br />
    <div className="container">
      <div className="head-text">
        <h3 className="text">Contact Me</h3>
        <h2 className="shadow">Contact</h2>
        <p className="decription">Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions</p>
      </div>
      <div className="row text-center">
        <div className="col-md-4 col-lg-3 col-sm-6 mb-3"> 
          <div className="cd">
            <a href="https://maps.app.goo.gl/uQ3QgWS4AJR6vYMBA">
              <div className="boo">
                <div className="bo">
                </div>
                <i className="fa-solid fa-map-location-dot" />
              </div>
              <h5>ADDRESS</h5>
              <p>
                Bengaluru, India
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-sm-6 mb-3"> 
          <div className="cd">
            <a href="tel:+918603862290">
              <div className="boo">
                <div className="bo">
                </div>
                <i className="fa-solid fa-phone" />
              </div>
              <h5>CONTACT NUMBER</h5>
              <p>
                +91 8603862290
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-sm-6 mb-3"> 
          <div className="cd">
            <a href="mailto:codeaj4u@gmail.com">
              <div className="boo">
                <div className="bo">
                </div>
                <i className="fa-solid fa-paper-plane" />
              </div>
              <h5>EMAIL ADDRESS</h5>
              <p>
                codeaj4u@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-sm-6 mb-3"> 
          <div className="cd">
            <a href="https://wa.me/918603862290">
              <div className="boo">
                <div className="bo">
                </div>
                <i className="fa-brands fa-whatsapp" />
              </div>
              <h5>WHATSAPP</h5>
              <p>
                +91 8603862290
              </p>
            </a>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="row cccccc">
        <div className="col-md-12 col-lg-6 col-sm-12 con2 p-5">
          <h4 className="text-center">Get in Touch</h4>
          <br />
          <form method="post">
            {'{'}% csrf_token %{'}'}
            <input className="form-control mb-3" name="name" type="text" placeholder="YourName" />
            <input className="form-control mb-3" type="number" name="contact" placeholder="PhoneNumber" />
            <input className="form-control mb-3" type="email" name="email" placeholder="YourEmail" />
            <textarea className="form-control mb-4" rows={5} cols={70} name="message" placeholder="Message" defaultValue={""} /><br />
            <div className="text-center">
              <input type="submit" className="button1" />
            </div>
          </form>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12  con1">
          <a href="https://github.com/ajayoneness">
            <img src="/assets/gitprofile.jpg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-3">
          <a href="/"><img src="assets/codeaj1.png" width="180px" alt="Logo" /></a>
          <p>
            Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions
          </p>
          <div className="row social-icon">
            <div className="col ">
              <a href="https://www.linkedin.com/in/codeaj/">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.instagram.com/code_ajay/">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            {/* <div class="col">
                  <i class="fa-brands fa-facebook-f"></i>
              </div> */}
            <div className="col">
              <a href="https://github.com/ajayoneness">
                <i className="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-3">
          <br /><br /><br />
          <h3>Link</h3>
          <br />
          <ul>
            <li><a className="home-active" href="#">Home</a></li>
            <li className="blognav"><a className="blog-active" href="/blog/{{blogs.0.slug}}">Blog</a></li>
            <li><a href="/#service">Service</a></li>
            <li><a href="/#portfolio">Portfolio</a></li>
            <li><a className="about-active" href="#">About</a></li>
            <li><a className="contact-active" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-3">
          <br /><br /><br />
          <h3>Latest Projects</h3>
          <br />
          <div className="row">
          
            <div className="col-3 mb-3">
              
              <img src="" className="img-fluid immg" alt="" />
              
            </div>
            <div className="col-8 mb-3 ">
              <p className="ttle"><a href="/projects/">Project title</a></p>
            </div>
           
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-3">
          <br /><br /><br />
          <h3>Have a Questions?</h3>
          <br />
          <div className="row">
            <div className="col-2">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div className="col-10">
              Bangalore, India
            </div>
            <div className="col-2 mt-3">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="col-10 mt-3">
              +91 8603862290
            </div>
            <div className="col-2 mt-3">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="col-10 mt-3">
              codeaj4u@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12  text-center p-4 copyright" style={{backgroundColor: 'var(--color10)'}}>
      Copyright ©2023 All right reserved | <a href="{% url 'privacy-policy' %}">Privacy Policy</a>
    </div> 
  </section>
</div>



  )
}

export default Footer
