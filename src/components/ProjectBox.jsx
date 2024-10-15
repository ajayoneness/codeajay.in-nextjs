import React from 'react';
import Link from 'next/link';

// ProjectBox Component to display a single project
const ProjectBox = ({ project }) => {
  return (
    <div className="col-sm-12 col-lg-4 col-md-6 cdd">
      <div className="m-3 ccarddd">
        {/* Client-side navigation */}
        <Link href={`/projects/${project.slug}`}>
       
            <img
              className="img-fluid"
              src={`http://localhost:8000/${project.image}`}
              alt={project.title}
            />
        
        </Link>

        <div className="textttt p-3">
          <h3>
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p>{project.short_description}</p>

          <Link className="learn-more" href={`/projects/${project.slug}`}>
           
              Learn More
              <i
                className="fa-solid fa-arrow-right"
                style={{ marginTop: 20, marginLeft: 10 }}
              />
     
          </Link>
        </div>
      </div>
    </div>
  );
};

// ProjectsPage component to render multiple project boxes
const ProjectsPage = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project) => (
        <ProjectBox key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
