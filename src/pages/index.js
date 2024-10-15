import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {
  return (



    <div>
      <main className="main" id="home">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-lg-6 col-sm-12 main-text">
              <h1 className="mmm">
                I'm
                
                <span>
                  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval={10000}>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        Web Developer
                      </div>
                      <div className="carousel-item">
                        Mobile Developer
                      </div>
                      <div className="carousel-item">
                        Designer
                      </div>
                      <div className="carousel-item">
                        AI/ML Developer
                      </div>
                    </div>
                  </div>
                </span>

              </h1>
              <p>
                I am a dedicated and passionate Full Stack Developer with extensive expertise in Python Django and a flair for building innovative solutions. My journey in software development has led me to excel not only in Django but also as a proficient Flutter Mobile App Developer.
              </p>
              <p>
                My commitment to staying up-to-date with the latest trends in technology and my ability to tackle complex challenges make me a valuable asset to any project. I thrive in collaborative environments, and my goal is to leverage my skills to create next-generation solutions that deliver outstanding user experiences.
              </p>
              <br /><br />
              {/*                    <a href="#" class="button1" >Hire Me</a>*/}
              <a href="#portfolio" className="button2">My Work</a>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 main-image mt-3 ">
              <div className="booooox">
                <div className="weel" id="rotatingCircle">
                  <div className="center-circle" />
                  <div className="numbers">
                    <div className="number number-4">
                      <i className="fa-brands fa-python" />
                    </div>
                    <div className="number number-6">
                      <i className="fa-brands fa-java" />
                    </div>
                    <div className="number number-7">
                      <i className="fa-brands fa-js" />
                    </div>
                    <div className="number number-8">
                      <i className="fa-brands fa-android" />
                    </div>
                    <div className="number number-9">
                      <i className="fa-brands fa-react" />
                    </div>
                    <div className="number number-10">
                      <i className="fa-brands fa-html5" />
                    </div>
                    <div className="number number-11">
                      <i className="fa-brands fa-css3-alt" />
                    </div>
                    <div className="number number-12">
                      <i className="fa-brands fa-aws" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="about  pb-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-sm-12 mt-5">
              <br /><br />
              <a href="https://www.linkedin.com/in/codeaj/">
                <img src="/assets/linkedin2.png" className="img-fluid " style={{ marginTop: 130 }} alt="linkedin" />
              </a>
              {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="codeaj" data-version="v1">
                  <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/codeaj?trk=profile-badge"></a>
              </div> */}
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12">
              <br /><br /><br /><br /><br /><br /><br /><br />
              <div className="head-text">
                <h3 className="text">About Me</h3>
                <h2 className="shadow">About</h2>
                <p className="decription">Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions</p>
              </div>
              <div className="row about-text">
                <div className="col-4 bold-about f">Name </div>
                <div className="col-6 s">Ajay Pandit</div>
                {/* <div class="col-4 bold-about f">Date of birth </div>
                  <div class="col-6 s">May 07 1998</div> */}
                <div className="col-4 bold-about f">Address </div>
                <div className="col-6 s"><a href="https://maps.app.goo.gl/uQ3QgWS4AJR6vYMBA">Bangalore</a> </div>
                <div className="col-4 bold-about f">Zip Code </div>
                <div className="col-6 s">560066</div>
                <div className="col-4  bold-about f">Email </div>
                <div className="col-6 s">
                  <a href="mailto:codeaj4u@gmail.com">codeaj4u@gmail.com</a></div>
                <div className="col-4 bold-about f">Phone </div>
                <div className="col-6 s"><a href="tel:918603862290">+91 8603862290</a></div>
                <br /><br />
                <p><span>53</span> Project complete</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services pt-5" id="service">
        <div className="container">
          <div className="head-text">
            <h3 className="text">Services</h3>
            <h2 className="shadow">Services</h2>
            <p className="decription">Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions</p>
          </div>
          <div className="row boxxxxx">
            <div className="col-md-6 col-sm-12 col-lg-4 bb">
              <div className="carddd  text-center ">
                <i className="fa-solid fa-laptop-code" />
                <p>Web Developer</p>
              </div>
              <div className="card cardd " />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-4 bb">
              <div className="carddd  text-center">
                <i className="fa-solid fa-robot" />
                <p>AI/ML</p>
              </div>
              <div className="card cardd ">
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-4 bb">
              <div className="carddd text-center">
                <i className="fa-brands fa-app-store-ios" />
                <p>App Developer</p>
              </div>
              <div className="card cardd ">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whychooseme">
        <div className="container">
          <div className="head-text">
            <h3 className="text">Why Me</h3>
            <h2 className="shadow">Why Me</h2>
            <p className="decription">Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3 boxxx">
              <h4>
                Profressional and Dedicated Team
              </h4>
              <p>
                Building architectures with modern technology
              </p>
              <i className="fa-solid fa-users-viewfinder" />
              <br />
              <a href="#">More</a>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 boxxx">
              <h4>
                Unique Design
              </h4>
              <p>
                Bring the beautifully for your house, Just enjoy!
              </p>
              <i className="fa-solid fa-compass-drafting" />
              <br />
              <a href="#">More</a>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 boxxx">
              <h4>
                Affordable and Flexiable
              </h4>
              <p>
                Bring nature in your house. Health is important
              </p>
              <i className="fa-solid fa-credit-card" />
              <br />
              <a href="#">More</a>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3 boxxx">
              <h4>
                24/7 Support
              </h4>
              <p>
                Consulting Solutions and make plan to renovation
              </p>
              <i className="fa-regular fa-clock" />
              <br />
              <a href="#">More</a>
            </div>
          </div>
        </div>
      </section>
      <section className="ourproject pt-5 pb-5" id="portfolio">
        <div className="container">
          <div className="container1">
            <div className="head-text">
              <h3 className="text">Our Projects</h3>
              <h2 className="shadow">Projects</h2>
              <p className="decription">Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="project-detail">
                  <a href="#">
                    <h2>PlayHere Quiz</h2>
                    <p>
                      PlayHere is the learning and practicing platform where you can learn or practice multiple-choice questions by playing quizzes, and it helps all types of students who want to learn or practice for any entrance exam. It also improves your knowledge by allowing you to practice on this platform multiple times.
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="right-card">
                  <img className="img-fluid img1" src="/assets/playhere.jpg" alt="PlayHere Quiz" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="left-card">
                  <img className="img-fluid img1" src="/assets/kalyan.jpg" alt="Kalyan Hospital" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="project-detail">
                  <a href="#">
                    <h2>Kalyan Hospital</h2>
                    <p>
                      Kalyan Health Care: OPD/test bills, report access, secure record storage. User-friendly, mobile-ready for seamless health management.
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="project-detail">
                  <a href="#">
                    <h2>Emotion is Every Thing</h2>
                    <p>
                      Python Django, Deepface &amp; CV2 power a real-time facial emotion analysis project. It offers personalized movie recommendations, transforming the movie streaming landscape.
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="right-card">
                  <img className="img-fluid img1" src="/assets/emotion.png" alt="Emotion is Every Thing" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="left-card">
                  <img className="img-fluid img1" src="/assets/ra.jpg" alt="RA Studios" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="project-detail">
                  <a href="#">
                    <h2>RA Studios</h2>
                    <p>
                      RAstudio: Django-based platform offering diverse quotes like love, motivation. Sleek design, easy exploration. Search, share quotes, fostering community. Dynamic, robust backend ensures fresh content.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4" style={{ marginBottom: 100 }}>
          <a href="/projects" type="submit" className="button2">View All</a>
        </div>
      </section>
      {/* <section class="ourblog">

            <div class="container">
          <div class="head-text">

              <h3 class="text">Our Blog</h3>
              <h2 class="shadow">Blog</h2>
              <p class="decription">Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions</p>

          </div>

          

          <div class="row">

              {% for i in tblog %}
              <div class="col-md-6 col-lg-4 col-sm-12 mb-3">

                  <div class="card">

                      {% if  i.image != "" %}
                      <img src="{{i.image.url}}" alt="{{i.title}}">
                      {% endif %}

                      <div class="texttt">
                          <p class="date">{{ i.created_at|date:"M d, Y" }}   &nbsp;&nbsp;&nbsp;   {{i.author}}  &nbsp;&nbsp;&nbsp;    <span>
                              <i class="fa-regular fa-message"></i> 3
                          </span></p>
                          <h5>
                              <a href="/blog/{{i.slug}}">
                                  {{i.title}}
                              </a>
                          </h5>
                          <p>
                              {{i.meta_description}}
                          </p>
                      </div>
            
                  </div>
            
              </div>


              {% endfor %}
          </div>
            </div>  
    </section> */}

      <section className="freelancer pb-5" id="freelancer">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 col-lg-3 col-sm-6 mb-3">
              <div className="card">
                <h2>10</h2>
                <p>Awards</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mb-3">
              <div className="card">
                <h2>56</h2>
                <p>Complete Projects</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mb-3">
              <div className="card">
                <h2>20</h2>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6 mb-3">
              <div className="card">
                <h2>25</h2>
                <p>Certificates</p>
              </div>
            </div>
          </div>
          <div className="text text-center">
            <h2 style={{ color: 'white' }}>I'm <span>Avilable</span> for freelancing</h2>
            <p style={{ color: 'white' }}>
              I am a highly motivated and experienced web developer with over 5 years of experience <br /> in developing websites. My expertise includes HTML, CSS,JS,Python.
            </p>
            <a href="#contact" className="button1">HIRE ME</a>
          </div>
        </div>
        <br /><br />
      </section>
    </div>



  );
};

export default HomePage;
