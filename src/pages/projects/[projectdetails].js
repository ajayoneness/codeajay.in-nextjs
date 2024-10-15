import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const ProjectDetails = () => {
  const router = useRouter();
  const { projectdetails } = router.query; // Get slug from the URL

  // State to hold the project details
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the project details using the slug
  useEffect(() => {
    if (projectdetails) {
      const fetchProjectDetails = async () => {
        try {
          const res = await fetch(`http://localhost:8000/projects/api/${projectdetails}/`);
          if (!res.ok) {
            throw new Error('Failed to fetch project details');
          }
          const data = await res.json();
          setProject(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchProjectDetails();
    }
  }, [projectdetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>No project found</div>;
  }


  const baseUrl = "http://localhost:8000/"; 

  return (
    // <div className="aja">
    //   <h1>{project.title}</h1>
    //   <img src={project.image} alt={project.title} />
    //   <p>{project.description}</p>
    //   {/* Add other project details if available */}
    // </div>
<>

    <link rel="stylesheet" href="assets/css/style.css" />

    



<div>
  <style dangerouslySetInnerHTML={{__html: "\n\n\n\n\n\n\n.active{\n    color :var(--color4);\n}\n\n.home-active{\n\ncolor : var(--color2);\n}\n.blog-active{\n\n    color : var(--color2);\n}\n.project-active{\n\n    color : var(--color4);\n}\n.contact-active{\n\n    color : var(--color2);\n}\n\n .about-active{\n\n    color : var(--color2);\n}\n\n\n\n.cdd{\n   \n    margin-bottom: 10px;\n}\n\n\n.ccarddd{\n    background-color: var(--color8);\n    padding:10px;\n}\n\n.textttt h3{\n    color: var(--color4);\n}\n\n.textttt p{\n    color: var(--color5);\n    font-size: 13px;\n}\n\n.imggg{\n    width: 50%;\n}\n\n.paraa{\n\n    color: var(--color5);\n   \n\n}\n\n@media only screen and (max-width: 600px) {\n.imggg{\n    width: 100%;\n}\n}\n\n\n\n\n\n\n\n" }} />
  <section className="container" style={{paddingTop: 110}}>
    <div className="head-text">
      <h3 className="text">{project.title}</h3>
      <h2 className="shadow">{project.title}</h2>
      <p className="decription">{project.short_description}</p>
    </div>
    <div className="text-center">
      <a href="#videoo">

        <img className="img-fluid imggg" src={`${baseUrl}${project.image}`} alt={project.title} />

      </a>
    </div>
    <div className="row">
      <div className="col-sm-12 col-lg-1 col-md-12" />
      <div className="col-sm-12 col-lg-10 col-md-12">
        <p style={{color: 'var(--color4)'}}>{project.updated_at} | Rating : {project.ratings} | Developer : {project.owner}</p>
        <a href="#contact" className style={{border: '2px solid white', padding: 10}}>
          Get this Project
          <i className="fa-solid fa-arrow-right" style={{marginTop: 20, marginLeft: 10}} />
        </a>
        <br/><br/>
        <p className="paraa">
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
        </p>
        <br /><br />
        <iframe id="videoo" width="100%" height="450px" src={project.youtubeId} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
    </div>
  </section>
</div>









</>

  );
};

export default ProjectDetails;
