import React from 'react'

const about = () => {
    return (





<div>

 <style dangerouslySetInnerHTML={{__html: "\n\n\n\n\n\n\n    .active{\n        color :var(--color4);\n    }\n\n    .home-active{\n\n    color : var(--color2);\n    }\n    .blog-active{\n\n        color : var(--color2);\n    }\n    .about-active{\n\n        color : var(--color4);\n    }\n    .contact-active{\n\n        color : var(--color2);\n    }\n\n\n\n\n" }} />




        <section className="about  pb-5" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-8 col-sm-12 " style={{ marginTop: '-50px' }}>
                        <div className="head-text" style={{ marginTop: 150 }}>
                            <h2 className="text">About Me</h2>
                            <h1 className="shadow">About</h1>
                        </div>
                        <p style={{ color: 'gray' }}>
                            I am a dedicated and passionate Full Stack Developer with extensive expertise in Python Django and a flair for building innovative solutions. My journey in software development has led me to excel not only in Django but also as a proficient Flutter Mobile App Developer.
                            <br />
                            My commitment to staying up-to-date with the latest trends in technology and my ability to tackle complex challenges make me a valuable asset to any project. I thrive in collaborative environments, and my goal is to leverage my skills to create next-generation solutions that deliver outstanding user experiences.
                            <br />
                            With a proven track record of successfully delivering projects on time and exceeding client expectations, I am ready to take on new challenges and contribute to the success of your next venture. Let's connect and discuss how I can help bring your ideas to life.
                        </p>
                        <br /><br />
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 " style={{ marginTop: 100 }}>
                        <img className="img-fluid imgggg" src="/assets/aj.jpg" alt="About" />
                    </div>
                    <div className="col-md-12 col-lg-6 col-sm-12 " style={{ marginTop: '-50px' }}>
                        <a href="https://www.linkedin.com/in/codeaj/">
                            <img src="/assets/linkedin2.png" className="img-fluid " alt="linkedin" />
                        </a>
                        {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="codeaj" data-version="v1">
                  <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/codeaj?trk=profile-badge"></a>
              </div> */}
                    </div>
                    <div className="col-md-12 col-lg-6 col-sm-12">
                        <br /><br />
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




        </div>




    )
}

export default about
