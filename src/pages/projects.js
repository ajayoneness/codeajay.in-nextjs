import ProjectBox from '@/components/ProjectBox';
import React from 'react';

// Fetch projects data using getServerSideProps
export async function getServerSideProps() {
  try {
    // Fetch data from the Django API
    const res = await fetch('http://localhost:8000/projects/api/all/');
    
    // Check if the response is okay
    if (!res.ok) {
      throw new Error('Failed to fetch projects');
    }

    // Parse the JSON data
    const projects = await res.json();
    console.log(projects)

    // Return the projects data as props
    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        projects: [],
      },
    };
  }
}

const Projects = ({ projects }) => {
  console.log(projects['projects'])
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: `
        .active {
          color: var(--color4);
        }
        .home-active {
          color: var(--color2);
        }
        .blog-active {
          color: var(--color2);
        }
        .project-active {
          color: var(--color4);
        }
        .contact-active {
          color: var(--color2);
        }
        .about-active {
          color: var(--color2);
        }
        .cdd {
          margin-bottom: 10px;
        }
        .ccarddd {
          background-color: var(--color8);
          padding: 10px;
        }
        .textttt h3 {
          color: var(--color4);
        }
        .textttt p {
          color: var(--color5);
          font-size: 13px;
        }
      `}} />
      
      <section className="container" style={{ paddingTop: 110 }}>
        <div className="head-text">
          <h3 className="text">Our Projects</h3>
          <h2 className="shadow">Projects</h2>
          <p className="decription">
            Expert Python Django Full Stack Developer | Flutter Mobile App Developer | Building Next-Gen Solutions
          </p>
        </div>

        {/* Pass the fetched projects to the ProjectBox component */}
        <ProjectBox projects={projects['projects']} />
      </section>
    </div>
  );
};

export default Projects;
