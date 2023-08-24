import { useRouter } from 'next/router';
import projectsData from '../projectsData';

export default function ProjectPage(){
  const router = useRouter();
  const { projectSlug } = router.query;

  // Find the project based on projectSlug
  const project = projectsData.find((project) => project.slug === projectSlug);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h2>Technologies Used:</h2>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};
